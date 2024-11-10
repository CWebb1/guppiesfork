import { redirect } from '@sveltejs/kit';

const baseUrl = "https://greedy-guppies-api-ozm3.onrender.com"; // Remove trailing slash

export const actions = {
    login: async ({ cookies, request }) => {
        try {
            // Parse the form data
            const data = await request.formData();
            const email = data.get('email');
            const password = data.get('password');

            // Log the request being made
            console.log('Making login request with email:', email);

            // Log the user in via the API and save the token to a cookie
            const res = await fetch(`${baseUrl}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            // Log the response status and headers
            console.log('Response status:', res.status);
            console.log('Response headers:', Object.fromEntries(res.headers.entries()));

            // Check if the response is ok (status in the range 200-299)
            if (!res.ok) {
                const errorText = await res.text();
                console.error('Login failed:', errorText);
                return {
                    status: res.status,
                    error: 'Login failed: ' + errorText
                };
            }

            // Parse the response
            const responseData = await res.json();
            console.log('Response data:', responseData);

            // Verify we have a token
            if (!responseData.token) {
                console.error('No token in response');
                return {
                    status: 400,
                    error: 'No token received from server'
                };
            }

            // Set the cookie with explicit options
            cookies.set('token', responseData.token, {
                path: '/',
                httpOnly: true,
                sameSite: 'strict',
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60 * 24 * 7 // 1 week
            });

            // Log that we're setting the cookie
            console.log('Setting cookie with token');

            // Redirect to dashboard
            throw redirect(303, '/Dashboard');
        } catch (error) {
            console.error('Login error:', error);
            return {
                status: 500,
                error: 'An unexpected error occurred'
            };
        }
    },
    logout: async ({ cookies }) => {
        // Remove the token cookie to log the user out
        cookies.delete('token', { path: '/' });
        throw redirect(303, '/'); // And back to the login page
    },
    register: async ({ request }) => {
        // Parse the form data
        const data = await request.formData();
        const name = data.get('name');
        const email = data.get('email');
        const password = data.get('password');

        // Register the user via the API
        const res = await fetch(`${baseUrl}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        });
        // If the response is html, the registration failed
        if (res.headers.get('content-type').includes('text/html')) {
            return {
                status: 401,
                error: 'Registration failed'
            };
        }
        throw redirect(303, '/'); // Send the user to the login once registered
    }
};
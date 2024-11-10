<script>
    let submitting = false;
    let error = '';
</script>

<!-- A log in form with the option to register instead -->
<form method="POST" action="?/login">
    <h2>Log in</h2>
    
    {#if error}
        <div class="error">{error}</div>
    {/if}
    
    <label for="email">Email: </label>
    <input type="email" id="email" name="email" required />

    <label for="password">Password: </label>
    <input type="password" id="password" name="password" required />

    <button type="submit" disabled={submitting}>
        {submitting ? 'Logging in...' : 'Submit'}
    </button>
    <p>Don't have an account? <a href="/Register">Register</a></p>
</form>

<style>
    h2 {
        margin: 0;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 40%;
        margin: 0 auto;
        border: #ccc solid 1px;
        padding: 1rem;
        border-radius: 0.5rem;
    }

    label {
        margin: 0.5rem 0;
    }

    input {
        padding: 0.5rem;
        font-size: 1rem;
    }

    button {
        padding: 0.5rem;
        font-size: 1rem;
        background-color: #333;
        color: white;
        border: none;
        cursor: pointer;
        margin-top: 1em;
    }

    button:hover:not([disabled]) {
        background-color: #555;
    }

    button[disabled] {
        background-color: #999;
        cursor: not-allowed;
    }

    a {
        color: #333;
    }

    .error {
        color: red;
        margin: 1rem 0;
        padding: 0.5rem;
        background-color: #ffebee;
        border-radius: 4px;
    }
</style>
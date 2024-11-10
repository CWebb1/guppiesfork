<script lang="ts">
  export let showDropdown = false;

  function toggleDropdown() {
    showDropdown = !showDropdown;
  }
  import { redirect } from '@sveltejs/kit';

// const baseUrl = "https://web1-pr-1.onrender.com";
const baseUrl = "https://greedy-guppies-api-ozm3.onrender.com/";

// Actions process the form data and make requests to the API
export const actions = {
    logout: async ({ cookies }) => {
        // Remove the token cookie to log the user out
        cookies.delete('token', { path: '/' });
        throw redirect(303, '/'); // And back to the login page
    }
};
</script>

<div id="menucontainer">
  <input id="toggleChecker" type="checkbox" on:click={toggleDropdown}>
<label id="togglerLable" for="toggleChecker">
  <div class="checkboxtoggler">
    <div class="line-1"></div>
    <div class="line-2"></div>
    <div class="line-3"></div>
  </div>
</label>
</div>

{#if showDropdown}
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <hr />
      <li><a href="/About">About</a></li>
      <hr />
      <li><a href="/Help">Help</a></li>
      <hr />
      <li><a href="/Login">Login</a></li>
      <hr/>
      <li><a href="/Register">Register</a></li>
      <!-- <li><a href="/DrinkJournal">Drink Journal</a></li> -->
    </ul>
  </nav>
{/if}

<style>
  @keyframes navSlideIn {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  nav {
    /* Navigation Bar Container */
    z-index: 10;
    top: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    border: 2.5px solid #E98074;
    width: 125px;
    position: fixed;
    animation-name: navSlideIn;
    animation-duration: 0.5s;
    margin-left: 15px;
    background-color: #EAE7DC;
  }

  hr{
    color:  #E98074;
    width: 50px;
    opacity: 0.5;
  }

  nav ul {
    /* The style for the list of navigation options */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    list-style: none;
  }

  nav ul li {
    /* Navigation options styles */
    font-size: 20px;
    font-weight: bolder;
    padding-top: 5px;
    padding-bottom: 10px;
  }

  nav ul li a {
    /* removes underline from nav options */
    text-decoration: none;
  }
  #menucontainer {
    margin-left: 15px;
    padding: 15px;
    border: 2.5px solid #E98074;
  }
  .checkboxtoggler {
    width: 3em;
    display: flex;
    flex-direction: column;
    gap: 0.7em;
    cursor: pointer;
  }

  .line-1 {
    background: #E98074;
    height: 0.3em;
    border-radius: 10em;
    transition-duration: 500ms;
  }

  .line-2 {
    background: #E98074;
    height: 0.3em;
    border-radius: 10em;
    transition-duration: 500ms;
  }

  .line-3 {
    background: #E98074;
    height: 0.3em;
    border-radius: 10em;
    transition-duration: 500ms;
  }

  #toggleChecker {
    height: 3em;
    width: 100%;
    display: none;
  }

  #toggleChecker:checked + #togglerLable .checkboxtoggler .line-1 {
    -webkit-transform: rotate(45deg) translateY(0.7em) translateX(0.7em);
    -ms-transform: rotate(45deg) translateY(0.7em) translateX(0.7em);
    transform: rotate(45deg) translateY(0.7em) translateX(0.7em);
  }

  #toggleChecker:checked + #togglerLable .checkboxtoggler .line-2 {
    -webkit-transform: rotate(-45deg) translateY(0em) translateX(0.1em);
    -ms-transform: rotate(-45deg) translateY(0em) translateX(0.1em);
    transform: rotate(-45deg) translateY(0em) translateX(0.1em);
  }

  #toggleChecker:checked + #togglerLable .checkboxtoggler .line-3 {
    transform: scaleX(0);
    transform-origin: left;
  }
</style>

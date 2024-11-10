<script>
  import Search from "../Components/Search.svelte";
  import Sidebar from "./Sidebar.svelte";
  import { redirect } from "@sveltejs/kit";

  const baseUrl = "https://greedy-guppies-api-ozm3.onrender.com/";

  // Actions process the form data and make requests to the API
  export const actions = {
    logout: async ({ cookies }) => {
      // Remove the token cookie to log the user out
      cookies.delete("token", { path: "/" });
      throw redirect(303, "/"); // And back to the login page
    },
  };
</script>

<header>
  <div class="header-container">
    <Sidebar />
    <img id="greedylogo" src="/logo.png" alt="Greedy Guppies Logo" />
    <div>
      <li>
        <form id="logout" method="POST" action="?/logout">
          <button type="submit">Logout</button>
        </form>
      </li>
    </div>
  </div>
</header>

<style>
  li{
    list-style: none;
  }
  button{
    font-size: 1rem;
    font-weight: bold;
    height: 30px;
    background-color: #eae7dc;
    border: 2.5px solid #e98074;
    border-radius: 10px;
    text-align: center;
    font-size: large;
    margin-left: 5px;
  }
  header {
    background-color: #eae7dc;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  #greedylogo {
    width: 250px;
    height: 100px;
    flex-shrink: 0; /* Prevents the logo from shrinking */
    padding-right: 15px;
  }

  #openfood {
    width: 75px;
    height: 100px;
    flex-shrink: 0; /* Prevents the OpenFoodFacts image from shrinking */
  }
</style>

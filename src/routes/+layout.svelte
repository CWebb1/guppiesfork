<script>
  import Footer from "../Components/Footer.svelte";
  import Header from "../Components/Header.svelte";
</script>

<div class="container">
  <header>
    <Header />
  </header>

  <main>
    <slot />
  </main>

  <footer><Footer /></footer>
</div>

<style>
  :root{
   background-color: #EAE7DC; 
  }
  .container {
    display: grid;
    grid-template: auto 1fr auto / auto 1fr;
  }
  header {
    grid-column: 1 / 4;
    position: sticky;
    top: 0;
    z-index: 100;
  }
  main {
    grid-column: 2;
    justify-content: center;
    padding: 20px;
  }

  footer {
    grid-column: 1 / 4;
  }
</style>

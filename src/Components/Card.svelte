<script>
  import Details from "./Details.svelte";
  import Photos from "./Photos.svelte";
  export let item;

  const data = item.product_name && item.image_url && item.product_quantity && item.product_quantity_unit;
  const ValidData = item.nutriments.carbohydrates || item.nutriments.caffeine || item.nutriments.fats || item.nutriments.proteins;
</script>
{#if ValidData && data }
<section class="card">
  <Details {item} />
  <Photos {item} />
</section>
{/if}
<style>
  .card {
    display: flex;
    padding: 0.5em; /*Spacing around edge of card inside boarder (around the image)*/
    border: 2.5px solid #E98074;
    border-radius: 20px; /*Rounds the corners of the card*/
    background-color: #EAE7DC;
    /* height: 20em; Hard set size of card equal to image height */
    box-shadow: 0 10px #fab6ae; /*Adds shadow to the card*/
    transition: 200ms ease-in-out; /*Adds delay between static and hovered states smoothly*/
    flex-basis: 500px; /*Sets the width of the card to 30% of the screen width*/
    max-width: 450px;
    min-height: 420px;
    /* flex: 1 1 calc(20% - 10px); */
    box-sizing: border-box;
    
  }
  .card:hover {
    /*On hover changes changes colour and cursor*/
    background-color: #D8C3A5;
    box-shadow: 0 0 25px #fab6ae;
    cursor: pointer;
    /* transform: scale(1.05); Increase size of the card that is hovered */
    overflow: visible;
  }

  
  
  @media (max-width: 600px) {
    .card {
      flex-direction: row; /* Stack Details and Photos side by side on larger screens */
      flex-basis: calc(50% - 10px); /* Two cards per row on medium screens */
    }
  }

  @media (max-width: 900px) {
    .card {
      flex-basis: calc(33.33% - 10px); /* Three cards per row on larger screens */
    }
  }
</style>

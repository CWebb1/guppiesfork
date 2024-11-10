<script>
  import DetailedCard from "./Detailed-card.svelte";

  export let item;
  let isExpanded = false;

  function toggleCard() {
    isExpanded = !isExpanded;
  }
</script>

<section>
  {#if item && item.product_name === ""}
    <h1>No product name available</h1>
  {:else}
    <h1>{item.product_name}</h1>
  {/if}
 <div class="spacing">
 
  <p>Size:{item.product_quantity ? item.product_quantity + item.product_quantity_unit : 'No information'}</p>
  <p>spot for extra info</p>
  <p>
    Health Grade:
    {#if item.nutrition_grades === "a"}<img src="\Nutriscore_A.png" alt="A"/>
    {:else if item.nutrition_grades === "b"}<img src="\Nutriscore_B.png" alt="B"/>
    {:else if item.nutrition_grades === "c"}<img src="\Nutriscore_C.png" alt="C"/>
    {:else if item.nutrition_grades === "d"}<img src="\Nutriscore_D.png" alt="D"/>
    {:else if item.nutrition_grades === "e"}<img src="\Nutriscore_E.png" alt="E"/>
    {/if}
  </p>

  <button class="detailsToggle" on:click={toggleCard}>
    {isExpanded ? "Show Less" : "Show More"}
  </button>
 </div>
  {#if isExpanded}
    <div class="overlay" on:click={toggleCard}>
      <div class="expanded-info" on:click|stopPropagation>
        <DetailedCard {item} onClose={toggleCard} />
      </div>
    </div>
  {/if}
</section>

<style>

  .detailsToggle{
  
  margin-block: 0.5em;
  align-self: center;
  font-size: 1rem;
  font-weight: bold;
  height: 30px;
  min-width: 100px; /* Minimum width */
  max-width: 100px; /* Maximum width */
  background-color: #eae7dc;
  border: 2.5px solid #e98074;
  border-radius: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  

}


    
  
.spacing{
  display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 60%;
    padding: 1em;
}
  img {
    
    max-width: 65px;
  }
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
   
    
  }
  
  h1 {
    padding-left: 1em;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 10em;
    white-space: nowrap;
  }

  p{
  
    text-align: left;
    padding-left: 2em;
    margin: 5px;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3); 
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .expanded-info {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    width: 80%;
    max-width: 600px;
    z-index: 1001;
    position: relative; 
    transition: opacity 0.5s ease-in-out;
  }
</style>

<script>
  import Card from "./Card.svelte";


export let journalDrinks = [];

   export function addToJournal(drink) {
    if (!journalDrinks.find(d => d.product_name === drink.product_name)) {
      journalDrinks = [...journalDrinks, drink];
    }
  }

  function calculateTotal(nutrient) {
    let totalAmount = 0;
    let unit = "";

    journalDrinks.forEach((drink) => {
      const amount = drink.nutriments?.[nutrient] || 0;
      totalAmount += amount;
      if (!unit && drink.nutriments?.[`${nutrient}_unit`]) {
        unit = drink.nutriments[`${nutrient}_unit`];
      }
    });
    return `${totalAmount} ${unit}`.trim();
  }
</script>

<div class="journal-container">
  <h2>My Drink Journal</h2>

  {#if journalDrinks.length > 0}
    <div class="nutrient-summary">
      <h3>Total Nutrients</h3>
      <table class="centered-table">
        <tr>
          <th>Nutrient</th>
          <th>Total Amount</th>
        </tr>
        <tr>
          <td>Fats</td>
          <td>{calculateTotal("fats")}</td>
        </tr>
        <tr>
          <td>Taurine</td>
          <td>{calculateTotal("taurine")}</td>
        </tr>
        <tr>
          <td>Carbohydrates</td>
          <td>{calculateTotal("carbohydrates")}</td>
        </tr>
        <tr>
          <td>Caffeine</td>
          <td>{calculateTotal("caffeine")}</td>
        </tr>
        <tr>
          <td>Sugar</td>
          <td>{calculateTotal("sugars")}</td>
        </tr>
        <tr>
          <td>Protein</td>
          <td>{calculateTotal("proteins")}</td>
        </tr>
      </table>
    </div>
    <div class="cards-container">
      {#each journalDrinks as item}
        <Card {item} />
      {/each}
    </div>
  {:else}
    <p>Your journal is empty. Start adding some drinks!</p>
  {/if}
</div>

<style>
  .journal-container {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
  }

  .nutrient-summary {
    margin-bottom: 20px;
  }

  .centered-table {
    margin: 0 auto;
    text-align: center;
    border-collapse: collapse;
  }

  .centered-table th,
  .centered-table td {
    padding: 7px;
    border: 1px solid black;
  }

  .cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    gap: 16px;
    align-items: center;
  }

  h2,
  h3 {
    text-align: center;
    margin-bottom: 20px;
  }
</style>

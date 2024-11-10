<script>
  export let item;
  export let onClose;
  export let onJournalAdd;

  let activeTab = "Details";

  const setActiveTab = (tab) => {
    activeTab = tab;
  };

  function addToJournal() {
    if (onJournalAdd) {
      onJournalAdd(item); // Call function to add the current item to journal
    }
  }
</script>

<div class="detailCardContainer">
  <img src={item.image_url} alt={item.product_name} height="10%" />
  <p>{item.product_name}</p>
  <section>
    <div class="card">
      <div class="tabs">
        <button
          class="tab {activeTab === 'Details' ? 'active' : ''}"
          on:click={() => setActiveTab("Details")}
        >
          Details
        </button>
        <button
          class="tab {activeTab === 'Ingredients' ? 'active' : ''}"
          on:click={() => setActiveTab("Ingredients")}
        >
          Ingredients
        </button>
        <button
          class="tab {activeTab === 'Nutrition' ? 'active' : ''}"
          on:click={() => setActiveTab("Nutrition")}
        >
          Nutrition
        </button>
      </div>
      <div class="content">
        {#if activeTab === "Details"}
          <table class="centered-table">
            <tr>
              <th>Attribute</th>
              <th>Value</th>
            </tr>
            <tr>
              <td>Size</td>
              <td
                >{item.product_quantity
                  ? (item.product_quantity) + item.product_quantity_unit
                  : "No information"}</td
              >
            </tr>
            <tr>
              <td>Fats</td>
              <td
                >{item.nutriments.fats
                  ? parseFloat(item.nutriments.fats).toFixed(2) + " " + item.nutriments.fats_unit
                  : "No information"}</td
              >
            </tr>
            <tr>
              <td>Taurine</td>
              <td
                >{item.nutriments.taurine
                  ? parseFloat(item.nutriments.taurine).toFixed(2) + item.nutriments.taurine_unit
                  : "No information"}</td
              >
            </tr>
            <tr>
              <td>Carbohydrates</td>
              <td
                >{item.nutriments.carbohydrates
                  ? parseFloat(item.nutriments.carbohydrates).toFixed(2) +
                    " " +
                    item.nutriments.carbohydrates_unit
                  : "No information"}</td
              >
            </tr>
            <tr>
              <td>Caffeine</td>
              <td
                >{item.nutriments.caffeine
                  ?parseFloat(item.nutriments.caffeine).toFixed(2) +
                    " " +
                    item.nutriments.caffeine_unit
                  : "No information"}</td
              >
            </tr>
            <tr>
              <td>Sugar</td>
              <td
                >{item.nutriments.sugars
                  ? parseFloat(item.nutriments.sugars).toFixed(2) + item.nutriments.sugars_unit
                  : "No information"}</td
              >
            </tr>
            <tr>
              <td>Protein</td>
              <td
                >{item.nutriments.proteins
                  ? parseFloat(item.nutriments.proteins).toFixed(2) +
                    " " +
                    item.nutriments.proteins_unit
                  : "No information"}</td
              >
            </tr>
          </table>
        {:else if activeTab === "Ingredients"}
          <table class="centered-table">
            <tr>
              <th>Ingredients</th>
            </tr>
            <tr>
              <td>{item.ingredients_text || "No information"}</td>
            </tr>
          </table>
        {:else if activeTab === "Nutrition"}
          <table class="centered-table">
            <tr>
              <th>Allergens</th>
            </tr>
            <tr>
              <td>{item.allergens || "No information"}</td>
            </tr>
          </table>
        {/if}
      </div>

      <div class="buttons">
      <button on:click={onClose}>Close</button>
      <!-- <button on:click={addToJournal}>Add to Journal</button> -->
    </div>
    </div>
  </section>
</div>

<style>
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
  .tabs {
    display: flex;
    justify-content: space-around;
    padding: 10px;
  }

  .tab {
    font-weight: bold;
  }

  .tab.active {
    font-weight: bolder;
    background-color: #e98074;
    color: #D8CEA5;
  }

  .content {
    padding: 20px;
  }

  section {
    display: flex;
    flex-direction: column;
    padding: 0.5em; /*Spacing around edge of card inside boarder (around the image)*/
    border-radius: 20px; /*Rounds the corners of the card*/
    background-color: #eae7dc;
    flex-basis: 500px; /*Sets the width of the card to 30% of the screen width*/
    max-width: 100%;
    min-height: 420px;
    flex: 1 1 calc(20% - 10px);
    box-sizing: border-box;
  }

  .detailCardContainer {
    padding: 0.5em; /*Spacing around edge of card inside boarder (around the image)*/
    border: 5px solid #e98074;
    border-radius: 20px; /*Rounds the corners of the card*/
    background-color: #eae7dc;
    max-width: 100%;
    min-height: 420px;
    box-sizing: border-box;
  }

  button {
    font-size: 1rem;
    height: 30px;
    background-color: #eae7dc;
    border: 2.5px solid #e98074;
    border-radius: 10px;
    text-align: center;
    font-size: large;
    margin-left: 5px;
  }
</style>

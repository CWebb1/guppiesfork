<script>
  //UX Changes
  export let data;

  import Card from "../Components/Card.svelte";
  import FilterBar from "../Components/FilterBar.svelte";
  import SearchBar from "../Components/Search.svelte";
  import DetailedCard from "../Components/Detailed-card.svelte";

  let drink = data.drink.products;
  let filteredDrink = [...drink];
  let selectedFilter = '';
  let searchQuery = '';
  let selectedDrink = null;
  let journalDrinks = [];

 // Checkbox variables
  let showSugarFree = false;
  let showCaffeineFree = false


  // Extract unique filter options (assuming each item has a 'category' field)
  const filterOptions = Array.from(new Set(drink.map(item => item.nutrition_grades || '')));

  function applyFilter(filter) {
    selectedFilter = filter;
    filteredDrink = drink.filter(item =>
      filter === '' || item.nutrition_grades === filter
    );
    applyCheckboxFilter();
    applySearchFilter();
  }

  function applyCheckboxFilter() {
    filteredDrink = filteredDrink.filter(item => {
      const sugarContent = item.nutriments?.sugars || undefined;
      const caffeineContent = item.nutriments?.caffeine || undefined;

      const matchesSugarFree = !showSugarFree || sugarContent === 0 || sugarContent === undefined;
      const matchesCaffeineFree = !showCaffeineFree || caffeineContent === 0 || caffeineContent === undefined;
      return matchesSugarFree && matchesCaffeineFree;
    });
  }

  // Search filter logic
  function applySearchFilter() {
    // Normalize query to and product name to ignore spaces
    const normalizedQuery = searchQuery.replaceAll(' ', '').toLowerCase();
    filteredDrink = filteredDrink.filter(item =>
      item.product_name?.replaceAll(' ', '').toLowerCase().includes(normalizedQuery)
    );
  }

  function handleCheckboxChange(filterType, isChecked) {
    if (filterType === 'sugarFree') {
      showSugarFree = isChecked;
    } else if (filterType === 'caffeineFree'){
      showCaffeineFree = isChecked;
    }
    // Apply filter after checking checkbox state
    applyCheckboxFilter();
    applySearchFilter();
  }

  // Handle search input changes
  function handleSearchChange(query) {
    searchQuery = query;
    if (searchQuery.trim() ==="") {
      // If searchbar is blank then reset filter
      applyFilter(selectedFilter);
    } else {
    applySearchFilter(); // Apply filter when query changes
    }
  }

  function resetFilters() {
    selectedFilter = '';
    showSugarFree = false;
    showCaffeineFree = false;
    searchQuery = '';
    filteredDrink = [...drink];
  }

  function showDetails(drink) {
    selectedDrink = drink;
  }

  function addToJournal(drink) {
    if (!journalDrinks.find(d => d.product_name === drink.product_name)){
      journalDrinks = [...journalDrinks, drink];
    }
  }

  // Initialize filter
  applyFilter(selectedFilter);
</script>

<section>
  <!-- <DetailedCard /> -->
</section>

<div class="searchbar">
  <SearchBar
  searchQuery={searchQuery}
  onSearchChange={handleSearchChange}
  />
</div>

<div class="filterbar">
  <FilterBar {filterOptions} selectedFilter={selectedFilter} onFilterChange={applyFilter} 
  {showSugarFree} {showCaffeineFree} onCheckboxChange={handleCheckboxChange} onResetFilters={resetFilters}/>
</div>
<br />
<div class="cards-container">
  {#each filteredDrink as item}
    <Card {item} />
  {/each}
</div>

{#if selectedDrink}
  <DetailedCard
    item={selectedDrink}
    onClose={() => selectedDrink = null}
    onJournalAdd={addToJournal}
  />
{/if}

<style>
  * {
    margin: 0px;
    max-width: fit-content;
  }
  section {
    display: flex;
  }

  .cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align:center;
    gap: 16px;
    align-items: center;
  }

  .filterbar {
    display: flex;
    flex-direction: row;
    height: 20px;
    padding-bottom: 10px;
  }
</style>

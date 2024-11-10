<script>
  export let filterOptions = [];
  export let selectedFilter = "";
  export let onFilterChange = () => {};
  let filterDisplayOptions = ["A", "B", "C", "D", "E", "No Grade"];

  export let showSugarFree = false;
  export let showCaffeineFree = false;
  export let onCheckboxChange = () => {};
  export let onResetFilters = () => {};

  function handleSelect(event) {
    const value = event.target.value;
    onFilterChange(value);
  }


  function handleSugarFreeChange(event) {
    const isChecked = event.target.checked;
    onCheckboxChange("sugarFree", isChecked);
  }

  function handleCaffeineFreeChange(event) {
    const isChecked = event.target.checked;
    onCheckboxChange("caffeineFree", isChecked);
  }

  function handleReset() {
    onResetFilters();
  }
  const displayToValuesMap = {
    //Matches the visual options with the API values
    A: ["a"],
    B: ["b"],
    C: ["c"],
    D: ["d"],
    E: ["e"],
    "No Grade": ["unknown", "not-applicable"],
  };
</script>

<select bind:value={selectedFilter} on:change={handleSelect}>
  <option value="">All</option>
  {#each filterDisplayOptions as option}
    <option  
      value={displayToValuesMap[option].find((value) =>
        filterOptions.includes(value) 
      )}
    >
      {option}
    </option>
  {/each}
</select>
<div class="checkbox-container">
  <button on:click={handleReset}>Reset</button>
  <label>
    <input
      type="checkbox"
      bind:checked={showSugarFree}
      on:change={handleSugarFreeChange}
    />
    Sugar Free
  </label>
  <label>
    <input
      type="checkbox"
      bind:checked={showCaffeineFree}
      on:change={handleCaffeineFreeChange}
    />
    Caffeine Free
  </label>

</div>
<style>
  select {
    font-size: 1rem;
    height: 30px;
    background-color: #eae7dc;
    border: 2.5px solid #e98074;
    border-radius: 10px;
    text-align: center;
    font-size: large;
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
  
  label {
    font-size: 1rem;
    height: 30px;
    background-color: #eae7dc;
    border: 2.5px solid #e98074;
    border-radius: 10px;
    text-align: center;
    font-size: large;
    padding: 2px;
  }

  option {
    text-align: center;
  }
</style>
<script>
  import Bar from './Bar.svelte'
  import { flip } from 'svelte/animate'

  export let title
  let data = []
  export function addOption(option) {
    data = [...data, { option, value: 0, id: data.length }]
  }
  export function update(option, value) {
    const index = data.findIndex((d) => d.option === option)
    data[index] = { ...data[index], value}
    data.sort((a, b) => b.value - a.value) 
  }

  
  // after adding filteredData, we use the array for everything else
  let filter = '';
  $: filteredData = data.filter(entry => {
    const lcName = entry.option.toLowerCase()
    const lcFilter = filter.toLowerCase()
    return lcName.includes(lcFilter)
  });

  $: total = filteredData.reduce((acc, actual) => acc + actual.value, 0);
</script>

<article>
  <div id="header">
    <h3>{title}</h3>
    <input bind:value={filter} placeholder="Filtertext eingeben" type="text">
  </div>

  <!-- filteredData === all data when no filter is entered -->
  {#each filteredData as entry, index (entry.id)}
    <div animate:flip="{{ duration: 500 }}">
      <Bar name={entry.option} value={entry.value}></Bar>
    </div>
  {/each}

  <p>Gesamtpunktzahl:</p>
  <p>{total}</p>
</article>

<style>
  :root {
    --padding-side: 2em
  }

  article {
    border-radius: .3em;
    box-shadow: 
      4px 4px 2px -2px rgba(0,0,0,0.1)
      0px 0px 2px 0px rgba(0,0,0,0.2);
    margin: 1em 2em 2em;
    width: 30em;
  }

  #header {
    align-items: baseline;
    background: rgba(240,240,240,1);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 1em;
  }

  article > div:last-child  {
    align-items: center;
    display: flex;
    justify-content: flex-end;
    padding: 0 var(--padding-side) .5em var(--padding-side);
  }
</style>
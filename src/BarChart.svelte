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
  <h3>{title}</h3>
  <input bind:value={filter} placeholder="Filtertext eingeben" type="text">

  <!-- filteredData === all data when no filter is entered -->
  {#each filteredData as entry, index (entry.id)}
    <div animate:flip="{{ duration: 500 }}">
      <Bar name={entry.option} value={entry.value}></Bar>
    </div>
  {/each}

  <p>Gesamtpunktzahl:</p>
  <p>{total}</p>
</article>
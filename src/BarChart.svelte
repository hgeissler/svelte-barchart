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

  $: total = data.reduce((acc, actual) => acc + actual.value, 0); 
</script>

<article>
  <div>
    <h3>{title}</h3>
  </div>
  {#each data as entry, index (entry.id)}
    <div animate:flip="{{ duration: 500 }}">
      <Bar name={entry.option} value={entry.value}></Bar>
    </div>
  {/each}
  <p>Gesamtpunktzahl:</p>
  <p>{total}</p>
</article>
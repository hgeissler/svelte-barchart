<script>
  import Bar from './Bar.svelte'
  export let title
  let data = []
  export function addOption(option) {
    data = [...data, { option, value: 0, id: data.length }]
  }
</script>

<article>
  <div>
    <h3>{title}</h3>
  </div>
  {#each data as entry}
    <Bar name={entry.option} value={entry.value}></Bar>
  {/each}
</article>
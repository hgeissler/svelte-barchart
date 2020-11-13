<script>
  const MAX_VALUE = 100;

  export let name = '';
  export let value = 0;

  $: width = Math.round(100 * value / MAX_VALUE)
</script>

<div class="bar">
  <p>{name}</p>
  <div>
    <div style="width:{width}%;"></div>
  </div>
  <p>{value}</p>
</div>

<style>
  :root {
    --bar-height: 10px
  }
  
  .bar {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  .bar p {
    text-align: right;
  }

  .bar p:first-child {
    margin-right: 1em;
    min-width: 4em;
    width: 10%;
  }

  .bar p:last-child {
    margin-left: 1em;
    min-width: 2.5em;
  }

  .bar div {
    height: var(--bar-height);
  }

  .bar > div {
    background: #ededed;
    width: 100%;
  }

  .bar > div > div {
    background: #2c393f;
    display: block;
    transition: width .3s .5s ease-out;
  }
</style>
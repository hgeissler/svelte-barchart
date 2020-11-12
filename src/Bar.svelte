<script>
  export let name = ''
  export let value = 0
</script>

<div class="bar">
  <p>{name}</p>
  <div>
    <div style="width:{value}%;"></div>
  </div>
  <p>{value}</p>
</div>
<script>

  let {xScale, height, margin} = $props();

</script>

<g class="tickLine" transform="translate({margin.left}, {height-margin.bottom})">
  {#each xScale.ticks(7) as tick}
    <line
      x1={xScale(tick)}
      x2={xScale(tick)}
      y1={-height}
      y2={0}
      stroke={tick == 0 ? "black" : "gray"}
    />
  {/each}
</g>


  
  
<!-- AxisY.svelte -->
<script>
    export let data;
    export let yScale;
    export let margin;
  </script>
  
  <g class="axis y-axis" transform="translate({margin.left}, 0)">
    {#each data as d}
      <text
        x={-6}
        y={yScale(d.country_origin) + yScale.bandwidth() / 2}
        dy="0.35em"
        text-anchor="end"
      >
        {d.country_origin}
      </text>
    {/each}
  </g>

  
  
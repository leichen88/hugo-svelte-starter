<script>
  import { format } from 'd3-format';
  let {xScale, height, margin, formater = format('~s')} = $props()
</script>

<g class="x-axis" transform="translate({margin.left}, {height-margin.bottom})">
  {#each xScale.ticks(7) as tick}
    <text
      x={xScale(tick)}
      y={15} 
      text-anchor="middle"
      fill="black"
    >
    {formater(tick)}
    </text>
  {/each} 
</g>


  
  
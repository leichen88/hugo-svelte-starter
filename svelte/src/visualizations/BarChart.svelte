<script>
  import { scaleLinear, scaleBand} from 'd3-scale';
  import data from '../data/barData.js';
  import { max } from 'd3';
  import AxisY from '../components/chart-elements/AxisY.svelte'
  import AxisX from '../components/chart-elements/AxisX.svelte'
  import TickLine from '../components/chart-elements/TickLine.svelte'
  import Tooltip from '../components/chart-elements/Tooltip.svelte';

  
  let margin = $state({ top: 0, right:50, bottom:60, left:150});
  let width = $state(0);
  let height = $state(0);
  let innerWidth = $derived(width - margin.left - margin.right);
  let innerHeight = $derived(height - margin.top - margin.bottom);

  // Tooltip state
  let activeTooltip = $state(null);
  let mousePosition = $state({ x: 0, y: 0 });

  let xScale = $derived(
    scaleLinear()
      .domain([0, max(data, d => d.displaced_number)]).nice()
      .range([0, innerWidth])
  );

  let yScale = $derived(
    scaleBand()
    .domain(data.map( d => d.country_origin))
    .range([0, innerHeight])
    .padding(.25)

  );
  
</script>



<h3 >People displaced across borders by country of origin | 2020</h3>
<div class = "svelte-chart" 
  bind:clientWidth={width}
  bind:clientHeight={height}
  role="graphics-symbol">
  
  {#if width >0}
    <svg {width} {height}>
      <g>
      <AxisX {xScale} {height} {margin}/>
      <AxisY {data} {yScale} {margin}/>
      <TickLine {xScale} {height} {margin}/>
      <g class="bars" transform="translate({margin.left}, {margin.top})">
        {#each data as d}
        <rect
          x={xScale(0)}
          y={yScale(d.country_origin)}
          width={xScale(d.displaced_number)}
          height={yScale.bandwidth()}
          opacity={activeTooltip ? 
            (activeTooltip.country_origin === d.country_origin ? 1 : 0.3) 
            : 1
          }
          role="graphics-symbol"
          onmouseenter={() => {
            activeTooltip = d;
          }}
          onmousemove={(e) => {
            mousePosition = { x: e.pageX, y: e.pageY };
          }}
          onmouseleave={() => {
            activeTooltip = null;
          }}
        />
        {/each}
      </g>
      <g class="xAxis-title" transform="translate({margin.left}, {margin.top})">
        <text
          x={(innerWidth)/2}
          y={height - margin.bottom/4} 
          text-anchor="middle"
          fill="black"
        >
        Number of people
        </text> 
      </g>
      </g>
    </svg>
    <!--Tooltip -->
    {#if activeTooltip}
      <Tooltip
        x={mousePosition.x}
        y={mousePosition.y}
        content={`<strong>${activeTooltip.country_origin}:</strong> ${activeTooltip.displaced_number}`}
      />
    {/if}
  {/if}

</div>

<style>
  .svelte-chart {
    width: 100%;
    height: 100vh;
  }
	.bars rect {
		fill: #0072bc;
		stroke: none;
    transition: opacity 0.2s ease;
    cursor: pointer
	}
</style>

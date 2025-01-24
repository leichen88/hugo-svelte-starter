<script>
    let {x=0, y=0, content } = $props();
	let left = $derived(`${x + 10}px`);
	let top = $derived(`${y - 10 }px`);
</script>


<div class="tooltip-container">
	<div class="tooltip" style:top style:left>
        {@html content}
    </div>
</div>

<style>
    .tooltip {
        position: absolute;
        padding: 8px;
        background: white;
        border: 1px solid #ddd;
        border-radius: 4px;
        pointer-events: none;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        font-size: 14px;
        transition: top 300ms ease, left 300ms;
    }
</style>
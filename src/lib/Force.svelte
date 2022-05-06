<script>
	import { spring } from 'svelte/motion';
	// import counter from store
	import { counter, nodes } from './store.js';
	import * as d3 from 'd3';
	import { onMount } from 'svelte';

	let svgElement;

	const width = 800;
	const height = 800;

	const colors = {
		Manifest: '#ff0000',
		Collection: '#00ff00',
		Service: '#0000ff',
		Canvas: '#ffff00',
		Annotation: '#ff00ff',
		Range: '#00ffff',
		Other: '#000000'
	};

	onMount(async () => {
		nodes.subscribe((nodes) => {
			if (nodes.length > 0) {
				drawTreeMap(nodes);
			}
			//   console.log("treemap", nodes);
		});
	});

	function text(d) {
		const label = d.data.data.data.label;
		const type = d.data.data.data.type;

		return label ? Object.values(label) : type;
	}
	function drawTreeMap(data) {
		const root = d3.hierarchy(d3.stratify()(data)).sum((d) => 1);
		const links = root.links();
		const nodes = root.descendants();
		const svg = d3.select(svgElement).attr('viewBox', [-width / 2, -height / 2, width, height]);
		svg.selectAll('g').remove();

		const simulation = d3
			.forceSimulation(nodes)
			.force(
				'link',
				d3
					.forceLink(links)
					.id((d) => d.id)
					.distance(0)
					.strength(1)
			)
			.force('charge', d3.forceManyBody().strength(-50))
			.force('x', d3.forceX())
			.force('y', d3.forceY());

		const link = svg
			.append('g')
			.attr('stroke', '#999')
			.attr('stroke-opacity', 0.6)
			.selectAll('line')
			.data(links)
			.join('line');

		const node = svg
			.append('g')
			.attr('fill', '#fff')
			.attr('stroke', '#000')
			.attr('stroke-width', 1.5)
			.selectAll('circle')
			.data(nodes)
			.join('circle')
			.attr('fill', (d) => (d.children ? null : '#000'))
			.attr('stroke', (d) => (d.children ? null : '#fff'))
			.attr('r', 3.5);
		//.call(drag(simulation));

		node.append('title').text(text);

		simulation.on('tick', () => {
			link
				.attr('x1', (d) => d.source.x)
				.attr('y1', (d) => d.source.y)
				.attr('x2', (d) => d.target.x)
				.attr('y2', (d) => d.target.y);

			node.attr('cx', (d) => d.x).attr('cy', (d) => d.y);
		});
	}
</script>

<svg bind:this={svgElement} viewBox="0 0 800 800" class="svg" />

<style lang="stylus">

  .svg {
    text {
      fill: black;
      font-size: 10px;
    }
  }
</style>

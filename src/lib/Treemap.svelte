<script>
  import { spring } from "svelte/motion";
  // import counter from store
  import { counter, nodes } from "./store.js";
  import * as d3 from "d3";
  import { onMount } from "svelte";

  let svgElement;

  const colors = {
    Manifest: "#ff0000",
    Collection: "#00ff00",
    Service: "#0000ff",
    Canvas: "#ffff00",
    Annotation: "#ff00ff",
    Range: "#00ffff",
    Other: "#000000",
  };

  onMount(async () => {
    nodes.subscribe((nodes) => {
      if (nodes.length > 0) {
        drawTreeMap(nodes);
      }
      //   console.log("treemap", nodes);
    });
  });

  // drawTreeMap(nodes);
  // $: {
  // 	console.log('treemap', nodes);
  // 	drawTreeMap(nodes);
  // }

  function text(d) {
    const label = d.data.data.data.label;
    const type = d.data.data.data.type;

    return label ? Object.values(label) : type;
  }
  function drawTreeMap(data) {
    const root = d3.hierarchy(d3.stratify()(data)).sum((d) => 1);
    // .sum((d) => {
    //   //   console.log(d, d.leaves());
    //   //   return 1;
    //   return d.leaves().length;
    // });
    const graph = d3
      .treemap()
      .tile(d3.treemapBinary) // TODO Allow d3.treemapSquarify?
      .paddingInner(2)
      .paddingOuter(1)
      .round(true)
      .size([800, 500])(root);

    // console.log(root, graph, root.leaves());
    // console.log(svgElement);

    const svg = d3.select(svgElement);
    const leaf = svg
      .selectAll("g")
      .data(root.leaves())
      .attr("transform", (d) => `translate(${d.x0},${d.y0})`);

    leaf
      .select("rect")
      .attr("fill", (d) => {
        return colors[d.data.data.data.type];
      })
      .attr("stroke", (d) => "#000")
      .attr("width", (d) => d.x1 - d.x0)
      .attr("height", (d) => d.y1 - d.y0);

    leaf
      .select("text")
      .attr("x", 3)
      .attr("y", 20)
      //   .attr("clip-path", d => d.clipUid)
      //   .attr("fill", (d) => "#EEE")
      .text(text);

    leaf.select("title").text(text);

    leaf.exit().remove();

    const lEnter = leaf
      .enter()
      .append("g")
      .attr("transform", (d) => `translate(${d.x0},${d.y0})`);

    lEnter
      .append("rect")
      //   .attr("fill", (d) => d.data.color)
      .attr("fill", (d) => colors[d.data.data.data.type])
      .attr("stroke", (d) => "#000")
      .attr("width", (d) => d.x1 - d.x0)
      .attr("height", (d) => d.y1 - d.y0);

    lEnter.append("title").text(text);

    lEnter
      .append("text")
      .attr("x", 3)
      .attr("y", 15)
      .attr("font-size", 10)

      //   .attr("clip-path", d => d.clipUid)
      //   .attr("fill", (d) => "#EEE")
      .text(text);
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

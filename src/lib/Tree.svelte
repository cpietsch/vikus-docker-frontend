<script>
  import { spring } from "svelte/motion";
  // import counter from store
  import { counter, nodes } from "./store.js";
  import * as d3 from "d3";
  import { onMount } from "svelte";

  let svgElement;

  const width = 800;
  const height = 800;
  const nodeSize = 17;
  const format = d3.format(",");

  const columns = [
    {
      label: "Images",
      value: (d) => {
        // console.log("count", d);
        return d.data.data.items.length;
      },
      format: (value, d) => format(value),
      x: 750,
    },
  ];

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
      // console.log(nodes);
      if (nodes.length > 0) {
        drawTreeMap(nodes.filter((d) => d.data.type !== "Canvas"));
      }
      //   console.log("treemap", nodes);
    });
  });

  function text(d) {
    const label = d.data.data.data.label;
    const type = d.data.data.data.type;
    const text = label ? Object.values(label) : type;
    return text.toString().substr(0, 100);
  }

  function drawTreeMap(data) {
    let i = 0;
    const root = d3
      .hierarchy(d3.stratify()(data))
      .sum((d) => {
        // console.log(d.data.data.items.length);
        return d.data.data.items.length;
      })
      .eachBefore((d) => (d.index = i++));

    // console.log(root);
    const nodes = root.descendants();
    const svg = d3
      .select(svgElement)
      .attr("viewBox", [
        -nodeSize / 2,
        (-nodeSize * 3) / 2,
        width,
        (nodes.length + 1) * nodeSize,
      ])
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
      .style("overflow", "visible");

    svg.selectAll("g").remove();

    const link = svg
      .append("g")
      .attr("fill", "none")
      .attr("stroke", "#999")
      .selectAll("path")
      .data(root.links())
      .join("path")
      .attr(
        "d",
        (d) => `
        M${d.source.depth * nodeSize},${d.source.index * nodeSize}
        V${d.target.index * nodeSize}
        h${nodeSize}
      `
      );

    const node = svg
      .append("g")
      .selectAll("g")
      .data(nodes)
      .join("g")
      .attr("transform", (d) => `translate(0,${d.index * nodeSize})`);

    node
      .append("circle")
      .attr("cx", (d) => d.depth * nodeSize)
      .attr("r", 2.5)
      .attr("fill", (d) => (d.children ? null : "#999"));

    node
      .append("text")
      .attr("dy", "0.32em")
      .attr("x", (d) => d.depth * nodeSize + 6)
      .text(text);

    node
      .append("title")
      .text((d) => d.ancestors().reverse().map(text).join("/"));

    for (const { label, value, format, x } of columns) {
      svg
        .append("text")
        .attr("dy", "0.32em")
        .attr("y", -nodeSize)
        .attr("x", x)
        .attr("text-anchor", "end")
        .attr("font-weight", "bold")
        .text(label);

      node
        .append("text")
        .attr("dy", "0.32em")
        .attr("x", x)
        .attr("text-anchor", "end")
        .attr("fill", (d) => (d.children ? null : "#555"))
        .data(root.copy().sum(value).descendants())
        .text((d) => format(d.value, d));
    }
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

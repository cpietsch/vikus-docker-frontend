<script>
    import { spring } from "svelte/motion";
    // import counter from store
    import { counter, nodes } from "./store.js";
  
    import { onMount } from "svelte";


    // $: console.log($nodes)
    let data = []
    $:{
      data = $nodes.map(d => d.data)
      console.log(data)
    }
   
  </script>
  
  <div class="container">
    { #each data as d }
      <div>
        <div>{Object.values(d.label)}</div>
        <div>{d?.type}</div>
        { #if d.thumbnail }
          <img src={d.thumbnail[0]?.id} />
        { /if }
          
      </div>
    {/each}
   </div>>


  <style lang="stylus">
    .container {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      justify-content: center;
      font-size: 10px;

      >div {
        padding: 5px;
      }
    }
    
  </style>
  
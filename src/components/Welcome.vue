<template>
  <div id="welcome" style="background-color: transparent">
      <section class="section">
        <h1 id="Enter">↓ Enter My World ↓ </h1>
    </section>
      
    <section class="section">
        <h1>My Portfolio</h1>
    </section>
  </div>
</template>

<script>
export default {
    name: "Welcome"

}
</script>

<style scoped>
    .section
    {
        display: flex;
        align-items: center;
        height: 100vh;
        position: relative;
        font-family: 'Courier New', Courier, monospace;
        color: #ffeded;
        text-transform: uppercase;
        font-size: 3vmin;
        padding-left: 10%;
        padding-right: 10%;
    }

    /* Alternate direction between sections */
    section:nth-child(odd)
    {
        justify-content: flex-end;
    }
    
   #Enter{
       margin-top: 200px;
   }

</style>
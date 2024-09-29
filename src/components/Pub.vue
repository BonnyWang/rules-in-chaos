<template>
    
    <span id="projectList">
        
        <button v-on:click="this.$router.push('/arXivMLVoid');" class="projectCard">
            <h2>Machine learning cosmology from void properties</h2>
            <h3>arXiv:2212.06860 
            <br>
            Published in ApJ</h3>
            <p style="font-size:15px;" >Bonny Y. Wang, Alice Pisani, Francisco Villaescusa-Navarro, Benjamin D. Wandelt </p>
            <img class="projectImg" src="/ImgThumbNail/web.jpg">
        </button>
        <button v-on:click="this.$router.push('/arXivVoidGalaxy');" class="projectCard">
            <h2>Cosmology from one galaxy in voids?</h2>
            <h3>arXiv:2405.04447
                <br>
                Published in ApJL</h3>
            <p>Bonny Y. Wang, Alice Pisani</p>
            <img class="projectImg" src="https://cdn.mos.cms.futurecdn.net/vamaoFeP8FDSfCYookG6qK.jpg">
        </button>

        <button v-on:click="this.$router.push('/DREAMS');" class="projectCard">
            <h2>The DREAMS Project</h2>
            <h3>Core Team Member</h3>
            <p>DaRk mattEr and Astrophysics with Machine learning and Simulations</p>
            <img class="projectImg" src="https://images.squarespace-cdn.com/content/v1/661990c9787a27148ecfebc3/0afa2277-f4da-46c5-b01f-1e624f313368/single_box_image_TNG300-3_gist_yarg.png?format=100w%20100w,%20https://images.squarespace-cdn.com/content/v1/661990c9787a27148ecfebc3/0afa2277-f4da-46c5-b01f-1e624f313368/single_box_image_TNG300-3_gist_yarg.png?format=300w%20300w,%20https://images.squarespace-cdn.com/content/v1/661990c9787a27148ecfebc3/0afa2277-f4da-46c5-b01f-1e624f313368/single_box_image_TNG300-3_gist_yarg.png?format=500w%20500w,%20https://images.squarespace-cdn.com/content/v1/661990c9787a27148ecfebc3/0afa2277-f4da-46c5-b01f-1e624f313368/single_box_image_TNG300-3_gist_yarg.png?format=750w%20750w,%20https://images.squarespace-cdn.com/content/v1/661990c9787a27148ecfebc3/0afa2277-f4da-46c5-b01f-1e624f313368/single_box_image_TNG300-3_gist_yarg.png?format=1000w%201000w,%20https://images.squarespace-cdn.com/content/v1/661990c9787a27148ecfebc3/0afa2277-f4da-46c5-b01f-1e624f313368/single_box_image_TNG300-3_gist_yarg.png?format=1500w%201500w,%20https://images.squarespace-cdn.com/content/v1/661990c9787a27148ecfebc3/0afa2277-f4da-46c5-b01f-1e624f313368/single_box_image_TNG300-3_gist_yarg.png">
        </button>
        
    
    </span>
</template>

<script>
export default {
    name:"Pub",
}
</script>

<style>


</style>
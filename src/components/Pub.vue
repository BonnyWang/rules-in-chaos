<template>
    
    <span id="Pub">
            <div class="PubList">
                <a class="PubTitle" href="https://arxiv.org/abs/2507.20378">Set-based Implicit Likelihood Inference of Galaxy Cluster Mass</a>
                <h3>arXiv:2507.20378
                    <br>
                    Spotlight talk at ICML-colocated ML4Astro 2025 workshop
                </h3>
                <p><u>Bonny Y. Wang</u>, Leander Thiele</p>
            </div>
            <div class="PubList">
                <a class="PubTitle" href="https://arxiv.org/abs/2503.24304">Gravitational Waves from Massive Black Hole Mergers in ASTRID: Predictions for LISA</a>
                <h3>arXiv:2503.24304
                    <br>
                    Accepted by ApJ
                </h3>
                <p><u>Bonny Y. Wang</u>, Yihao Zhou, William Chen, Nianyi Chen, Tiziana Di Matteo, Rupert Croft, Simeon Bird, Yueying Ni</p>
            </div>

            <div class="PubList">
                <a class="PubTitle" href="https://iopscience.iop.org/article/10.3847/2041-8213/ad5ffe">Cosmology from one galaxy in voids?</a>
                <h3>arXiv:2405.04447
                    <br>
                    Published in ApJL</h3>
                <p><u>Bonny Y. Wang</u>, Alice Pisani</p>
            </div>

            <div class="PubList">
                <a class="PubTitle" href="https://iopscience.iop.org/article/10.3847/1538-4357/aceaf6">Machine learning cosmology from void properties</a>
                <h3>arXiv:2212.06860 
                <br>
                     Published in ApJ</h3>
                 <p style="font-size:15px;" > <u>Bonny Y. Wang</u>, Alice Pisani, Francisco Villaescusa-Navarro, Benjamin D. Wandelt </p>
            </div>

            <div class="PubList">
            <a class="PubTitle" href="https://iopscience.iop.org/article/10.3847/1538-4357/adb8e5">Introducing the DREAMS Project: DaRk mattEr and Astrophysics with Machine learning and Simulations</a>
            <h3>arXiv:2405.00766
                    <br>
                    Published in ApJ</h3>
            <p>Jonah C. Rose, Paul Torrey, Francisco Villaescusa-Navarro, Mariangela Lisanti, ... <u>Bonny Y. Wang</u>, et al.</p>
            </div>

            <div class="PubList">
            <a class="PubTitle" href="https://www.nature.com/articles/s41550-025-02489-8" >Confined tumbling state as the origin of the excess of slowly rotating asteroids</a>
            <h3>
                arXiv:2502.19631
                <br>
                Published in Nature Astronomy	
            </h3>
            <p>Wen-Han Zhou, Patrick Michel, Marco Delbo,Wenchao Wang, <u>Bonny Y. Wang</u>, Josef Durech, Josef Hanu</p>
            </div>
        
    
    </span>
</template>

<script>
export default {
    name:"Pub",
}
</script>

<style>
#Pub{
    /* margin-top: 100px; */
    height: 80%;
    overflow-y: scroll;
    /* display: flex; */
    /* flex-wrap: wrap; */
    /* align-items: center; */
}

.PubList{
    padding-top: 20px;
    height: fit-content;
    border-bottom: 1px solid white;
}

.PubTitle{
    /* same as h2 */
    font-size: 25px;
    font-weight: bold;
    color: red;
    text-decoration: none;
}

.PubTitle:hover{
    text-decoration: underline;
}

</style>
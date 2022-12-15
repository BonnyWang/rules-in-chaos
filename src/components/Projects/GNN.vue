<template>
    <span class="projectContent">
        <h1 class="projectTitle" :ref="allrefs[0]">
            Graph Neural Networks for Cosmic Voids
        </h1>
        <br>
        <br>
        <br>
        <h2 class="projectSubTitle">
            Use Graph Neural Networks (GNN) to infer cosmological parameters with void properties
        </h2>
        <br>
        <br>    
        <br>
        <br>    
        <br>
        <br>    
        <br>
        <br>    
        <br>
        <br>    
        
        <button v-on:click="scrollToElement()" > 
            <i class="arrow down"></i>
        </button>
        <h3 :ref="allrefs[1]">
           How do we study the evolution of our universe?
        </h3>
        <p>
            We use our current theories to create simulations and compare them to actual surveys.
        </p>
        <p>
            If actual surveys we got looks similar to our simulations, then we know we may be on the right path.
        </p>
        <img src="/ImgOriginal/SimVsSurvey.png">

        <br>    
        <br>
        <br>    
        <br>
        <br>   

        <h3 :ref="allrefs[2]">
            <big>What about the initial conditions for those simulations/models?</big> 
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            Simulation-based Inference
        </h3>

        <p>
            AKA Likelihood-free Inference
        </p>
        <br>    
        <br>
 
        <p>
            <big>  Use observation (output) of a simulation to infer it's initial parameter.</big>
        </p>
        <br>    
        <br>
        <br>    
        <br>   
        <br>    
        <br>
        <br>   
        <h3 :ref="allrefs[3]">
            Related works:
        </h3>
        <p>
            <a href="https://arxiv.org/abs/2212.06860"><i>Machine learning cosmology from void properties</i></a> arXiv:2212.06860
            <br>
            <small>Bonny Y. Wang, Alice Pisani, Francisco Villaescusa-Navarro, Benjamin D. Wandelt</small>
        </p>
        <p>
            <a href="https://arxiv.org/abs/2212.06860"><i>Learning cosmology and clustering with cosmic graphs</i></a> arXiv:2204.13713
            <br>
            <small>Pablo Villanueva-Domingo, Francisco Villaescusa-Navarro</small>
            <br>
        </p>
        <img src="/ImgOriginal/graphGalaxy.jpg">
        https://arxiv.org/pdf/2204.13713.pdf

        <h2 :ref="allrefs[4]">
            What are voids?
        </h2>
        <ul>
            <li>
                - The large under-dense regions in the Universe dominated by dark energy  
            </li>
            <li>
                - A novel probe for our understanding of the Universe
            </li>
            <li>
                - Have proven to be sensitive to dark energy, modified gravity, neutrino mass and etc.
            </li>
        </ul>
        <img width="200px" src="https://www.researchgate.net/profile/Ebrahim-Yusofi/publication/354884627/figure/fig1/AS:1072905530126336@1632812020493/The-cosmic-web-is-mostly-occupied-by-vast-voids-The-bright-regions-are-clusters-and_Q320.jpg">
        https://www.researchgate.net/profile/Ebrahim-Yusofi/publication/354884627/figure/fig1/AS:1072905530126336@1632812020493/The-cosmic-web-is-mostly-occupied-by-vast-voids-The-bright-regions-are-clusters-and_Q320.jpg
        <h2 :ref="allrefs[5]">
            What is graph neural networks (GNN)?
        </h2>
        <img style="width:100%" src="/ImgOriginal/GNNeq.jpg">
        https://arxiv.org/pdf/2204.13713.pdf
        <h2 :ref="allrefs[6]">
            Results:
        </h2>
        <img src="/ImgOriginal/GNN1000voids.png">
        <p>
            Using only 1000 voids from each catalog (the whole catalogs have 11,000 voids on average)
        </p>
        <br>
        <br>   
        <br>    
        <br>
        <br>    
        <br>
        <br>   
        <br>   
        <h2 :ref="allrefs[7]">
            What's next?
        </h2>
        <ul>
            <li>
                - Use more voids  
            </li>
            <li>
                - Use different simulations 
            </li>
            <li>
                - Compare with the deep sets result
            </li>
            <li>
                - Infer other parameters  
            </li>
            <li>
                - Discover new equations with symbolic regression  
            </li>
        </ul>
             <br>
        <br>   
        <br>    
        <br>
        <br>    
        <br>
        <br>   
        <br>   
    </span>
  
</template>

<script>
export default {
    name:"GNN",
    data:function(){
        return {
        allrefs:["title","howStudyUniverse", "SBI","related","void","GNN","results","next"],
        currentPtr:0,
        }
    },
    methods:{
        scrollToElement() {
            if (this.currentPtr >= this.allrefs.length) {
                this.currentPtr = 0;
            }
            this.$refs[this.allrefs[this.currentPtr]].scrollIntoView({ behavior: "smooth" });
            this.currentPtr = this.currentPtr +1;
        },
    }

}
</script>

<style scoped>
img{
    align-self: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
a{
    color: white;
    text-decoration: none;
}
a:hover{
    color: red;
    text-decoration: underline;
}
h2{
    text-align: center;
}
h3{
    text-align: center;
}
h1{
    text-align: center;
}
p{
    text-align: center;
}

button{
    margin-left: auto;
    margin-right: auto;
    text-decoration: none;
    background: none;
    color:red;
    position: fixed;
    left: 90%;
    bottom: 10%;
}
button:hover{
    text-decoration: none;
    background: cadetblue;
}

.arrow {
  border: solid red;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  color:red;
}
.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
</style>
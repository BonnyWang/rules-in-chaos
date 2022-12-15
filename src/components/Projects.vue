<template>
    <span id="projectList">
        <button v-on:click="this.$router.push('/Projects/GNN');" class="projectCard">
            <h2>Graph Neural Networks for Voids</h2>
            <h3>Still in Progress...</h3>
            <p>Using Graph Neural Networks (GNN) to Produce Cosmological Inference from Void Properties</p>
            <img class="projectImg" src="/ImgThumbNail/GNN.jpg">
        </button>
        <button v-on:click="this.$router.push('/arXivMLVoid');" class="projectCard">
            <h2>Machine learning cosmology from void properties</h2>
            <h3>arXiv:2212.06860</h3>
            <p>Bonny Y. Wang, Alice Pisani, Francisco Villaescusa-Navarro, Benjamin D. Wandelt </p>
            <img class="projectImg" src="/ImgThumbNail/web.jpg">
        </button>
        <button v-on:click="this.$router.push('/Projects/PurpleVerse');" class="projectCard">
            <h2>Web AR for PurpleVerse in NFT.NYC</h2>
            <p>A Web AR Application for Advanced Virtual Exhibition Experience</p>
            <img class="projectImg" src="/ImgThumbNail/purpleLogo.png">
        </button>
        
        <button v-on:click="this.$router.push('/Projects/VRVoids');" class="projectCard">
            <h2>Data Visualization for Cosmic Voids</h2>
            <h3>Still in Progress...</h3>
            <p>Using VR Technology to Create Immersive Scene for Cosmic Voids</p>
            <img class="projectImg" src="/ImgThumbNail/CosmicVoid.jpg">
        </button>
        <button v-on:click="this.$router.push('/Projects/SpaceObserver');" class="projectCard">
            <h2>Space Telescope Data Center</h2>
            <p>A Web Platform for Showing Data Obtained by Yangwang-1 Satellite from Origin Space Company</p>
            <img class="projectImg" src="/ImgThumbNail/skyObserver.jpg">
        </button>
        <button v-on:click="this.$router.push('/Projects/SpacePersona');" class="projectCard">
            <h2>Space Persona</h2>
            <p>A Personality Game About Finding Your Position in the Space Mining Era</p>
            <img class="projectImg" src="/ImgThumbNail/spacePersona.jpg">
        </button>
        <button v-on:click="this.$router.push('/Projects/GravityGame');" class="projectCard">
            <h2>World of Gravity</h2>
            <p>A Game Created by Unity to Explore the Effect of Gravity</p>
            <img class="projectImg" src="/ImgThumbNail/gravityGame.jpg">
        </button>
        <button class="projectCard" v-on:click="this.$router.push('/Projects/catHome');">
            <h2>Home Cat</h2>
            <p>A 2D platformer and simulation game about reviving people’s love for cats in a cyberpunk world</p>
            <img class="projectImg" src="/ImgThumbNail/HomeCat.jpg">
        </button>
        <button class="projectCard" v-on:click="this.$router.push('/Projects/DLD');">
            <h2>Digital Logic Design: “Whac-a-Mole”</h2>
            <p>A circuit designed with fundamental electronic components including timers, counters, flipflops, decoders, and logic gates</p>
            <img class="projectImg" src="/ImgThumbNail/DLDShow.jpg">
        </button>
        <button class="projectCard" v-on:click="this.$router.push('/Projects/ChinesePoem');">
            <h2>AI for Writing Chinese Poems from the Tang Dynasty</h2>
            <p>Using Tensorflow with the GRU architecture to Autogenerate Chinese Poems</p>
            <img class="projectImg" src="/ImgThumbNail/chinesePoem.jpg">
        </button>
        
        <button class="projectCard" v-on:click="this.$router.push('/Projects/photonLab');">
            <h2>PhotonLab Android App</h2>
            <p>Android App Developed to Connect and Control the PhotonLab Smart Lights</p>
            <img class="projectImg" src="/ImgThumbNail/PhotonLab.jpg">
        </button>
        <button class="projectCard" v-on:click="this.$router.push('/Projects/smartContract');">
            <h2>Smart Contract Vulnerabilities Detection</h2>
            <p>A Program for Detecting Reentrancy and Unhandled Exceptions</p>
            <img class="projectImg" src="/ImgThumbNail/smart.jpg">
        </button>
    
    </span>
</template>

<script>
export default {
    name:"Project"
}
</script>

<style>
#projectList{
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-top: 100px;
    height: 60%;
    overflow-y: scroll;

}

.projectCard{
    background: none;
    background-color: rgba(0, 0, 0, 0.23);
    padding: 10px;
    width: 30%;
    color: white;
    font-size: 25px;
    border: none;
    border: red 1px solid;
    font-family: 'Courier New', Courier, monospace;
    margin: 1.5%;
    cursor: pointer;
}

.projectCard:hover{
    color: red;
}

.projectCard h2{
    font-size: 25px;
}

.projectCard h3{
    font-size: 15px;
    color: chartreuse;
}

.projectCard p{
    font-size: 20px;
}

.projectImg{
    border: white 1px solid;
    width: 50%;
}

@media only screen and (max-width: 1000px) {

    .projectCard{
        width: 80%;
        margin: 5%;
        
    }

    #Gallery{
        margin-top: 8% !important;
    }

    #projectList{
        margin-top: 8% !important;
        height: -webkit-fill-available;
    }

    .projectContent{
        display: block;
        margin-top: 8% !important;
        height: -webkit-fill-available !important;

    }

    iframe{
        width: 80%;
    }

    li{
        width: 45%;
    }
}

</style>
<template>
    <span id="projectList">
        <button v-on:click="this.$router.push('/Projects/SpacePersona');" class="projectCard">
            <h2>Cosmic Voids Research</h2>
            <p>Using Moment Network to Produce Likelihood-Free Inference of Cosmological Parameters Using Cosmic Voids' Properties</p>
            <img class="projectImg" src="/ImgThumbNail/CosmicVoid.jpg">
        </button>
        <button v-on:click="this.$router.push('/Projects/SpacePersona');" class="projectCard">
            <h2>Cosmic Voids Visualization with MR Technology</h2>
            <p>Visualize the Unseeable Cosmic Structure with Unity </p>
            <img class="projectImg" src="/ImgThumbNail/CosmicVoid.jpg">
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
        <button v-on:click="this.$router.push('/Projects/SpaceObserver');" class="projectCard">
            <h2>Space Telescope Data Center</h2>
            <p>A Web Platform for Showing Data Obtained by Yangwang-1 Satellite from Origin Space Company</p>
            <img class="projectImg" src="/ImgThumbNail/skyObserver.jpg">
        </button>
        <button class="projectCard" v-on:click="this.$router.push('/Projects/ChinesePoem');">
            <h2>AI for Writing Chinese Poems from the Tang Dynasty</h2>
            <p>Using Tensorflow with the GRU architecture to Autogenerate Chinese Poems</p>
            <img class="projectImg" src="/ImgThumbNail/ChinesePoem.jpg">
        </button>
        <button class="projectCard" v-on:click="this.$router.push('/Projects/ChinesePoem');">
            <h2>Home Cat</h2>
            <p>A 2D Platformer and Simulation Game about Re-evoking People’s Love with Cats in a Cyberpunk World</p>
            <img class="projectImg" src="/ImgThumbNail/HomeCat.jpg">
        </button>
        <button class="projectCard" v-on:click="this.$router.push('/Projects/ChinesePoem');">
            <h2>PhotonLab Android App</h2>
            <p>Android App Developed to Connect and Control the PhotonLab Smart Lights</p>
            <img class="projectImg" src="/ImgThumbNail/PhotonLab.jpg">
        </button>
        <button class="projectCard" v-on:click="this.$router.push('/Projects/ChinesePoem');">
            <h2>Smart Contract ReenTrancy and unahn..</h2>
            <p>Android App Developed to Connect and Control the PhotonLab Smart Lights</p>
            <img class="projectImg" src="/ImgThumbNail/PhotonLab.jpg">
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
}

</style>
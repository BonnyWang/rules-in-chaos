<template>
    
    <span id="projectList">
        <div class="TagZone">
        <button class="Tag" v-on:click="selectAll">
            All
        </button>
        <button class="Tag" v-on:click="selectAstro">
            Astronomy
        </button>
        <button class="Tag" v-on:click="selectGame">
            Game
        </button>
        <button class="Tag" v-on:click="selectOther">
            Other
        </button>
        <br>
        </div>
        
        <button v-if="Astro" v-on:click="direct_to_external_url('https://www.scientificamerican.com/article/how-analyzing-cosmic-nothing-might-explain-everything/')" class="projectCard">
            <h2>Data Visualization for Cosmic Voids</h2>
            <h3>Mentioned in <em>Scientific American</em></h3>
            <p>Use MR Technology to Create Immersive Scene for Cosmic Voids</p>
            <img class="projectImg" src="/ImgThumbNail/CosmicVoid.jpg">
        </button>
        
        <button v-if="Astro" v-on:click="direct_to_external_url('https://iopscience.iop.org/article/10.3847/1538-4357/aceaf6')" class="projectCard">
            <h2>Machine learning cosmology from void properties</h2>
            <h3>arXiv:2212.06860 
            <br>
            Published in ApJ</h3>
            <p style="font-size:15px;" >Bonny Y. Wang, Alice Pisani, Francisco Villaescusa-Navarro, Benjamin D. Wandelt </p>
            <img class="projectImg" src="/ImgThumbNail/web.jpg">
        </button>
        <button v-if="Astro" v-on:click="direct_to_external_url('https://iopscience.iop.org/article/10.3847/2041-8213/ad5ffe')" class="projectCard">
            <h2>Cosmology from one galaxy in voids?</h2>
            <h3>arXiv:2405.04447
                <br>
                Published in ApJL</h3>
            <p>Bonny Y. Wang, Alice Pisani</p>
            <img class="projectImg" src="https://cdn.mos.cms.futurecdn.net/vamaoFeP8FDSfCYookG6qK.jpg">
        </button>

        <button v-if="Astro" v-on:click="direct_to_external_url('https://www.dreams-project.org')" class="projectCard">
            <h2>The DREAMS Project</h2>
            <h3>Core Team Member</h3>
            <p>DaRk mattEr and Astrophysics with Machine learning and Simulations</p>
            <img class="projectImg" src="https://images.squarespace-cdn.com/content/v1/661990c9787a27148ecfebc3/0afa2277-f4da-46c5-b01f-1e624f313368/single_box_image_TNG300-3_gist_yarg.png?format=100w%20100w,%20https://images.squarespace-cdn.com/content/v1/661990c9787a27148ecfebc3/0afa2277-f4da-46c5-b01f-1e624f313368/single_box_image_TNG300-3_gist_yarg.png?format=300w%20300w,%20https://images.squarespace-cdn.com/content/v1/661990c9787a27148ecfebc3/0afa2277-f4da-46c5-b01f-1e624f313368/single_box_image_TNG300-3_gist_yarg.png?format=500w%20500w,%20https://images.squarespace-cdn.com/content/v1/661990c9787a27148ecfebc3/0afa2277-f4da-46c5-b01f-1e624f313368/single_box_image_TNG300-3_gist_yarg.png?format=750w%20750w,%20https://images.squarespace-cdn.com/content/v1/661990c9787a27148ecfebc3/0afa2277-f4da-46c5-b01f-1e624f313368/single_box_image_TNG300-3_gist_yarg.png?format=1000w%201000w,%20https://images.squarespace-cdn.com/content/v1/661990c9787a27148ecfebc3/0afa2277-f4da-46c5-b01f-1e624f313368/single_box_image_TNG300-3_gist_yarg.png?format=1500w%201500w,%20https://images.squarespace-cdn.com/content/v1/661990c9787a27148ecfebc3/0afa2277-f4da-46c5-b01f-1e624f313368/single_box_image_TNG300-3_gist_yarg.png">
        </button>
        <button v-if="Game || Astro" v-on:click="direct_to_external_url('https://projects.etc.cmu.edu/moonsters/')" class="projectCard">
            <h2>Moonsters Project</h2>
            <h3>Helped Moonshot Museum to secure the 2024 NASA grant for STEM Education</h3>
            <p>A virtual reality game prototype of NASA’s VIPER mission </p>
            <img class="projectImg" src="https://projects.etc.cmu.edu/moonsters/wp-content/uploads/2024/01/logo_Small_DarkBackground.png">
        </button>
        <button v-if="Astro" v-on:click="this.$router.push('/Projects/GNN');" class="projectCard">
            <h2>Graph Neural Networks for Voids</h2>
            <h3>Still in Progress...</h3>
            <p>Use GNN to Produce Cosmological Inference from Void Properties</p>
            <img class="projectImg" src="/ImgThumbNail/GNN.jpg">
        </button>
        <button v-if="Game" class="projectCard" v-on:click="this.$router.push('/Projects/BeeCareful');">
            <h2>Bee Careful</h2>
            <h3>CMU ETC BVW Coursework</h3>
            <p>An Asymmetric Online Multiplayer Battle Game Where Players Plays as Bees and a Bee Keeper</p>
            <img class="projectImg" src="/ImgThumbNail/Bee_logo.webp">
        </button>
        <button v-if="Game" class="projectCard" v-on:click="this.$router.push('/Projects/Bubble');">
            <h2>Bubble Fantasy</h2>
            <h3>CMU ETC BVW Coursework</h3>
            <p>An Enchanting VR Game where Players Manipulate Captivating Bubbles</p>
            <img class="projectImg" src="/ImgThumbNail/Bubble.webp">
        </button>
        <button v-if="Game" class="projectCard" v-on:click="this.$router.push('/Projects/Horror');">
            <h2>Horror Ride</h2>
            <h3>CMU ETC BVW Coursework</h3>
            <p>A Theme Park Level Ride Experience where Players Explore a Haunted House through VR and the Motion Chair</p>
            <img class="projectImg" src="/ImgThumbNail/Horror.webp">
        </button>
        <button v-if="Game" class="projectCard" v-on:click="this.$router.push('/Projects/catHome');">
            <h2>Home Cat</h2>
            <h3>Available Online</h3>
            <p>A 2D platformer and simulation game about reviving people’s love by delivering cats in a cyberpunk world</p>
            <img class="projectImg" src="/ImgThumbNail/HomeCat.jpg">
        </button>
        <button v-if="Game" class="projectCard" v-on:click="this.$router.push('/Projects/rubiks');">
            <h2>WebGL Rubik's Cube</h2>
            <h3>Available Online</h3>
            <p>An Online Rubik's Cube Built with WebGL and GLSL</p>
            <img class="projectImg" src="/ImgThumbNail/rubiks.png">
        </button>
       
        <button v-if="Game"  v-on:click="this.$router.push('/Projects/PurpleVerse');" class="projectCard">
            <h2>Web AR for PurpleVerse in NFT.NYC</h2>
            <p>A Web AR Application for Augmented Exhibition Experience</p>
            <img class="projectImg" src="/ImgThumbNail/purpleLogo.png">
        </button>
        <button v-if="Game" v-on:click="this.$router.push('/Projects/SpacePersona');" class="projectCard">
            <h2>Space Persona</h2>
            <h3>Available Online</h3>
            <p>A Personality Game About Finding Your Position in the Space Mining Era</p>
            <img class="projectImg" src="/ImgThumbNail/spacePersona0.png">
        </button>
        <button v-if="Game" v-on:click="this.$router.push('/Projects/SpaceObserver');" class="projectCard">
            <h2>Space Telescope Data Center</h2>
            <p>A Web Platform for Showing Data Obtained by Yangwang-1 Satellite from Origin Space</p>
            <img class="projectImg" src="/ImgThumbNail/skyObserver.jpg">
        </button>

        <button v-if="Game" class="projectCard" v-on:click="this.$router.push('/Projects/DLD');">
            <h2>Digital Logic Design: “Whac-a-Mole”</h2>
            <p>A circuit designed with fundamental electronic components</p>
            <img class="projectImg" src="/ImgThumbNail/DLDShow.jpg">
        </button>

        <button v-if="Game"  v-on:click="this.$router.push('/Projects/GravityGame');" class="projectCard">
            <h2>World of Gravity</h2>
            <p>A Game Created by to Explore the Effect of Gravity by N-body Simulation</p>
            <img class="projectImg" src="/ImgThumbNail/gravityGame.jpg">
        </button>


        <button v-if="Other" class="projectCard" v-on:click="this.$router.push('/Projects/ChinesePoem');">
            <h2>AI for Writing Chinese Poems from the Tang Dynasty</h2>
            <p>Using the GRU architecture to Autogenerate Chinese Poems</p>
            <img class="projectImg" src="/ImgThumbNail/chinesePoem.jpg">
        </button>
        
        <button v-if="Other" class="projectCard" v-on:click="this.$router.push('/Projects/photonLab');">
            <h2>PhotonLab Android App</h2>
            <p>Android App for Controlling the PhotonLab Smart Light System</p>
            <img class="projectImg" src="/ImgThumbNail/PhotonLab.jpg">
        </button>
        <button v-if="Other" class="projectCard" v-on:click="this.$router.push('/Projects/smartContract');">
            <h2>Smart Contract Vulnerabilities Detection</h2>
            <p>A Program for Detecting Reentrancy and Unhandled Exceptions</p>
            <img class="projectImg" src="/ImgThumbNail/smart.jpg">
        </button>
    
    </span>
</template>

<script>
export default {
    name:"Project",
    data:function(){
        return {
            Astro: true,
            Game: true,
            Other: true,
        }
    },
    methods:{
        selectAstro:function(){
            this.clearTags();
            this.Astro = true;
        },
        selectGame:function(){
            this.clearTags();
            this.Game = true;
        },
        selectOther:function(){
            this.clearTags();
            this.Other = true;
        },
        selectAll:function(){
            this.Astro = true;
            this.Game = true;
            this.Other = true;
        },
        clearTags:function(){
            this.Astro = false;
            this.Game = false;
            this.Other = false;
        },

        direct_to_external_url: function(url){
            window.location.href = url;
        }
    }
}
</script>

<style>
#projectList{
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    /* margin-top: 100px; */
    height: 80%;
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
    color:rgb(117, 206, 104);
}

.projectCard p{
    font-size: 20px;
}

.projectImg{
    border: white 1px solid;
    width: 50%;
}

.categoryTitle{
    padding: 10px;
    border-left: 1px red solid;
    width:100%;
    
}

.Tag{
    background: none;
    background-color: rgba(0, 0, 0, 0.23);
    padding: 10px;
    width: fit-content;
    color: white;
    font-size: 15px;
    border: none;
    border-bottom: red 1px solid;
    font-family: 'Courier New', Courier, monospace;
    margin: 1.5%;
    cursor: pointer;

    font-weight: bold;
    color: white;
    padding: 10px;
}

.Tag:hover{
    cursor: pointer;
    background: red;
    border: red solid 2px;
}

.Tag:focus{
    background: red;
    color: white;
}

.TagZone{
    align-content: center;
    text-align: center;
    width: 100%;
    height: fit-content;
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
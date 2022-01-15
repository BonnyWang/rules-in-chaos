<template>
    <span id="projectList">
        <button v-on:click="this.$router.push('/Projects/SpacePersona');" class="projectCard">
            <h2>Space Persona</h2>
            <p>A Personality Game About Finding Your Position in Space Mining Era</p>
            <img class="projectImg" src="/ImgThumbNail/spacePersona.jpg">
        </button>
        <button v-on:click="this.$router.push('/Projects/SpacePersona');" class="projectCard">
            <h2>Gravity Game</h2>
            <p>A Mini Game Created by Unity to Explore the Effect of Gravity</p>
            <img class="projectImg" src="/ImgThumbNail/gravityGame.jpg">
        </button>
        <button class="projectCard">
            <h2>Space Telescope Data Center</h2>
            <p>A Web Platform for Showing Data Obtained by Yangwang-1 Satellite</p>
            <img class="projectImg" src="/ImgThumbNail/skyObserver.jpg">
        </button>
        <button class="projectCard">
            <h2>Chinese Poem Auto Generation</h2>
            <p>A Web Platform for Showing Data Obtained by Yangwang-1 Satellite</p>
            <img class="projectImg" src="/ImgThumbNail/skyObserver.jpg">
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
    margin-top: 100px;
    height: 60%;
    overflow-y: scroll;

}

.projectCard{
    background: none;
    background-color: rgba(0, 0, 0, 0.23);
    padding: 10px;
    width: 40%;
    color: white;
    font-size: 25px;
    border: none;
    border: red 1px solid;
    font-family: 'Courier New', Courier, monospace;
    margin: 5%;
    cursor: pointer;
}

.projectCard:hover{
    color: red;
}

.projectImg{
    border: white 1px solid;
}

</style>
<template>
    <span id="projectList">
        <button v-on:click="this.$router.push('/Projects/SpacePersona');" class="projectCard">
            <h2>Space Persona</h2>
            <p>A Personality Game About Finding Your Position in Space Mining Era</p>
            <img src="/ImgThumbNail/spacePersona.jpg">
        </button>
        <button class="projectCard">
            <h2>Space Telescope Data Center</h2>
            <p>A Web Platform for Showing Data Obtained by Yangwang-1 Satellite</p>
            <img src="/ImgThumbNail/skyObserver.jpg">
        </button>
        <button class="projectCard">
            <h2>Chinese Poem Auto Generation</h2>
            <p>A Web Platform for Showing Data Obtained by Yangwang-1 Satellite</p>
            <img src="/ImgThumbNail/skyObserver.jpg">
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
    padding: 10px;
    width: 40%;
    color: white;
    font-size: 25px;
    border: none;
    border: red 1px solid;
    font-family: 'Courier New', Courier, monospace;
    margin: 5%;
}

.projectCard:hover{
    color: red;
}

</style>
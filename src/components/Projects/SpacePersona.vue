<template>
    <span class="projectContent">
        <h1 class="projectTitle">
            Space Persona
        </h1>
        <h2 class="projectSubTitle">
            Created for Origin Space
        </h2>
        <h2 class="projectSubTitle">
            A Personality Game About Finding Your Position in the Space Mining Era
        </h2>
        <p>
            Used Three.js and companies's satellite model
        </p>
        <iframe width="60%" height="315" src="https://www.youtube.com/embed/3rVGH-63lOg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
    </span>
  
</template>

<script>
export default {
    name:"SpacePersona"

}
</script>

<style>

.projectTitle{
    font-size: 30px;
}

.projectSubTitle{
    font-weight: 100;
}

.projectContent{
    margin-top: 100px;
    height: 60%;
    overflow-y: scroll;
    padding: 10px;
    padding-right: 30px;

}

.projectContent p{
    padding-right: 50px;
}

p{
    overflow-wrap: break-word;
    word-wrap: break-word; 

}

figcaption{
    overflow-wrap: break-word;
    word-wrap: break-word;
}

.projectContent img{
    width: 60%;
    border: none;
    margin-left: 0px;
    margin-right: 10px;
}

.projectContent a{
    color: aqua;
}
</style>
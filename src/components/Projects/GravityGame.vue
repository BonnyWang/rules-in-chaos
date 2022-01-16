<template>
    <span>
        <h1 class="projectTitle">
            Gravity Game
        </h1>
        <h2 class="projectSubTitle">
         Created to explore the effect of Gravity
        </h2>
        <video width="640" height="480" controls>
            <source src="/Videos/gravityGame.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </span>
  
</template>

<script>
export default {
    name:"Gravity Game"

}
</script>

<style>

.projectTitle{
    font-size: 30px;
}

.projectSubTitle{
    font-weight: 100;
}

@media only screen and (max-width: 1000px){
    video{
        width: 320;
        height: 240;
    }
}

</style>
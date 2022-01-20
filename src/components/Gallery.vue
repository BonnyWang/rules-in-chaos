<template>
    <span id="Gallery">
        <h2 class="imageSection">
            Digital Drawing & Design :
        </h2>
        <img v-for="value in digitalThumbs" :key="value" :src=value>
        <h2 class="imageSection">
            3D Modeling & Rendering :
        </h2>
        <img v-for="value in modelThumbs" :key="value" :src=value>
    </span>
</template>

<script>
export default {
    name:"Gallery",
    data() {
        return {
            modelThumbs:["/ImgThumbNail/originAsteroid.jpg","/ImgThumbNail/normalAsteroid.jpg","/ImgThumbNail/m0.jpg",],
            digitalThumbs:["/ImgThumbNail/backKnight copy.jpg","/ImgThumbNail/chaos.jpg","/ImgThumbNail/fuckFinal.jpg"]
        }
    },
    mounted(){
    }
}
</script>

<style>
#Gallery{
    margin-top: 100px;
    height: 60%;
    overflow-y: scroll;
}
img{
    width: 30%;
    margin: 1.5%;
}

</style>

<style scoped>
.imageSection{
    padding: 10px;
    border-left: 1px red solid;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #000000; 
}

::-webkit-scrollbar-thumb {
  background: rgb(255, 0, 0); 
}

</style>
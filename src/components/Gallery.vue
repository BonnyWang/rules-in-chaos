<template>
    <span id="Gallery">
        <h2>
            Digital Drawings:
        </h2>
        <h2>
            3D Modeling & Rendering:
        </h2>
        <img v-for="value in ImgThumbs" :key="value" :src=value>
    </span>
</template>

<script>
export default {
    name:"Gallery",
    data() {
        return {
            ImgThumbs:["/ImgThumbNail/backKnight copy.jpg","/ImgThumbNail/m0.jpg","/ImgThumbNail/chaos.jpg","/ImgThumbNail/fuckFinal.jpg"]
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
    width: 200px;
    margin: 20px;
}

</style>

<style scoped>

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
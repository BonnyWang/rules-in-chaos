<template>
    <span id="Gallery">
        <img src=" /wth.jpg" thum alt="">
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

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #000000; 
}

::-webkit-scrollbar-thumb {
  background: rgb(255, 0, 0); 
}

</style>
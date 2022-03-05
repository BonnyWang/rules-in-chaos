<template>
    <span id="Gallery">
        <h2 class="GallerySubTitle">
            Digital Drawing & Design :
        </h2>
        <ul>
            <li v-for="value in digitalThumbs" :key="value">
                <img :src=value>
            </li>
        </ul>
        <h2 class="GallerySubTitle">
            3D Modeling & Rendering :
        </h2>
        <ul>
            <li v-for="value in modelThumbs" :key="value">
                <img :src=value>
            </li>
        </ul>
    </span>
</template>

<script>
export default {
    name:"Gallery",
    data() {
        return {
            modelThumbs:["/ImgThumbNail/originAsteroid.jpg","/ImgThumbNail/normalAsteroid.jpg","/ImgThumbNail/m0.jpg",],
            digitalThumbs:["/ImgThumbNail/backKnight copy.jpg","/ImgThumbNail/chaos.jpg","/ImgThumbNail/fuckFinal.jpg","/ImgThumbNail/CSSGarden.jpg"]
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
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

li{
    display: inline-flex;
    width: 30%;
    list-style-type: none;
    margin: 1.5%;
}

ul{
    display: inline;
    list-style-type: none;
    padding-inline-start: 0px;
}

img{
    width: 100%;
    border: red 1px solid;

}

img:hover{
   cursor: pointer;
}

.GallerySubTitle{
    padding: 10px;
    border-left: 1px red solid;
    width:100%;
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
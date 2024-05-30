<template>
    <span id="Gallery">
        <h2 class="GallerySubTitle">
            Digital Drawing & Design :
        </h2>
        <ul>
            <li v-for="value in digitals" :key="value">
                <a :href=value.original>
                    <img :src= value.thumbs>
                </a>
            </li>
        </ul>
        <h2 class="GallerySubTitle">
            3D Modeling & Rendering :
        </h2>
        <ul>
            <li v-for="value in models" :key="value">
                <a :href=value.original>
                    <img :src=value.thumbs>
                </a>
            </li>
        </ul>

        <h2 class="GallerySubTitle">
            Video :
        </h2>
        <ul id="videoItem">
            <li id="videoItem">
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/nJyXYPPJaok" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </li>
            <li id="videoItem">
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/zHcObwvdhB4?si=VnEJwfDggRlIvjI7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </li>
            <li id="videoItem">
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/D9WoyGsAT7E?si=eKZ56rvAMa8deXhF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </li>
            <li id="videoItem">
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/M-_IJ4WDqfY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </li>

        </ul>
    </span>
</template>

<script>
export default {
    name:"Gallery",
    data() {
        return {
            rootThumb:"/ImgThumbNail/",
            modelThumbs:["originAsteroid.jpg","starGas.jpg","normalAsteroid.jpg","scifi.jpg","m0.jpg", "GNN.jpg", "whiteDwarf.jpg", "void.jpg", "noise.png"],
            digitalThumbs:["backKnight copy.jpg","chaos.jpg","fuckFinal.jpg","wth.jpg","CSSGarden.jpg","Poster.jpg"],
            modeloriginals: ["/ImgOriginal/originAsteroid.png","/ImgOriginal/starGas.png","/ImgOriginal/normalAsteroid.png","/ImgOriginal/scifi.png","/ImgOriginal/m0.jpg", "/ImgOriginal/void1.jpg", "/ImgOriginal/whiteDwarf.jpg",  "/ImgOriginal/void.jpg","/ImgOriginal/noise.png"],
            digitalOriginals:["/ImgOriginal/knightCombo.jpg","/ImgOriginal/chaos.jpg","/ImgOriginal/fuckFinal.jpg", "/ImgOriginal/wth.jpg","https://bonnymidterm.glitch.me","/ImgOriginal/Poster.jpg"]
        }
    },
    computed: {
        models() {
            return this.modelThumbs.map((itm, i) => {
                return { thumbs: this.rootThumb + itm, original: this.modeloriginals[i] }
            })
        },
        digitals() {
            return this.digitalThumbs.map((itm, i) => {
                return { thumbs: this.rootThumb + itm, original: this.digitalOriginals[i] }
            })
        }
    }
}

</script>

<style>

#Gallery{
    /* margin-top: 100px; */
    height: 80%;
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

#videoItem{
    width: 95%;
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
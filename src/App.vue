<template>
  <div id="mainHolder">
    <welcome v-if="showBanner"> </welcome>
    <audio ref="mbgm" controls autoplay loop hidden="true">
      <source src="/bgm.wav">
    Your browser does not support the audio element.
    </audio>
    <h2 v-if="showButton">Hi, I'm 博尼</h2>
    <button v-if="showButton" v-on:click="showWorks">Click To show My Works</button>
    <section v-if="showContent">
      <img v-if="showIndex == 1" v-on:click="showIndex += 1" src="/m0.jpg">
      <img v-if="showIndex == 2" v-on:click="showIndex += 1" src="/fuckFinal.jpg">
      <img v-if="showIndex == 3" v-on:click="showIndex += 1" src="/backKnight.png">
      <h2 id="caption">Click to View Next One</h2>
    </section>
  </div>
</template>

<script>
import Welcome from './components/Welcome.vue';
import {solarTumble} from './backScene.js'

export default {
  name: 'App',
  components: {
    Welcome
  },
  data:function(){
    return {
      showBanner: true,
      showButton: false,
      showContent:false,
      showIndex: 0
    }
  },
  methods:{
    hideBanner:function(){
      this.showBanner = false;
    },
    fshowButton:function(){
      this.showButton = true;
    },
    showWorks:function(){
      this.playMusic();

      this.showContent = true;
      this.showIndex = 1;
      this.showButton = false;
      solarTumble();
    },
    playMusic:function(){
      this.$refs.mbgm.play();
    }
  },
  mounted(){
    this.playMusic()
  }
}

    Welcome</script>

<style>
  canvas{
    position: fixed;
    top: 0;
    left: 0;
  }

  div{
    position: fixed;
    top:0;
    left: 0;

    height: 100%;
    width: 100%;

    z-index: 1;

    background-color: transparent;
  }

  button{
    font-size: 30px;
    background: none;
    color: white;
    position: fixed;
    top: 50%;
    left: 75%;
    transform: translate(-50%, -50%);
    outline: none;
    border: none;
  }

  button:hover{
    border:  1px solid white;
  }

  section{
    position: fixed;
    left: 75%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 50%;
  }

  img{
    max-height: 100%;
    widows: auto;
  }

  h2{
    color: white;
    position: fixed;
    top: 40%;
    left: 75%;
  }

  #caption{
    position: fixed;
    left: 75%;
    top: 80%;
    white-space: nowrap;
    display: block;
  }

</style>

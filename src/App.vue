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
      <h3 v-if="showIndex == 1">Monster Model</h3>
      <img v-if="showIndex == 2" v-on:click="showIndex += 1" src="/fuckFinal.jpg">
      <h3 v-if="showIndex == 2">Selfie Combo</h3>
      <img v-if="showIndex == 3" v-on:click="showIndex += 1" src="/selfie1.jpg">
      <h3 v-if="showIndex == 3">Selfie Permutation 1</h3>
      <img v-if="showIndex == 4" v-on:click="showIndex += 1" src="/selfie2.jpg">
      <h3 v-if="showIndex == 4">Selfie Permutation 2</h3>
      <img v-if="showIndex == 5" v-on:click="showIndex += 1" src="/selfie3.jpg">
      <h3 v-if="showIndex == 5">Selfie Permutation 3</h3>
      <img v-if="showIndex == 6" v-on:click="showIndex += 1" src="/backKnight.png">
      <h3 v-if="showIndex == 6">River Knight</h3>
      <img v-if="showIndex == 7" v-on:click="showIndex += 1" src="/knightCombo.jpg">
      <h3 v-if="showIndex == 7">River Knight Combo</h3>
      <img v-if="showIndex == 8" v-on:click="showIndex += 1" src="/wth.jpg">
      <h3 v-if="showIndex == 8">Robot</h3>
      <img v-if="showIndex == 9" v-on:click="showIndex += 1" src="chaos.jpg"/>
      <h3 v-if="showIndex == 9">Chaos</h3>

      <section v-if="showIndex == 10">
        <a href="http://bonnywang.com/spacePersona/">http://bonnywang.com/spacePersona/</a>
        <a href ="http://47.101.41.6/sky_observer_20210828/">http://47.101.41.6/sky_observer_20210828/</a>
        <h3>Ohter games made by Unity...</h3>
      </section>1
      <h2 v-if="showIndex != 10" id="caption">Click to View Next One</h2>
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
    display: inline-block;
    position: fixed;
    left: 75%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 50%;
  }

  img{
    /* display: inline-block; */
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
    white-space: nowrap;
    display: block;
  }

  h3,a{
    display: inline-block;
    margin-top: 15px;
    
    color: white;
    font-family: 'Courier New', Courier, monospace;
  }

</style>

<template>
  <div id="mainHolder">
    <welcome v-if="showBanner"> </welcome>
    <button v-if="showButton" v-on:click="showWorks">Click To show My Work</button>
    <section v-if="showContent">
      <img src="/m0.jpg">
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
      showContent:false
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
      this.showContent = true;
      this.showButton = false;
      solarTumble();
    }
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
    max-width: 100%;
    height: auto;
  }

</style>

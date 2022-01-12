<template>
  <div id="mainHolder">
    <section id="Welcome" v-if="firstEnter">
        <button id="Enter" v-on:click="toMyWorld">↓ Enter My World ↓ </button>
    </section>
      
    <section id="mainView">
        <h1 id="siteTitle">Hello, I'm Bonny</h1>
        <span id="Navigation">
            <button id="NavButton">About Me</button>
            <button id="NavButton">Project</button>
            <button id="NavButton">Gallery</button>
        </span>
        <router-view />
    </section>
    <audio ref="mbgm" controls autoplay loop hidden="true">
      <source src="/bgm.wav">
    Your browser does not support the audio element.
    </audio>
  </div>
</template>

<script>
import {toMain} from './backScene.js';

export default {
  name: 'App',
  components: {
  },
  data:function(){
    return {
      firstEnter: true
    }
  },
  methods:{
 
    playMusic:function(){
      this.$refs.mbgm.play();
    },
    toMyWorld(){
      const mainView = document.getElementById('mainView');
      mainView.scrollIntoView({ behavior: 'smooth' });
      this.hideEntrance();
      toMain();
    },
    hideEntrance(){
      this.firstEnter = false;
    }
  },
  mounted(){
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0,0); 

    this.playMusic()
  }
}

</script>

<style>
  canvas{
    position: fixed;
    top: 0;
    left: 0;
  }

  div{
    position: relative;
    top:0;
    left: 0;

    height: 200%;
    width: 100%;

    z-index: 1;

    background-color: transparent;
  }

  section{
    display: flex;
    align-items: center;
    height: 100vh;
    position: relative;
    font-family: 'Courier New', Courier, monospace;
    color: #ffeded;
    text-transform: uppercase;
    font-size: 3vmin;
    padding-left: 10%;
    padding-right: 10%;
  }

  #Welcome
  {
    justify-content: flex-end;
  }
    
  #Enter{
    background: none;
    color: white;
    font-family: 'Courier New', Courier, monospace;
    border: none;
    font-size: 30px;
    margin-top: 200px;
    padding: 10px;
  }

  #Enter:hover{
    border-bottom: white 1px solid;
  }

  #mainView{
    height: 100%;
    display: grid;
    gap: 50px;
    grid-template-columns: 30% 70%;    
      
  }

  #Navigation{
    grid-column-start: 1;
    grid-column-end: 2;
  }

  #siteTitle{
    padding-top: 200px;
  }

  #NavButton{
    display: block;
    background: none;
    color: white;
    font-family: 'Courier New', Courier, monospace;
    border: none;
    font-size: 30px;
    padding: 10px;
  }

  #NavButton:hover{
    border-left: white 1px solid;
  }


</style>

<template>
  <div id="mainHolder">
    <section id="Welcome" v-if="firstEnter">
        <button v-if="loaded" id="Enter" v-on:click="toMyWorld">↓ Enter My World ↓ </button>
        <h2 v-if="!loaded"> loading {{loadingProgress}} % </h2>
    </section>
      
    <section id="mainView" v-if="loaded">
        
        <span id="Navigation">
          <h1 id="siteTitle">WELCOME</h1>
            <router-link to="/AboutMe" id="NavButton">About Me</router-link>
            <router-link to="/Projects" id="NavButton">Projects</router-link>
            <router-link to="/Gallery" id="NavButton">Gallery</router-link>
        </span>
        <transition name="fade">
          <router-view class="content" :key="$route.fullPath"/>
        </transition>
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
      loadingProgress: 0,
      loaded: false,
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
    border-bottom: red 1px solid;
    color: red;
  }

  #mainView{
    height: 100vh;
    display: grid;
    gap: 50px;
    grid-template-columns: 30% 70%;
    grid-template-rows: 100vh;    
      
  }

  #Navigation{
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  .content{
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;

  }

  #siteTitle{
    font-size: 40px;
  }

  #NavButton{
    display: block;
    background: none;
    text-decoration: none;
    color: white;
    font-family: 'Courier New', Courier, monospace;
    border: none;
    font-size: 30px;
    padding: 10px;
  }

  #NavButton:hover{
    border-left: red 1px solid;
    color: red;
  }

  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-track {
    background: #000000; 
  }

  ::-webkit-scrollbar-thumb {
    background: white; 
  }

  .fade-enter-active, .fade-leave-active {
    transition-property: opacity;
    transition-duration: 0.5s;
  }

  .fade-enter-active {
    transition-delay: 0.5s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }

</style>

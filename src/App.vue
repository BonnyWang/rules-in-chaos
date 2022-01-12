<template>
  <div id="mainHolder">
    <welcome > </welcome>
    <audio ref="mbgm" controls autoplay loop hidden="true">
      <source src="/bgm.wav">
    Your browser does not support the audio element.
    </audio>
  </div>
</template>

<script>
import Welcome from './components/Welcome.vue';

export default {
  name: 'App',
  components: {
    Welcome
  },
  data:function(){
    return {
    }
  },
  methods:{
 
    playMusic:function(){
      this.$refs.mbgm.play();
    }
  },
  mounted(){
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

</style>

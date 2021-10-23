<template>
  <div id="mainHolder">
    <welcome v-if="showBanner"> </welcome>
    <button v-if="showButton">Click To show My Work</button>
  </div>
</template>

<script>
import Welcome from './components/Welcome.vue'

export default {
  name: 'App',
  components: {
    Welcome
  },
  data:function(){
    return {
      showBanner: true,
      showButton: false
    }
  },
  methods:{
    hideBanner:function(){
      this.showBanner = false;
    },
    fshowButton:function(){
      this.showButton = true;
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
    color: red;
    position: fixed;
    top: 50%;
    left: 75%;
    transform: translate(-50%, -50%);
  }

</style>

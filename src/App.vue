<template>
  <div id="mainHolder">
    <welcome v-if="showBanner"> </welcome>
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
      showBanner: true
    }
  },
  methods:{
    hideBanner:function(){
      this.showBanner = false;
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

</style>

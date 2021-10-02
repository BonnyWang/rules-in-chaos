<template>
  <div>
    <welcome> </welcome>
  </div>
</template>

<script>
import Welcome from './components/Welcome.vue'

export default {
  name: 'App',
  components: {
    Welcome
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
    z-index: 1;
  }

</style>

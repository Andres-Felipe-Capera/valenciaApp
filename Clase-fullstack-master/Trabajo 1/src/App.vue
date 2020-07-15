<template>
  <div id="app">
    <headercomponent></Headercomponent>
    
  </div>
</template>

<script>


import Headercomponent from './components/header.vue';
export default {
  name: 'App',
  components: {
    Headercomponent,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}

</style>

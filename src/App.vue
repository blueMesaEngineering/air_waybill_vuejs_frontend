<template>
  <div id="app">
    <!-- <ShipperName msg="Welcome to Your Vue.js App"/> -->
    <div id = "nav">
      <!-- <router-link to="/">Home</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<script>
// import ShipperName from './components/shipperName.vue'

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

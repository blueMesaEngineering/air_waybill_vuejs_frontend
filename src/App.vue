<template>
  <div id="app">
    <div id = "nav">
        <navBar/>
        <router-view/>
    </div>
  </div>
</template>

<script>
// import ShipperName from './components/shipperName.vue'

import navBar from "./components/navBar.vue"
// import routerView from "./components/routerView.vue"

export default {
  name: 'App',
  components: { navBar },
}
</script>


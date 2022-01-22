<template>
  <div class = "grid-container-navbar">
    <div class = "grid-item-navbar" style = "padding: 1vh .5vw 1vh .5vw;">
      <router-link to = "/home">
        <img src = "../assets/logo.png" class = ".grid-item-navbar" style="height: 3.5vh; width 3.5vh; margin: .5vh">
      </router-link>
      <div style="font-size: .75em">
        HOME
      </div>
    </div>
    <div class = "grid-item-navbar">
      <!-- Empty Grid Item for proper spacing -->
    </div>
    <div class = "grid-item-navbar" style = "padding: 1vh .5vw 1vh .5vw; text-align: center; float: right">
      <router-link to = "/shipperName">
        <img src = "../assets/navbar/shipper.png" style="height: 3.5vh; width 3.5vh; margin: .5vh">
      </router-link>
      <div style="font-size: .75em">
        SHIPPER
      </div>
    </div>
    <div class = "grid-item-navbar" style = "padding: 1vh .5vw 1vh .5vw; text-align: center; float: right">
      <div>
        <img src = "../assets/navbar/shipping.png" style="height: 4.5vh; width 4.5vh; margin: .043875vh">
      </div>
      <div style="font-size: .75em">
        SHIPMENT
      </div>
    </div>
    <div class = "grid-item-navbar" style = "padding: 1vh .5vw 1vh .5vw; text-align: center; float: right">
      <div>
        <img src = "../assets/navbar/settings.png" style="height: 3.5vh; width 3.5vh; margin: .5vh">
      </div>
      <div style="font-size: .75em">
        SETTINGS
      </div>
    </div>
    <div class = "grid-item-navbar" style = "padding: 1vh .5vw 1vh .5vw; text-align: center; float: right">
      <router-link to = "/login">
        <img src = "../assets/navbar/logout.png" style="height: 3.5vh; width 3.5vh; margin: .5vh">
      </router-link>
      <div style="font-size: .75em">
        LOG OUT
      </div>
    </div>
  </div>
</template>

<script>

export default ({
  name: 'navBar'
})
</script>

<style>
.grid-container-navbar {
  display: grid;
  width: 99vw;
  justify-content: center;
  grid-template-columns: 6vw 69vw 6vw 6vw 6vw 6vw;
  background: rgba(0,0,0,.1);
}

.grid-item-navbar {
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
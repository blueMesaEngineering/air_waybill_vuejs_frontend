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
        <img src = "../assets/navbar/shipment4.png" style="height: 4vh; width 4vh; margin: .25vh; transform: scaleX(-1);">
      </div>
      <div style="font-size: .75em">
        SHIPMENT
      </div>
    </div>
    <div class = "grid-item-navbar" style = "padding: 1vh .5vw 1vh .5vw; text-align: center; float: right">
      <div>
        <img src = "../assets/navbar/consignee.png" style="height: 3.5vh; width 3.5vh; margin-top: .5vh; margin-bottom: .5vh; margin-left: .5vh; margin-right: .5vh">
      </div>
      <div style="font-size: .75em">
        CONSIGNEE
      </div>
    </div>
    <div class = "grid-item-navbar" style = "padding: 1vh .5vw 1vh .5vw; text-align: center; float: right">
      <div>
        <img src = "../assets/navbar/carrier.png" style="height: 3.5vh; width 3.5vh; margin: .5vh">
      </div>
      <div style="font-size: .75em">
        CARRIER
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
  background: rgba(0,0,0,.1);
  grid-template-columns: 6vw 58vw 6vw 6vw 6vw 6vw 6vw 6vw;
}

@media screen and (max-width: 1200px) {
  .grid-container-navbar {
    grid-template-columns: 7vw 50vw 7vw 7vw 7vw 7vw 7vw 7vw;
  }
}

@media screen and (max-width: 1000px) {
  .grid-container-navbar {
    grid-template-columns: 8vw 44vw 8vw 8vw 8vw 8vw 8vw 8vw;
  }
}

@media screen and (max-width: 880px) {
  .grid-container-navbar {
    grid-template-columns: 9vw 36vw 9vw 9vw 9vw 9vw 9vw 9vw;
  }
}

@media screen and (max-width: 760px) {
  .grid-container-navbar {
    grid-template-columns: 11vw 18vw 11vw 11vw 11vw 11vw 11vw 11vw;
  }
}

@media screen and (max-width: 640px) {
  .grid-container-navbar {
    grid-template-columns: 12vw 9vw 12vw 12vw 12vw 12vw 12vw 12vw;
  }
}

@media screen and (max-width: 580px) {
  .grid-container-navbar {
    grid-template-columns: 13vw 0vw 13vw 13vw 13vw 13vw 13vw 13vw;
  }
}


.grid-item-navbar {
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
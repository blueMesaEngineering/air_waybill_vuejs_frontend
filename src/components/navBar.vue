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
    <div class = "grid-item-navbar-spacer">
      <!-- Empty Grid Item for proper spacing -->
    </div>
    <div class = "grid-item-navbar" style = "padding: 1vh .5vw 1vh .5vw; text-align: center; float: right">
      <router-link to = "/shipper">
        <img src = "../assets/navbar/shipper.png" style="height: 3.5vh; width 3.5vh; margin: .5vh" v-on:click = "checkURL">
      </router-link>
      <div style="font-size: .75em">
        SHIPPER
      </div>
    </div>
    <div class = "grid-item-navbar" style = "padding: 1vh .5vw 1vh .5vw; text-align: center; float: right">
      <router-link to = "/consignee">
        <img src = "../assets/navbar/consignee2.png" style="height: 4vh; width 4vh; margin-top: .25vh; margin-bottom: .25vh; margin-left: .25vh; margin-right: .25vh">
      </router-link>
      <div style="font-size: .75em">
        CONSIGNEE
      </div>
    </div>
    <div class = "grid-item-navbar" style = "padding: 1vh .5vw 1vh .5vw; text-align: center; float: right">
      <router-link to = "/carrier">
        <img src = "../assets/navbar/carrier.png" style="height: 3.5vh; width 3.5vh; margin: .5vh">
      </router-link>
      <div style="font-size: .75em">
        CARRIER
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
      <router-link to = "/airWaybill">
        <img src = "../assets/navbar/airWaybill.png" style="height: 3.5vh; width 3.5vh; margin: .5vh">
      </router-link>
      <div style="font-size: .75em">
        AIR WAYBILL
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
  name: 'navBar',
  methods: {
    checkURL: function() {
      var currentUrl = window.location.pathname;
      console.log(currentUrl);
    }
  },
})
</script>

<style>
.grid-container-navbar {
  display: grid;
  width: 99vw;
  justify-content: center;
  background: rgba(0,0,0,.1);
  grid-template-columns: 6vw 52vw 6vw 6vw 6vw 6vw 6vw 6vw 6vw;
}

@media screen and (max-width: 1200px) {
  .grid-container-navbar {
    grid-template-columns: 7vw 44vw 7vw 7vw 7vw 7vw 7vw 7vw 7vw;
  }
}

@media screen and (max-width: 1000px) {
  .grid-container-navbar {
    grid-template-columns: 8vw 36vw 8vw 8vw 8vw 8vw 8vw 8vw 8vw;
  }
}

@media screen and (max-width: 880px) {
  .grid-container-navbar {
    grid-template-columns: 9vw 28vw 9vw 9vw 9vw 9vw 9vw 9vw 9vw;
  }
}

@media screen and (max-width: 760px) {
  .grid-container-navbar {
    grid-template-columns: 11vw 12vw 11vw 11vw 11vw 11vw 11vw 11vw 11vw;
  }
}

@media screen and (max-width: 640px) {
  .grid-container-navbar {
    grid-template-columns: 12vw 4vw 12vw 12vw 12vw 12vw 12vw 12vw 12vw;
  }
}

@media screen and (max-width: 580px) {
  .grid-container-navbar {
    grid-template-columns: 12vw 0vw 12vw 12vw 12vw 12vw 12vw 12vw 12vw;
  }
}


.grid-item-navbar {
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.grid-item-navbar-spacer {
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.grid-item-navbar:visited {
  background-color: white;
}
  
.grid-item-navbar:hover {
  background-color: white;
}

.grid-item-navbar:active {
  background-color: white;
}


</style>
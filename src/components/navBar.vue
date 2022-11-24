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
    <div class = "grid-item-navbar dropdown" style = "padding: 1vh .5vw 1vh .5vw; text-align: center; float: right">
      <span>
        <img src = "../assets/navbar/shipper.png" style="height: 3.5vh; width 3.5vh; margin: .5vh" v-on:click = "checkURL">
        <div style="font-size: .75em">
          SHIPPER
        </div>
        <div class="dropdown-content" style="font-size: .75em">
          <router-link to = "/shipper">
            NEW SHIPPER
          </router-link>
          <router-link to = "/shipperEdit">
            EDIT SHIPPER
          </router-link>
        </div>
      </span>
    </div>
    <div class = "grid-item-navbar dropdown" style = "padding: 1vh .5vw 1vh .5vw; text-align: center; float: right">
      <img src = "../assets/navbar/consignee2.png" style="height: 4vh; width 4vh; margin-top: .25vh; margin-bottom: .25vh; margin-left: .25vh; margin-right: .25vh">
      <div style="font-size: .75em">
        CONSIGNEE
      </div>
      <div class="dropdown-content" style="font-size: .75em">
        <router-link to = "/consignee">
          NEW CONSIGNEE
        </router-link>
        <router-link to = "/editConsignee">
          EDIT CONSIGNEE
        </router-link>
      </div>
    </div>
    <div class = "grid-item-navbar dropdown" style = "padding: 1vh .5vw 1vh .5vw; text-align: center; float: right">
      <img src = "../assets/navbar/carrier.png" style="height: 3.5vh; width 3.5vh; margin: .5vh">
      <div style="font-size: .75em">
        CARRIER
      </div>
      <div class="dropdown-content" style="font-size: .75em">
        <router-link to = "/carrier">
          NEW CARRIER
        </router-link>
        <router-link to = "/editCarrier">
          EDIT CARRIER
        </router-link>
      </div>
    </div>
        <div class = "grid-item-navbar dropdown" style = "padding: 1vh .5vw 1vh .5vw; text-align: center; float: right">
      <div>
        <img src = "../assets/navbar/shipment4.png" style="height: 4vh; width 4vh; margin: .25vh; transform: scaleX(-1);">
      </div>
      <div style="font-size: .75em">
        SHIPMENT
      </div>
      <div class="dropdown-content" style="font-size: .75em">
        <router-link to = "/shipment">
          NEW SHIPMENT
        </router-link>
        <router-link to = "/editShipment">
          EDIT SHIPMENT
        </router-link>
      </div>
    </div>
    <div class = "grid-item-navbar dropdown" style = "padding: 1vh .5vw 1vh .5vw; text-align: center; float: right">
      <img src = "../assets/navbar/airWaybill.png" style="height: 3.5vh; width 3.5vh; margin: .5vh">
      <div style="font-size: .75em">
        AIR WAYBILL
      </div>
      <div class="dropdown-content" style="font-size: .75em">
        <router-link to = "/airWaybill">
          NEW AIR WAYBILL
        </router-link>
        <router-link to = "/editAirWaybill">
          EDIT AIR WAYBILL
        </router-link>
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
  /* background: rgba(0,0,0,.1); */
  background: #e9e9e9;
  grid-template-columns: 6vw 52vw 6vw 6vw 6vw 6vw 6vw 6vw 6vw;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,.2);
  padding: 4px 4px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #dedede}

.dropdown:hover .dropdown-content {
  display: block;
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
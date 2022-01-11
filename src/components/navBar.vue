<template>
  <div class = "grid-container-navbar">
    <div>
      <img src = "../assets/logo.png" class = ".grid-item-navbar" style="height: 6vh; width 6vh; margin: .75vh">
    </div>
    <div class = "grid-item-navbar" style = "padding: 1vh .5vw 1vh .5vw; text-align: center; float: right">
      <div>
        <img src = "../assets/navbar/shipper.png" style="height: 3.5vh; width 3.5vh; margin: .5vh">
      </div>
      <div style="font-size: .75em">
        SHIPPER
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
  width: 100vw;
  justify-content: center;
  grid-template-columns: 52vw 12vw 12vw 12vw 12vw;
  background: rgba(0,0,0,.1);
}

.grid-item-navbar {
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
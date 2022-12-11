<template>
  <div>
    <h2 
      style="
        text-align: left; 
        padding-left: 37vw; 
        text-decoration: underline; 
        text-underline-position:under;
        font-family: Verdana;"
        >SHIPPER</h2>
    <center>
      <div class="grid-container-shipper">
        <div class="grid-item" style="padding-top: 4vh">
          <a href = "#/shipperNew">
            <img src="../assets/shipper/addItem.svg" style="width: 9vh; height: 9vh">
          </a>
          <h3>NEW SHIPPER</h3>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh;">
          
        </div>

        <div class="grid-item">
          <a href = "#/shipperEdit">
            <img src="../assets/shipper/list.png" style="width: 7vh; height: 7vh">
          </a>
          <h3>SELECT FROM LIST</h3>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh;">
          
        </div>
      </div>
      <div>
          <input 
            type="submit" 
            value="Home" 
            v-on:click="backToHome" 
            style="
              margin-left: 21vw; 
              margin-top: 2vw; 
              padding: .3vh .5vh .3vh .5vh;"/>
        </div>
    </center>
  </div>
</template>

<script> 
  export default {
    data: () => ({
      userName: '',
      password: '',
    }),
    methods: {
      backToHome: function() {
        this.$router.push("/home")
      }
    }
  }
</script>

<style>
.grid-container-shipper {
  display: grid;
  width: 20vw;
  justify-content: center;
  grid-template-columns: 20vw;
  grid-template-rows: auto auto;
  padding: 1.2vh;
  border: 1px solid rgba(0, 0, 0, 0.8);
  border-radius: 4px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
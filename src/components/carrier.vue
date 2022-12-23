<template>
  <div>
    <h2 
      style="
        text-align: left; 
        padding-left: 37vw; 
        text-decoration: underline; 
        text-underline-position:under;
        font-family: Verdana;"
        >CARRIER</h2>
    <center>
      <div class="grid-container-shipper">
        <div class="grid-item" style="padding-top: 4vh">
          <a href = "#/carrierNew">
            <img src="../assets/shipper/addItem.svg" style="width: 9vh; height: 9vh">
          </a>
          <h3>NEW CARRIER</h3>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh;">
          
        </div>

        <div class="grid-item">
          <a href = "#/carrierEdit">
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
        if(confirm("Reset Air Waybill data and start with blank template?")) {
          const payload = {
            carrierFirstName: "",
            carrierMiddleName: "",
            carrierLastName: "",
            carrierCompanyName: "",
            carrierStreetAddress1: "",
            carrierStreetAddress2: "",
            carrierCity: "",
            carrierStateUSA: ""
          }

          this.$store.commit("setCarrierData", payload)
          alert("Carrier data for this Air Waybill has been cleared.")
        }
        else {
          alert("Retaining Carrier data....")
        }
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
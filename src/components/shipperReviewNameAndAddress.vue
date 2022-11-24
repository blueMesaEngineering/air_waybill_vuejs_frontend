<template>
  <div>
    <h2 
      style="
        text-align: left; 
        padding-left: 9vw; 
        text-decoration: underline; 
        text-underline-position:under;
        font-family: Verdana;"
        >Review Shipper's Name and Address</h2>
    <center>
      <div class="grid-container-name-and-address">
        <div class="grid-item">
          <h3>Name</h3>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh;">
          <input 
            type = "text" 
            :value = "this.$store.getters.shipperFirstName"
            class = "input-field-item"
            disabled/>
            <!-- {{this.$store.state.shipper.name.firstName}} -->
        </div>
        <div class="grid-item" style="padding-top: 1.75vh;">
          <input 
            type = "text" 
            :value = "this.$store.getters.shipperMiddleName"
            class = "input-field-item"
            disabled/>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh;">
          <input 
            type = "text" 
            :value = "this.$store.getters.shipperLastName"
            class = "input-field-item"
            disabled/>
        </div>        
        <div class="grid-item" style="grid-row-start: 2;">
          <h3>Company Name</h3>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 2; grid-column-start: 2; grid-column-end: 5">
          <input 
            type = "text" 
            :value = "this.$store.getters.shipperCompanyName"
            class = "input-field-item"
            disabled
            style="width: 53vw;"/>
        </div>

        <div class="grid-item" style="grid-row-start: 3;">
          <h3>Street Address 1</h3>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 3; grid-column-start: 2; grid-column-end: 5">
          <input 
            type = "text" 
            :value = "this.$store.getters.shipperStreetAddress1"
            class = "input-field-item"
            disabled
            style="width: 53vw;"/>
        </div>

        <div class="grid-item" style="grid-row-start: 4;">
          <h3>Street Address 2</h3>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 4; grid-column-start: 2; grid-column-end: 5">
          <input 
            type = "text" 
            :value = "this.$store.getters.shipperStreetAddress2"
            class = "input-field-item"
            disabled
            style="width: 53vw;"/>
        </div>

        <div class="grid-item" style="grid-row-start: 5;">
          <h3>City</h3>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 5; grid-column-start: 2; grid-column-end: 5">
          <input 
            type = "text" 
            :value = "this.$store.getters.shipperCity"
            class = "input-field-item"
            disabled
            style="width: 53vw;"/>
        </div>

        <div class="grid-item" style="grid-row-start: 6;">
          <h3>State</h3>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 6; grid-column-start: 2; grid-column-end: 5">
          <input 
            type = "text" 
            :value = "this.$store.getters.shipperStateUSA"
            class = "input-field-item"
            disabled
            style="width: 53vw;"/>
        </div>
      </div>
    </center>
    
      <div align = "right">
        <input 
          type="submit" 
          value="Edit" 
          v-on:click="editShipperNameAddress" 
          style="
            margin-right: 1vw; 
            margin-top: 2vw; 
            padding: .3vh .5vh .3vh .5vh;"/>

        <input 
          type="submit" 
          value="Submit" 
          v-on:click="submit" 
          style="
            margin-right: 9vw; 
            margin-top: 2vw; 
            padding: .3vh .5vh .3vh .5vh;"/>
      </div>
  </div>
</template>

<script> 
  import axios from "axios";
  
  export default {
    data: () => ({
      shipperFirstName: '',
      shipperMiddleName: '',
      shipperLastName: '',
      shipperCompanyName: '',
      shipperStreetAddress1: '',
      shipperStreetAddress2: '',
      shipperCity: '',
      shipperStateUSA: '',
    }),
    
    methods: {
     
      populateOnLoad: function() {
        console.log("Entering populateOnLoad")
        console.log(this.$store.state.getters.shipperFirstName + " " + this.$store.state.getters.shipperMiddleName + " " + this.$store.state.getters.shipperLastName + " " + this.$store.state.getters.shipperCompanyName + " " + this.$store.state.getters.shipperStreetAddress1 + " " + this.$store.state.getters.shipperStreetAddress2 + " " + this.$store.state.getters.shipperCity + " " + this.$store.state.getters.shipperStateUSA)

        this.shipperFirstName = this.$store.state.shipper.name.shipperFirstName;
        this.shipperMiddleName = this.$store.state.shipper.name.shipperMiddleName;
        this.shipperLastName = this.$store.state.shipper.name.shipperLastName;
        this.shipperCompanyName = this.$store.state.shipper.name.shipperCompanyName;
        this.shipperStreetAddress1 = this.$store.state.shipper.address.shipperStreetAddress1;
        this.shipperStreetAddress2 = this.$store.state.shipper.address.shipperStreetAddress2;
        this.shipperCity = this.$store.state.shipper.address.shipperCity;
        this.shipperStateUSA = this.$store.state.shipper.address.shipperStateUSA;

        console.log("Leaving populateOnLoad")
      },

      editShipperNameAddress: function() {
        document.getElementById('editShipperNameAddress').hidden = true;
        document.getElementById('doneEditShipperNameAddress').hidden = false;
        document.getElementById('submitShipperNameAddress').hidden = true;
        document.getElementById('deleteShipper').hidden = true;

        document.getElementById('shipperFirstName').disabled = false;
        document.getElementById('shipperMiddleName').disabled = false;
        document.getElementById('shipperLastName').disabled = false;
        document.getElementById('shipperCompanyName').disabled = false;
        document.getElementById('shipperStreetAddress1').disabled = false;
        document.getElementById('shipperStreetAddress2').disabled = false;
        document.getElementById('shipperCity').disabled = false;
        document.getElementById('shipperStateUSA').disabled = false;
      },

      doneEditShipperNameAddress: function() {
        document.getElementById('editShipperNameAddress').hidden = false;
        document.getElementById('doneEditShipperNameAddress').hidden = true;
        document.getElementById('submitShipperNameAddress').hidden = false;
        document.getElementById('deleteShipper').hidden = false;

        document.getElementById('shipperFirstName').disabled = true;
        document.getElementById('shipperMiddleName').disabled = true;
        document.getElementById('shipperLastName').disabled = true;
        document.getElementById('shipperCompanyName').disabled = true;
        document.getElementById('shipperStreetAddress1').disabled = true;
        document.getElementById('shipperStreetAddress2').disabled = true;
        document.getElementById('shipperCity').disabled = true;
        document.getElementById('shipperStateUSA').disabled = true;
      },

      submit: function() {
        console.log(this.$store.getters.shipperFirstName)
        // console.log(this.$store.state.getters.shipperFirstName + " " + this.$store.state.getters.shipperMiddleName + " " + this.$store.state.getters.shipperLastName + " " + this.$store.state.getters.shipperCompanyName + " " + this.$store.state.getters.shipperStreetAddress1 + " " + this.$store.state.getters.shipperStreetAddress2 + " " + this.$store.state.getters.shipperCity + " " + this.$store.state.getters.shipperStateUSA)

        // var saveShipper;

        if (confirm("Would you like to save this shipper to the database for future use?") == true) {
          axios({
            method: 'post',
            url: 'http://127.0.0.1:5000/api/shippers',
            data: {
              'shipperFirstName': this.$store.getters.shipperFirstName,
              'shipperMiddleName': this.$store.getters.shipperMiddleName,
              'shipperLastName': this.$store.getters.shipperLastName,
              'shipperCompanyName': this.$store.getters.shipperCompanyName,
              'shipperStreetAddress1': this.$store.getters.shipperStreetAddress1,
              'shipperStreetAddress2': this.$store.getters.shipperStreetAddress2,
              'shipperCity': this.$store.getters.shipperCity,
              'shipperStateUSA': this.$store.getters.shipperStateUSA
            }
          })

          alert("Shipper saved to database.")
        }
        else {
          alert("Shipper data has been discarded.")
        }

        this.$router.push('/consignee')
      },

      // editShipperNameAddress: function() {
        
      //   this.$router.push('/shipper')
      // }
    },

    mounted: function() {
        console.log("shipperReviewNameAndAddress component mounted.")
        // this.populateOnLoad;
      },

  }
</script>

<style>
.grid-container-name-and-address {
  display: grid;
  width: 80vw;
  justify-content: center;
  grid-template-columns: 20vw 20vw 20vw 20vw;
  grid-template-rows: auto auto;
  padding: 1.2vh;
  border: 1px solid rgba(0, 0, 0, 0.8);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.grid-item {
  /* background-color: rgba(255, 255, 255, 0.8); */
  /* border: 1px solid rgba(0, 0, 0, 0.8); */
  padding: 1vh .5vw 1vh .5vw;
  text-align: center;
  background: #eee;
}
</style>
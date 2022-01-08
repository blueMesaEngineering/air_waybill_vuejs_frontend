<template>
  <div>
   <div>
      <img src = "../assets/logo.png" style="height: 12vh; width 12vh">
    </div>
    <h2 
      style="
        text-align: left; 
        padding-left: 9vw; 
        text-decoration: underline; 
        text-underline-position:under"
        >Review Shipper's Name and Address</h2>
    <center>
      <div class="grid-container-name-and-address">
        <div class="grid-item">
          <h3>Name</h3>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh;">
          <input 
            type = "text" 
            :value = "this.$store.getters.firstName"
            class = "input-field-item"
            disabled/>
            <!-- {{this.$store.state.shipper.name.firstName}} -->
        </div>
        <div class="grid-item" style="padding-top: 1.75vh;">
          <input 
            type = "text" 
            :value = "this.$store.getters.middleName"
            class = "input-field-item"
            disabled/>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh;">
          <input 
            type = "text" 
            :value = "this.$store.getters.lastName"
            class = "input-field-item"
            disabled/>
        </div>        
        <div class="grid-item" style="grid-row-start: 2;">
          <h3>Company Name</h3>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 2; grid-column-start: 2; grid-column-end: 5">
          <input 
            type = "text" 
            :value = "this.$store.getters.companyName"
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
            :value = "this.$store.getters.streetAddress1"
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
            :value = "this.$store.getters.streetAddress2"
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
            :value = "this.$store.getters.city"
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
            :value = "this.$store.getters.stateUSA"
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
      firstName: '',
      middleName: '',
      lastName: '',
      companyName: '',
      streetAddress1: '',
      streetAddress2: '',
      city: '',
      state: '',
    }),
    methods: {
      mounted: function() {
        console.log("shipperReviewNameAndAddress component mounted.")
        this.populateOnLoad;
      },

      populateOnLoad: function() {
        console.log("Entering populateOnLoad")
        console.log(this.$store.state.getters.firstName + " " + this.$store.state.getters.middleName + " " + this.$store.state.getters.lastName + " " + this.$store.state.getters.companyName + " " + this.$store.state.getters.streetAddress1 + " " + this.$store.state.getters.streetAddress2 + " " + this.$store.state.getters.city + " " + this.$store.state.getters.stateUSA)

        this.firstName = this.$store.state.shipper.name.firstName;
        this.middleName = this.$store.state.shipper.name.middleName;
        this.lastName = this.$store.state.shipper.name.lastName;
        this.companyName = this.$store.state.shipper.name.companyName;
        this.streetAddress1 = this.$store.state.shipper.address.streetAddress1;
        this.streetAddress2 = this.$store.state.shipper.address.streetAddress2;
        this.city = this.$store.state.shipper.address.city;
        this.state = this.$store.state.shipper.address.stateUSA;

        console.log("Leaving populateOnLoad")
      },

      submit: function() {
        

        axios({
          method: 'get',
          url: 'http://127.0.0.1:5000/api/shippers',
          data: {
            'firstName': this.$store.getters.firstName,
            'middleName': this.$store.getters.middleName,
            'lastName': this.$store.getters.lastName,
            'companyName': this.$store.getters.companyName,
            'streetAddress1': this.$store.getters.streetAddress1,
            'streetAddress2': this.$store.getters.streetAddress2,
            'city': this.$store.getters.city,
            'state': this.$store.getters.stateUSA
          }
        })
      },

      editShipperNameAddress: function() {
        
        this.$router.push('/shipperName')
      }
    }
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
}

.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  /* border: 1px solid rgba(0, 0, 0, 0.8); */
  padding: 1vh .5vw 1vh .5vw;
  text-align: center;
  background: #eee;
}
</style>
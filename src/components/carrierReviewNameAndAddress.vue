<template>
  <div>
    <h2 
      style="
        text-align: left; 
        padding-left: 9vw; 
        text-decoration: underline; 
        text-underline-position:under;
        font-family: Verdana;"
        >Review Carrier's Name and Address</h2>
    <center>
      <div class="grid-container-name-and-address">
        <div class="grid-item">
          <h3>Name</h3>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh;">
          <input 
            type = "text" 
            :value = "this.$store.getters.carrierFirstName"
            class = "input-field-item"
            disabled/>
            <!-- {{this.$store.state.carrier.name.firstName}} -->
        </div>
        <div class="grid-item" style="padding-top: 1.75vh;">
          <input 
            type = "text" 
            :value = "this.$store.getters.carrierMiddleName"
            class = "input-field-item"
            disabled/>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh;">
          <input 
            type = "text" 
            :value = "this.$store.getters.carrierLastName"
            class = "input-field-item"
            disabled/>
        </div>        
        <div class="grid-item" style="grid-row-start: 2;">
          <h3>Company Name</h3>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 2; grid-column-start: 2; grid-column-end: 5">
          <input 
            type = "text" 
            :value = "this.$store.getters.carrierCompanyName"
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
            :value = "this.$store.getters.carrierStreetAddress1"
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
            :value = "this.$store.getters.carrierStreetAddress2"
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
            :value = "this.$store.getters.carrierCity"
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
            :value = "this.$store.getters.carrierStateUSA"
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
          v-on:click="editCarrierNameAddress" 
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
      carrierFirstName: '',
      carrierMiddleName: '',
      carrierLastName: '',
      carrierCompanyName: '',
      carrierStreetAddress1: '',
      carrierStreetAddress2: '',
      carrierCity: '',
      carrierStateUSA: '',
    }),
    methods: {
      mounted: function() {
        console.log("carrierReviewNameAndAddress component mounted.")
        // this.populateOnLoad;
      },

      populateOnLoad: function() {
        console.log("Entering populateOnLoad")
        console.log(this.$store.state.getters.carrierFirstName + " " + this.$store.state.getters.carrierMiddleName + " " + this.$store.state.getters.carrierLastName + " " + this.$store.state.getters.carrierCompanyName + " " + this.$store.state.getters.carrierStreetAddress1 + " " + this.$store.state.getters.carrierStreetAddress2 + " " + this.$store.state.getters.carrierCity + " " + this.$store.state.getters.carrierStateUSA)

        this.carrierFirstName = this.$store.state.carrier.name.carrierFirstName;
        this.carrierMiddleName = this.$store.state.carrier.name.carrierMiddleName;
        this.carrierLastName = this.$store.state.carrier.name.carrierLastName;
        this.carrierCompanyName = this.$store.state.carrier.name.carrierCompanyName;
        this.carrierStreetAddress1 = this.$store.state.carrier.address.carrierStreetAddress1;
        this.carrierStreetAddress2 = this.$store.state.carrier.address.carrierStreetAddress2;
        this.carrierCity = this.$store.state.carrier.address.carrierCity;
        this.carrierStateUSA = this.$store.state.carrier.address.carrierStateUSA;

        console.log("Leaving populateOnLoad")
      },

      submit: function() {
        console.log(this.$store.getters.carrierFirstName)

        if (confirm("Would you like to save this carrier to the database for future use?") == true) {
          axios({
            method: 'post',
            url: 'http://127.0.0.1:5000/api/carriers',
            data: {
              'carrierFirstName': this.$store.getters.carrierFirstName,
              'carrierMiddleName': this.$store.getters.carrierMiddleName,
              'carrierLastName': this.$store.getters.carrierLastName,
              'carrierCompanyName': this.$store.getters.carrierCompanyName,
              'carrierStreetAddress1': this.$store.getters.carrierStreetAddress1,
              'carrierStreetAddress2': this.$store.getters.carrierStreetAddress2,
              'carrierCity': this.$store.getters.carrierCity,
              'carrierStateUSA': this.$store.getters.carrierStateUSA
            }
          })

          alert("Carrier saved to database.")
        }
        else {
          alert("Carrier data has been discarded.")
        }

        this.$router.push('/airWaybill')
      },

      editCarrierNameAddress: function() {
        
        this.$router.push('/carrier')
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
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 1vh .5vw 1vh .5vw;
  text-align: center;
  background: #eee;
}
</style>
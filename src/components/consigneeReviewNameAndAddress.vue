<template>
  <div>
    <h2 
      style="
        text-align: left; 
        padding-left: 9vw; 
        text-decoration: underline; 
        text-underline-position:under;
        font-family: Verdana;"
        >Review Consignee's Name and Address</h2>
    <center>
      <div class="grid-container-name-and-address">
        <div class="grid-item">
          <h3>Name</h3>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh;">
          <input 
            type = "text" 
            :value = "this.$store.getters.consigneeFirstName"
            class = "input-field-item"
            disabled/>
            <!-- {{this.$store.state.consignee.name.firstName}} -->
        </div>
        <div class="grid-item" style="padding-top: 1.75vh;">
          <input 
            type = "text" 
            :value = "this.$store.getters.consigneeMiddleName"
            class = "input-field-item"
            disabled/>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh;">
          <input 
            type = "text" 
            :value = "this.$store.getters.consigneeLastName"
            class = "input-field-item"
            disabled/>
        </div>        
        <div class="grid-item" style="grid-row-start: 2;">
          <h3>Company Name</h3>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 2; grid-column-start: 2; grid-column-end: 5">
          <input 
            type = "text" 
            :value = "this.$store.getters.consigneeCompanyName"
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
            :value = "this.$store.getters.consigneeStreetAddress1"
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
            :value = "this.$store.getters.consigneeStreetAddress2"
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
            :value = "this.$store.getters.consigneeCity"
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
            :value = "this.$store.getters.consigneeStateUSA"
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
          v-on:click="editConsigneeNameAddress" 
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
      consigneeFirstName: '',
      consigneeMiddleName: '',
      consigneeLastName: '',
      consigneeCompanyName: '',
      consigneeStreetAddress1: '',
      consigneeStreetAddress2: '',
      consigneeCity: '',
      consigneeStateUSA: '',
    }),
    methods: {
      mounted: function() {
        console.log("consigneeReviewNameAndAddress component mounted.")
        // this.populateOnLoad;
      },

      populateOnLoad: function() {
        console.log("Entering populateOnLoad")
        console.log(this.$store.state.getters.firstName + " " + this.$store.state.getters.middleName + " " + this.$store.state.getters.lastName + " " + this.$store.state.getters.companyName + " " + this.$store.state.getters.streetAddress1 + " " + this.$store.state.getters.streetAddress2 + " " + this.$store.state.getters.city + " " + this.$store.state.getters.stateUSA)

        this.consigneeFirstName = this.$store.state.consignee.name.firstName;
        this.consigneeMiddleName = this.$store.state.consignee.name.middleName;
        this.consigneeLastName = this.$store.state.consignee.name.lastName;
        this.consigneeCompanyName = this.$store.state.consignee.name.companyName;
        this.consigneeStreetAddress1 = this.$store.state.consignee.address.streetAddress1;
        this.consigneeStreetAddress2 = this.$store.state.consignee.address.streetAddress2;
        this.consigneeCity = this.$store.state.consignee.address.city;
        this.consigneeStateUSA = this.$store.state.consignee.address.stateUSA;

        console.log("Leaving populateOnLoad")
      },

      submit: function() {

        if (confirm("Would you like to save this consignee to the database for future use?") == true) {
          axios({
            method: 'post',
            url: 'http://127.0.0.1:5000/api/consignees',
            data: {
              'consigneeFirstName': this.$store.getters.consigneeFirstName,
              'consigneeMiddleName': this.$store.getters.consigneeMiddleName,
              'consigneeLastName': this.$store.getters.consigneeLastName,
              'consigneeCompanyName': this.$store.getters.consigneeCompanyName,
              'consigneeStreetAddress1': this.$store.getters.consigneeStreetAddress1,
              'consigneeStreetAddress2': this.$store.getters.consigneeStreetAddress2,
              'consigneeCity': this.$store.getters.consigneeCity,
              'consigneeStateUSA': this.$store.getters.consigneeStateUSA
            }
          })

          alert("Consignee saved to database.")
        }
        else {
          alert("Consignee data has been discarded.")
        }

        this.$router.push('/airWaybill')
      },

      editConsigneeNameAddress: function() {
        
        this.$router.push('/consignee')
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
  /* border: 1px solid rgba(0, 0, 0, 0.8); */
  padding: 1vh .5vw 1vh .5vw;
  text-align: center;
  background: #eee;
}

.button {

  background-color: rgba(255, 255, 255, 0.8);
  padding: 16px 32px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  opacity: 0.6;
}
</style>
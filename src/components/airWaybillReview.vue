<template>
  <div>
    <!-- Shipper Review Data -->
    <div
      id="shipperData">
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
              id = "shipperFirstName"
              type = "text" 
              v-model = "shipperFirstName"
              class = "input-field-item"
              disabled/>
          </div>
          <div class="grid-item" style="padding-top: 1.75vh;">
            <input 
              id = "shipperMiddleName"
              type = "text" 
              v-model = "shipperMiddleName"
              class = "input-field-item"
              disabled/>
          </div>
          <div class="grid-item" style="padding-top: 1.75vh;">
            <input 
              id = "shipperLastName"
              type = "text" 
              :value = "shipperLastName"
              class = "input-field-item"
              disabled/>
          </div>        
          <div class="grid-item" style="grid-row-start: 2;">
            <h3>Company Name</h3>
          </div>
          <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 2; grid-column-start: 2; grid-column-end: 5">
            <input 
              id = "shipperCompanyName"
              type = "text" 
              :value = "shipperCompanyName"
              class = "input-field-item"
              disabled
              style="width: 53vw;"/>
          </div>

          <div class="grid-item" style="grid-row-start: 3;">
            <h3>Street Address 1</h3>
          </div>
          <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 3; grid-column-start: 2; grid-column-end: 5">
            <input 
              id = "shipperStreetAddress1"
              type = "text" 
              :value = "shipperStreetAddress1"
              class = "input-field-item"
              disabled
              style="width: 53vw;"/>
          </div>

          <div class="grid-item" style="grid-row-start: 4;">
            <h3>Street Address 2</h3>
          </div>
          <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 4; grid-column-start: 2; grid-column-end: 5">
            <input 
              id = "shipperStreetAddress2"
              type = "text" 
              :value = "shipperStreetAddress2"
              class = "input-field-item"
              disabled
              style="width: 53vw;"/>
          </div>

          <div class="grid-item" style="grid-row-start: 5;">
            <h3>City</h3>
          </div>
          <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 5; grid-column-start: 2; grid-column-end: 5">
            <input 
              id = "shipperCity"
              type = "text" 
              :value = "shipperCity"
              class = "input-field-item"
              disabled
              style="width: 53vw;"/>
          </div>

          <div class="grid-item" style="grid-row-start: 6;">
            <h3>State</h3>
          </div>
          <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 6; grid-column-start: 2; grid-column-end: 5">
            <input 
              id = "shipperStateUSA"
              type = "text" 
              :value = "shipperStateUSA"
              class = "input-field-item"
              disabled
              style="width: 53vw;"/>
          </div>
        </div>
      </center>
      
        <div align = "right">
          <input 
            id = "doneEditShipperNameAddress"
            type="submit" 
            value="Done" 
            v-on:click="doneEditShipperNameAddress"
            hidden
            style="
              margin-right: 1vw; 
              margin-top: 2vw; 
              padding: .3vh .5vh .3vh .5vh;"/>

          <input 
            id = "editShipperNameAddress"
            type="submit" 
            value="Edit" 
            v-on:click="editShipperNameAddress"
            style="
              margin-right: 1vw; 
              margin-top: 2vw; 
              padding: .3vh .5vh .3vh .5vh;"/>

          <input 
            id = "submitShipperNameAddress"
            type="submit" 
            value="Next" 
            v-on:click="submitShipperNameAddress"
            style="
              margin-right: 9vw; 
              margin-top: 2vw; 
              padding: .3vh .5vh .3vh .5vh;"/>
        </div>
    </div>

    <!-- Consignee Review Data -->
    <div
      id="consigneeData"
      hidden
      >
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
              id = "consigneeFirstName"
              type = "text" 
              :value = "consigneeFirstName"
              class = "input-field-item"
              disabled/>
          </div>
          <div class="grid-item" style="padding-top: 1.75vh;">
            <input 
              id = "consigneeMiddleName"
              type = "text" 
              :value = "consigneeMiddleName"
              class = "input-field-item"
              disabled/>
          </div>
          <div class="grid-item" style="padding-top: 1.75vh;">
            <input 
              id = "consigneeLastName"
              type = "text" 
              :value = "consigneeLastName"
              class = "input-field-item"
              disabled/>
          </div>        
          <div class="grid-item" style="grid-row-start: 2;">
            <h3>Company Name</h3>
          </div>
          <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 2; grid-column-start: 2; grid-column-end: 5">
            <input 
              id = "consigneeCompanyName"
              type = "text" 
              :value = "consigneeCompanyName"
              class = "input-field-item"
              disabled
              style="width: 53vw;"/>
          </div>

          <div class="grid-item" style="grid-row-start: 3;">
            <h3>Street Address 1</h3>
          </div>
          <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 3; grid-column-start: 2; grid-column-end: 5">
            <input 
              id = "consigneeStreetAddress1"
              type = "text" 
              :value = "consigneeStreetAddress1"
              class = "input-field-item"
              disabled
              style="width: 53vw;"/>
          </div>

          <div class="grid-item" style="grid-row-start: 4;">
            <h3>Street Address 2</h3>
          </div>
          <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 4; grid-column-start: 2; grid-column-end: 5">
            <input 
              id = consigneeStreetAddress2
              type = "text" 
              :value = "consigneeStreetAddress2"
              class = "input-field-item"
              disabled
              style="width: 53vw;"/>
          </div>

          <div class="grid-item" style="grid-row-start: 5;">
            <h3>City</h3>
          </div>
          <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 5; grid-column-start: 2; grid-column-end: 5">
            <input 
              id = consigneeCity
              type = "text" 
              :value = "consigneeCity"
              class = "input-field-item"
              disabled
              style="width: 53vw;"/>
          </div>

          <div class="grid-item" style="grid-row-start: 6;">
            <h3>State</h3>
          </div>
          <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 6; grid-column-start: 2; grid-column-end: 5">
            <input 
              id = consigneeStateUSA
              type = "text" 
              :value = "consigneeStateUSA"
              class = "input-field-item"
              disabled
              style="width: 53vw;"/>
          </div>
        </div>
      </center>
      
        <div align = "right">
          <input 
            id = "doneEditConsigneeNameAddress"
            type="submit" 
            value="Done" 
            v-on:click="doneEditConsigneeNameAddress"
            hidden
            style="
              margin-right: 1vw; 
              margin-top: 2vw; 
              padding: .3vh .5vh .3vh .5vh;"/>

          <input 
            id = "editConsigneeNameAddress"
            type="submit" 
            value="Edit" 
            v-on:click="editConsigneeNameAddress"
            style="
              margin-right: 1vw; 
              margin-top: 2vw; 
              padding: .3vh .5vh .3vh .5vh;"/>

          <input 
            id = "submitConsigneeNameAddress"
            type="submit" 
            value="Next" 
            v-on:click="submitConsigneeNameAddress"
            style="
              margin-right: 9vw; 
              margin-top: 2vw; 
              padding: .3vh .5vh .3vh .5vh;"/>
        </div>
    </div>
    
    <!-- Carrier Review Data -->

    <div
      id="carrierData"
      hidden
      >
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
              id = "carrierFirstName"
              type = "text" 
              :value = "carrierFirstName"
              class = "input-field-item"
              disabled/>
          </div>
          <div class="grid-item" style="padding-top: 1.75vh;">
            <input 
              id = "carrierMiddleName"
              type = "text" 
              :value = "carrierMiddleName"
              class = "input-field-item"
              disabled/>
          </div>
          <div class="grid-item" style="padding-top: 1.75vh;">
            <input 
              id = "carrierLastName"
              type = "text" 
              :value = "carrierLastName"
              class = "input-field-item"
              disabled/>
          </div>        
          <div class="grid-item" style="grid-row-start: 2;">
            <h3>Company Name</h3>
          </div>
          <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 2; grid-column-start: 2; grid-column-end: 5">
            <input 
              id = "carrierCompanyName"
              type = "text" 
              :value = "carrierCompanyName"
              class = "input-field-item"
              disabled
              style="width: 53vw;"/>
          </div>

          <div class="grid-item" style="grid-row-start: 3;">
            <h3>Street Address 1</h3>
          </div>
          <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 3; grid-column-start: 2; grid-column-end: 5">
            <input 
              id = "carrierStreetAddress1"
              type = "text" 
              :value = "carrierStreetAddress1"
              class = "input-field-item"
              disabled
              style="width: 53vw;"/>
          </div>

          <div class="grid-item" style="grid-row-start: 4;">
            <h3>Street Address 2</h3>
          </div>
          <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 4; grid-column-start: 2; grid-column-end: 5">
            <input 
              id = "carrierStreetAddress2"
              type = "text" 
              :value = "carrierStreetAddress2"
              class = "input-field-item"
              disabled
              style="width: 53vw;"/>
          </div>

          <div class="grid-item" style="grid-row-start: 5;">
            <h3>City</h3>
          </div>
          <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 5; grid-column-start: 2; grid-column-end: 5">
            <input 
              id = "carrierCity"
              type = "text" 
              :value = "carrierCity"
              class = "input-field-item"
              disabled
              style="width: 53vw;"/>
          </div>

          <div class="grid-item" style="grid-row-start: 6;">
            <h3>State</h3>
          </div>
          <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 6; grid-column-start: 2; grid-column-end: 5">
            <input 
              id = "carrierStateUSA"
              type = "text" 
              :value = "carrierStateUSA"
              class = "input-field-item"
              disabled
              style="width: 53vw;"/>
          </div>
        </div>
      </center>
      
        <div align = "right">
          <input 
            id = "doneEditCarrierNameAddress"
            type="submit" 
            value="Done" 
            v-on:click="doneEditCarrierNameAddress"
            hidden
            style="
              margin-right: 1vw; 
              margin-top: 2vw; 
              padding: .3vh .5vh .3vh .5vh;"/>

          <input 
            id = "editCarrierNameAddress"
            type="submit" 
            value="Edit" 
            v-on:click="editCarrierNameAddress"
            style="
              margin-right: 1vw; 
              margin-top: 2vw; 
              padding: .3vh .5vh .3vh .5vh;"/>

          <input 
            id = "submitCarrierNameAddress"
            type="submit" 
            value="Submit" 
            v-on:click="submit"
            style="
              margin-right: 9vw; 
              margin-top: 2vw; 
              padding: .3vh .5vh .3vh .5vh;"/>
        </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    data: () => ({
      serialNumberAWBPDF: '',
      shipperFirstName: '',
      shipperMiddleName: '',
      shipperLastName: '',
      shipperCompanyName: '',
      shipperStreetAddress1: '',
      shipperStreetAddress2: '',
      shipperCity: '',
      shipperStateUSA: '',
      consigneeFirstName: '',
      consigneeMiddleName: '',
      consigneeLastName: '',
      consigneeCompanyName: '',
      consigneeStreetAddress1: '',
      consigneeStreetAddress2: '',
      consigneeCity: '',
      consigneeStateUSA: '',
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

      editShipperNameAddress: function() {
        document.getElementById('editShipperNameAddress').hidden = true;
        document.getElementById('doneEditShipperNameAddress').hidden = false;
        document.getElementById('submitShipperNameAddress').hidden = true;

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

        document.getElementById('shipperFirstName').disabled = true;
        document.getElementById('shipperMiddleName').disabled = true;
        document.getElementById('shipperLastName').disabled = true;
        document.getElementById('shipperCompanyName').disabled = true;
        document.getElementById('shipperStreetAddress1').disabled = true;
        document.getElementById('shipperStreetAddress2').disabled = true;
        document.getElementById('shipperCity').disabled = true;
        document.getElementById('shipperStateUSA').disabled = true;
      },

      submitShipperNameAddress: function() {

        this.shipperFirstName = document.getElementById('shipperFirstName').value
        this.shipperMiddleName = document.getElementById('shipperMiddleName').value
        this.shipperLastName = document.getElementById('shipperLastName').value
        this.shipperCompanyName = document.getElementById('shipperCompanyName').value
        this.shipperStreetAddress1 = document.getElementById('shipperStreetAddress1').value
        this.shipperStreetAddress2 = document.getElementById('shipperStreetAddress2').value
        this.shipperCity = document.getElementById('shipperCity').value
        this.shipperStateUSA = document.getElementById('shipperStateUSA').value

        console.log("Shipper store data has been committed.")

        document.getElementById('shipperData').hidden = true;
        document.getElementById('consigneeData').hidden = false
      },

      editConsigneeNameAddress: function() {
        document.getElementById('editConsigneeNameAddress').hidden = true;
        document.getElementById('doneEditConsigneeNameAddress').hidden = false;
        document.getElementById('submitConsigneeNameAddress').hidden = true;

        document.getElementById('consigneeFirstName').disabled = false;
        document.getElementById('consigneeMiddleName').disabled = false;
        document.getElementById('consigneeLastName').disabled = false;
        document.getElementById('consigneeCompanyName').disabled = false;
        document.getElementById('consigneeStreetAddress1').disabled = false;
        document.getElementById('consigneeStreetAddress2').disabled = false;
        document.getElementById('consigneeCity').disabled = false;
        document.getElementById('consigneeStateUSA').disabled = false;
      },

      doneEditConsigneeNameAddress: function() {
        document.getElementById('editConsigneeNameAddress').hidden = false;
        document.getElementById('doneEditConsigneeNameAddress').hidden = true;
        document.getElementById('submitConsigneeNameAddress').hidden = false;

        document.getElementById('consigneeFirstName').disabled = true;
        document.getElementById('consigneeMiddleName').disabled = true;
        document.getElementById('consigneeLastName').disabled = true;
        document.getElementById('consigneeCompanyName').disabled = true;
        document.getElementById('consigneeStreetAddress1').disabled = true;
        document.getElementById('consigneeStreetAddress2').disabled = true;
        document.getElementById('consigneeCity').disabled = true;
        document.getElementById('consigneeStateUSA').disabled = true;
      },

      submitConsigneeNameAddress: function() {

        this.consigneeFirstName = document.getElementById('consigneeFirstName').value
        this.consigneeMiddleName = document.getElementById('consigneeMiddleName').value
        this.consigneeLastName = document.getElementById('consigneeLastName').value
        this.consigneeCompanyName = document.getElementById('consigneeCompanyName').value
        this.consigneeStreetAddress1 = document.getElementById('consigneeStreetAddress1').value
        this.consigneeStreetAddress2 = document.getElementById('consigneeStreetAddress2').value
        this.consigneeCity = document.getElementById('consigneeCity').value
        this.consigneeStateUSA = document.getElementById('consigneeStateUSA').value

        console.log("Shipper store data has been committed.")

        document.getElementById('consigneeData').hidden = true;
        document.getElementById('carrierData').hidden = false
      },

      editCarrierNameAddress: function() {
        document.getElementById('editCarrierNameAddress').hidden = true;
        document.getElementById('doneEditCarrierNameAddress').hidden = false;
        document.getElementById('submitCarrierNameAddress').hidden = true;

        document.getElementById('carrierFirstName').disabled = false;
        document.getElementById('carrierMiddleName').disabled = false;
        document.getElementById('carrierLastName').disabled = false;
        document.getElementById('carrierCompanyName').disabled = false;
        document.getElementById('carrierStreetAddress1').disabled = false;
        document.getElementById('carrierStreetAddress2').disabled = false;
        document.getElementById('carrierCity').disabled = false;
        document.getElementById('carrierStateUSA').disabled = false;
      },

      doneEditCarrierNameAddress: function() {
        document.getElementById('editCarrierNameAddress').hidden = false;
        document.getElementById('doneEditCarrierNameAddress').hidden = true;
        document.getElementById('submitCarrierNameAddress').hidden = false;

        document.getElementById('carrierFirstName').disabled = true;
        document.getElementById('carrierMiddleName').disabled = true;
        document.getElementById('carrierLastName').disabled = true;
        document.getElementById('carrierCompanyName').disabled = true;
        document.getElementById('carrierStreetAddress1').disabled = true;
        document.getElementById('carrierStreetAddress2').disabled = true;
        document.getElementById('carrierCity').disabled = true;
        document.getElementById('carrierStateUSA').disabled = true;
      },

      submitCarrierNameAddress: function() {

        this.carrierFirstName = document.getElementById('carrierFirstName').value
        this.carrierMiddleName = document.getElementById('carrierMiddleName').value
        this.carrierLastName = document.getElementById('carrierLastName').value
        this.carrierCompanyName = document.getElementById('carrierCompanyName').value
        this.carrierStreetAddress1 = document.getElementById('carrierStreetAddress1').value
        this.carrierStreetAddress2 = document.getElementById('carrierStreetAddress2').value
        this.carrierCity = document.getElementById('carrierCity').value
        this.carrierStateUSA = document.getElementById('carrierStateUSA').value

        document.getElementById('carrierData').hidden = true;
        document.getElementById('carrierData').hidden = false
      },

      submit: async function() {

        await axios({
          method: 'post',
          url: 'http://127.0.0.1:5000/api/airWaybills',
          data: {

            'serialNumberAWBPDF': (Math.floor(1000 + Math.random() * 9000)).toString(),

            // Shipper data
            'shipperFirstName': this.shipperFirstName,
            'shipperMiddleName': this.shipperMiddleName,
            'shipperLastName': this.shipperLastName,
            'shipperCompanyName': this.shipperCompanyName,
            'shipperStreetAddress1': this.shipperStreetAddress1,
            'shipperStreetAddress2': this.shipperStreetAddress2,
            'shipperCity': this.shipperCity,
            'shipperStateUSA': this.shipperStateUSA,

            // Consignee data
            'consigneeFirstName': this.consigneeFirstName,
            'consigneeMiddleName': this.consigneeMiddleName,
            'consigneeLastName': this.consigneeLastName,
            'consigneeCompanyName': this.consigneeCompanyName,
            'consigneeStreetAddress1': this.consigneeStreetAddress1,
            'consigneeStreetAddress2': this.consigneeStreetAddress2,
            'consigneeCity': this.consigneeCity,
            'consigneeStateUSA': this.consigneeStateUSA,

            // Carrier data
            'carrierFirstName': this.carrierFirstName,
            'carrierMiddleName': this.carrierMiddleName,
            'carrierLastName': this.carrierLastName,
            'carrierCompanyName': this.carrierCompanyName,
            'carrierStreetAddress1': this.carrierStreetAddress1,
            'carrierStreetAddress2': this.carrierStreetAddress2,
            'carrierCity': this.carrierCity,
            'carrierStateUSA': this.carrierStateUSA
          }
        })

        this.$router.push('/home')
      }
    },

    mounted: function() {
      this.shipperFirstName = this.$store.getters.shipperFirstName,
      this.shipperMiddleName = this.$store.getters.shipperMiddleName
      this.shipperLastName = this.$store.getters.shipperLastName
      this.shipperCompanyName = this.$store.getters.shipperCompanyName
      this.shipperStreetAddress1 = this.$store.getters.shipperStreetAddress1
      this.shipperStreetAddress2 = this.$store.getters.shipperStreetAddress2
      this.shipperCity = this.$store.getters.shipperCity
      this.shipperStateUSA = this.$store.getters.shipperStateUSA
      this.consigneeFirstName = this.$store.getters.consigneeFirstName
      this.consigneeMiddleName = this.$store.getters.consigneeMiddleName
      this.consigneeLastName = this.$store.getters.consigneeLastName
      this.consigneeCompanyName = this.$store.getters.consigneeCompanyName
      this.consigneeStreetAddress1 = this.$store.getters.consigneeStreetAddress1
      this.consigneeStreetAddress2 = this.$store.getters.consigneeStreetAddress2
      this.consigneeCity = this.$store.getters.consigneeCity
      this.consigneeStateUSA = this.$store.getters.consigneeStateUSA
      this.carrierFirstName = this.$store.getters.carrierFirstName
      this.carrierMiddleName = this.$store.getters.carrierMiddleName
      this.carrierLastName = this.$store.getters.carrierLastName
      this.carrierCompanyName = this.$store.getters.carrierCompanyName
      this.carrierStreetAddress1 = this.$store.getters.carrierStreetAddress1
      this.carrierStreetAddress2 = this.$store.getters.carrierStreetAddress2
      this.carrierCity = this.$store.getters.carrierCity
      this.carrierStateUSA = this.$store.getters.carrierStateUSA
      
      console.log("consigneeReviewNameAndAddress component mounted.")
    },
  }
</script>

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
              :value = "this.$store.getters.shipperFirstName"
              v-model = "shipperFirstName"
              class = "input-field-item"
              disabled/>
          </div>
          <div class="grid-item" style="padding-top: 1.75vh;">
            <input 
              id = "shipperMiddleNameID"
              type = "text" 
              :value = "this.$store.getters.shipperMiddleName"
              v-model = "shipperMiddleName"
              class = "input-field-item"
              disabled/>
          </div>
          <div class="grid-item" style="padding-top: 1.75vh;">
            <input 
              id = "shipperLastName"
              type = "text" 
              :value = "this.$store.getters.shipperLastName"
              v-model = "shipperLastName"
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
              :value = "this.$store.getters.shipperCompanyName"
              v-model = "shipperCompanyName"
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
              :value = "this.$store.getters.shipperStreetAddress1"
              v-model = "shipperStreetAddress1"
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
              :value = "this.$store.getters.shipperStreetAddress2"
              v-model = "shipperStreetAddress2"
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
              :value = "this.$store.getters.shipperCity"
              v-model = "shipperCity"
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
              :value = "this.$store.getters.shipperStateUSA"
              v-model = "shipperStateUSA"
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
              :value = "this.$store.getters.consigneeFirstName"
              class = "input-field-item"
              disabled/>
          </div>
          <div class="grid-item" style="padding-top: 1.75vh;">
            <input 
              id = "consigneeMiddleName"
              type = "text" 
              :value = "this.$store.getters.consigneeMiddleName"
              class = "input-field-item"
              disabled/>
          </div>
          <div class="grid-item" style="padding-top: 1.75vh;">
            <input 
              id = "consigneeLastName"
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
              id = "consigneeCompanyName"
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
              id = "consigneeStreetAddress1"
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
              id = consigneeStreetAddress2
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
              id = consigneeCity
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
              id = consigneeStateUSA
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
              :value = "this.$store.getters.carrierFirstName"
              class = "input-field-item"
              disabled/>
          </div>
          <div class="grid-item" style="padding-top: 1.75vh;">
            <input 
              id = "carrierMiddleName"
              type = "text" 
              :value = "this.$store.getters.carrierMiddleName"
              class = "input-field-item"
              disabled/>
          </div>
          <div class="grid-item" style="padding-top: 1.75vh;">
            <input 
              id = "carrierLastName"
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
              id = "carrierCompanyName"
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
              id = "carrierStreetAddress1"
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
              id = "carrierStreetAddress2"
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
              id = "carrierCity"
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
              id = "carrierStateUSA"
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
      mounted: function() {
        console.log("consigneeReviewNameAndAddress component mounted.")
      },

      // populateOnLoad: function() {
      //   console.log("Entering populateOnLoad")
      //   console.log(this.$store.state.getters.firstName + " " + this.$store.state.getters.middleName + " " + this.$store.state.getters.lastName + " " + this.$store.state.getters.companyName + " " + this.$store.state.getters.streetAddress1 + " " + this.$store.state.getters.streetAddress2 + " " + this.$store.state.getters.city + " " + this.$store.state.getters.stateUSA)

      //   this.consigneeFirstName = this.$store.state.consignee.name.firstName;
      //   this.consigneeMiddleName = this.$store.state.consignee.name.middleName;
      //   this.consigneeLastName = this.$store.state.consignee.name.lastName;
      //   this.consigneeCompanyName = this.$store.state.consignee.name.companyName;
      //   this.consigneeStreetAddress1 = this.$store.state.consignee.address.streetAddress1;
      //   this.consigneeStreetAddress2 = this.$store.state.consignee.address.streetAddress2;
      //   this.consigneeCity = this.$store.state.consignee.address.city;
      //   this.consigneeStateUSA = this.$store.state.consignee.address.stateUSA;

      //   console.log("Leaving populateOnLoad")
      // },

      editShipperNameAddress: function() {
        document.getElementById('editShipperNameAddress').hidden = true;
        document.getElementById('doneEditShipperNameAddress').hidden = false;
        document.getElementById('submitShipperNameAddress').hidden = true;

        document.getElementById('shipperFirstName').disabled = false;
        document.getElementById('shipperMiddleNameID').disabled = false;
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
        document.getElementById('shipperMiddleNameID').disabled = true;
        document.getElementById('shipperLastName').disabled = true;
        document.getElementById('shipperCompanyName').disabled = true;
        document.getElementById('shipperStreetAddress1').disabled = true;
        document.getElementById('shipperStreetAddress2').disabled = true;
        document.getElementById('shipperCity').disabled = true;
        document.getElementById('shipperStateUSA').disabled = true;
      },

      submitShipperNameAddress: function() {

        console.log("Before setting shipper payload.")
        var payload = {
          'shipperFirstName': this.$store.getters.shipperFirstName,
          // 'shipperMiddleName': document.getElementById('shipperMiddleNameID'),
          'shipperMiddleName': this.$store.getters.shipperMiddleName,
          'shipperLastName': this.$store.getters.shipperLastName,
          'shipperCompanyName': this.$store.getters.shipperCompanyName,
        }
        console.log("Shipper payload set.")

        this.$store.commit("setShipperName", payload)

        console.log("Shipper store data has been committed.")

        // this.shipperFirstName = '';
        // this.shipperMiddleName = '';
        // this.shipperLastName = '';
        // this.shipperCompanyName = '';

        // payload.shipperFirstName = '';
        // payload.shipperMiddleName = '';
        // payload.shipperLastName = '';
        // payload.shipperCompanyName = '';

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

        console.log("Before setting consignee payload.")
        var payload = {
          'consigneeFirstName': this.$store.getters.consigneeFirstName,
          'consigneeMiddleName': this.$store.getters.consigneeMiddleName,
          'consigneeLastName': this.$store.getters.consigneeLastName,
          'consigneeCompanyName': this.$store.getters.consigneeCompanyName
        }
        console.log("Shipper payload set.")

        this.$store.commit("setConsigneeName", payload)

        console.log("Shipper store data has been committed.")
        
        // this.consigneeFirstName = '';
        // this.consigneeMiddleName = '';
        // this.consigneeLastName = '';
        // this.consigneeCompanyName = '';

        // payload.consigneeFirstName = '';
        // payload.consigneeMiddleName = '';
        // payload.consigneeLastName = '';
        // payload.consigneeCompanyName = '';

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

        const payload = {
          'carrierFirstName': this.$store.getters.carrierFirstName,
          'carrierMiddleName': this.$store.getters.carrierMiddleName,
          'carrierLastName': this.$store.getters.carrierLastName,
          'carrierCompanyName': this.$store.getters.carrierCompanyName,
        }

        this.$store.commit("setCarrierName", payload)

        // this.carrierFirstName = '';
        // this.carrierMiddleName = '';
        // this.carrierLastName = '';
        // this.carrierCompanyName = '';

        // payload.carrierFirstName = '';
        // payload.carrierMiddleName = '';
        // payload.carrierLastName = '';
        // payload.carrierCompanyName = '';

        document.getElementById('carrierData').hidden = true;
        document.getElementById('carrierData').hidden = false
      },

      submit: async function() {

        // await this.$store.commit("airWaybillPOST")

        await axios({
          method: 'post',
          url: 'http://127.0.0.1:5000/api/airWaybills',
          data: {

            // 'serialNumberAWBPDF': (Math.floor(1000 + Math.random() * 9000)).toString(),

            // Shipper data
            'shipperFirstName': this.$store.getters.shipperFirstName,
            'shipperMiddleName': this.$store.getters.shipperMiddleName,
            'shipperLastName': this.$store.getters.shipperLastName,
            'shipperCompanyName': this.$store.getters.shipperCompanyName,
            'shipperStreetAddress1': this.$store.getters.shipperStreetAddress1,
            'shipperStreetAddress2': this.$store.getters.shipperStreetAddress2,
            'shipperCity': this.$store.getters.shipperCity,
            'shipperStateUSA': this.$store.getters.shipperStateUSA,

            // Consignee data
            'consigneeFirstName': this.$store.getters.consigneeFirstName,
            'consigneeMiddleName': this.$store.getters.consigneeMiddleName,
            'consigneeLastName': this.$store.getters.consigneeLastName,
            'consigneeCompanyName': this.$store.getters.consigneeCompanyName,
            'consigneeStreetAddress1': this.$store.getters.consigneeStreetAddress1,
            'consigneeStreetAddress2': this.$store.getters.consigneeStreetAddress2,
            'consigneeCity': this.$store.getters.consigneeCity,
            'consigneeStateUSA': this.$store.getters.consigneeStateUSA,

            // Carrier data
            'carrierFirstName': this.$store.getters.carrierFirstName,
            'carrierMiddleName': this.$store.getters.carrierMiddleName,
            'carrierLastName': this.$store.getters.carrierLastName,
            'carrierCompanyName': this.$store.getters.carrierCompanyName,
            'carrierStreetAddress1': this.$store.getters.carrierStreetAddress1,
            'carrierStreetAddress2': this.$store.getters.carrierStreetAddress2,
            'carrierCity': this.$store.getters.carrierCity,
            'carrierStateUSA': this.$store.getters.carrierStateUSA

            // // Shipper data
            // 'shipperFirstName': document.getElementById('shipperFirstName'),
            // 'shipperMiddleName': document.getElementById('shipperMiddleName'),
            // 'shipperLastName': document.getElementById('shipperLastName'),
            // 'shipperCompanyName': document.getElementById('shipperCompanyName'),
            // 'shipperStreetAddress1': document.getElementById('shipperStreetAddress1'),
            // 'shipperStreetAddress2': document.getElementById('shipperStreetAddress2'),
            // 'shipperCity': document.getElementById('shipperCity'),
            // 'shipperStateUSA': document.getElementById('shipperStateUSA'),

            // // Consignee data
            // 'consigneeFirstName': document.getElementById('consigneeFirstName'),
            // 'consigneeMiddleName': document.getElementById('consigneeMiddleName'),
            // 'consigneeLastName': document.getElementById('consigneeLastName'),
            // 'consigneeCompanyName': document.getElementById('consigneeCompanyName'),
            // 'consigneeStreetAddress1': document.getElementById('consigneeStreetAddress1'),
            // 'consigneeStreetAddress2': document.getElementById('consigneeStreetAddress2'),
            // 'consigneeCity': document.getElementById('consigneeCity'),
            // 'consigneeStateUSA': document.getElementById('consigneeStateUSA'),

            // // Carrier data
            // 'carrierFirstName': document.getElementById('carrierFirstName'),
            // 'carrierMiddleName': document.getElementById('carrierMiddleName'),
            // 'carrierLastName': document.getElementById('carrierLastName'),
            // 'carrierCompanyName': document.getElementById('carrierCompanyName'),
            // 'carrierStreetAddress1': document.getElementById('carrierStreetAddress1'),
            // 'carrierStreetAddress2': document.getElementById('carrierStreetAddress2'),
            // 'carrierCity': document.getElementById('carrierCity'),
            // 'carrierStateUSA': document.getElementById('carrierStateUSA')
          }
        })

        this.$router.push('/home')
      }
    }
  }
</script>

<template>
  <div>
    <!-- Shipper's Name -->
    <div>
      <!-- <input 
        type="submit" 
        value="Get Shippers" 
        v-on:click="getShippers" 
        style="
          margin-right: 27vw; 
          margin-top: 2vw; 
          padding: .3vh .5vh .3vh .5vh;"/> -->
    </div>
    <!-- <div> 
      <select class="form-control" @change="changeShipperDropdown($event)">
        <option value="" selected disabled>Select Shipper</option>
        <option v-for="shipperName in shipperNames" :value = "shipperName.id" :key = "shipperName.id">{{ shipperName }}</option>

      </select>
    </div> -->
    <div>
      <!-- {{this.shippers}} -->
      <!-- {{for i in }} -->
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(shipper, index) in this.shippers" :key="shipper.id">
            <td>{{ index }}</td>
            <td>{{ shipper.id }}</td>
            <td>{{ shipper.shipperFirstName}}</td>
            <td>{{ shipper.shipperLastName}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <p id="parsedJSON">   
      </p>
    </div>
    <div
      id = "shipperName">
    <h2 
      style="
        text-align: left; 
        padding-left: 27vw; 
        text-decoration: underline; 
        text-underline-position:under;
        font-family: Verdana;"
        >Shipper's Name</h2>
    <center>
      <div class="grid-container">
        <div class="grid-item">
          <h3>First Name</h3>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh;">
          <input 
            type = "text" 
            v-model = "shipperFirstName" 
            class = "input-field-item"/>
        </div>

        <div class="grid-item">
          <h3>Middle Name</h3>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh;">
          <input 
            type = "text" 
            v-model = "shipperMiddleName" 
            class = "input-field-item"/>
        </div>

        <div class="grid-item">
          <h3>Last Name</h3>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh;">
          <input 
            type = "text" 
            v-model = "shipperLastName" 
            class = "input-field-item"/>
        </div>

        <div class="grid-item">
          <h3>Company Name</h3>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh;">
          <input 
            type = "text" 
            v-model = "shipperCompanyName" 
            class = "input-field-item"/>
        </div>
      </div>
    </center>

        <div align = "right">
          <input 
            type="submit" 
            value="Next" 
            v-on:click="next" 
            style="
              margin-right: 27vw; 
              margin-top: 2vw; 
              padding: .3vh .5vh .3vh .5vh;"/>
        </div>

    </div>
    <!-- Shipper's Address -->
    <div
      id = "shipperAddress"
      hidden>
      <h2 
        style="
          text-align: left; 
          padding-left: 27vw; 
          text-decoration: underline; 
          text-underline-position:under;
          font-family: Verdana;"
          >Shipper's Address</h2>
      <center>
        <div class="grid-container">
          <div class="grid-item">
            <h3>Street Address 1</h3>
          </div>
          <div class="grid-item" style="padding-top: 1.75vh;">
            <input 
              type = "text" 
              v-model = "shipperStreetAddress1" 
              class = "input-field-item"/>
          </div>

          <div class="grid-item">
            <h3>Street Address 2</h3>
          </div>
          <div class="grid-item" style="padding-top: 1.75vh;">
            <input 
              type = "text" 
              v-model = "shipperStreetAddress2" 
              class = "input-field-item"/>
          </div>

          <div class="grid-item">
            <h3>City</h3>
          </div>
          <div class="grid-item" style="padding-top: 1.75vh;">
            <input 
              type = "text" 
              v-model = "shipperCity" 
              class = "input-field-item"/>
          </div>

          <div class="grid-item">
            <h3>State</h3>
          </div>
          <div class="grid-item" style="padding-top: 1.75vh;">
            <input 
              type = "text" 
              v-model = "shipperStateUSA" 
              class = "input-field-item"/>
          </div>
        </div>
      </center>
      
        <div align = "right">
          <input 
            type="submit" 
            value="Back" 
            v-on:click="back" 
            style="
              margin-right: 1vw; 
              margin-top: 2vw; 
              padding: .3vh .5vh .3vh .5vh;"/>

          <input 
            type="submit" 
            value="Submit" 
            v-on:click="submit" 
            style="
              margin-right: 27vw; 
              margin-top: 2vw; 
              padding: .3vh .5vh .3vh .5vh;"/>
        </div>
    </div>
  </div>

</template>

<script> 
// import func from 'vue-editor-bridge';
import axios from "axios";
// shippersAPI = "http://localhost:5000/api/shippers"
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
      info: '',
      shippers: '',
      parsedJSON: []
    }),
    methods: {
      created: function(){
        console.log("shipper component created.")
        var currentUrl = window.location.pathname;
        console.log(currentUrl);

        window.addEventListener('beforeunload', this.checkForPopulatedFields)

      },
      
      getShippers: function() {
        axios.get('http://localhost:5000/api/shippers')
        .then(response => (this.shippers = response.data))
        // this.shippers = this.info
        // const parsedJSON = JSON.parse(this.info)
        // document.getElementById("parsedJSON").innerHTML = parsedJSON[0];
      },

      parseJSON: function() {
        this.parsedJSON = JSON.parse(this.shippers)
        document.getElementById("parsedJSON").innerHTML = this.parsedJSON[0];
      },

      next: function() {
        console.log(this.shipperFirstName, this.shipperMiddleName, this.shipperLastName, this.shipperCompanyName);
        
        if(this.shipperFirstName == "") {
          alert("The First Name cannot be blank.")
          
          return
        }
        
        if(this.shipperLastName == "") {
          alert("The Last Name cannot be blank.")
          
          return
        }
        
        if(this.shipperCompanyName == "") {
          alert("The Company Name cannot be blank.")
          
          return
        }
        
        document.getElementById('shipperName').hidden = true;
        document.getElementById('shipperAddress').hidden = false
        
      },
      
      back: function() {
        console.log(this.shipperStreetAddress1, this.shipperStreetAddress2, this.shipperCity, this.shipperStateUSA);
        
        document.getElementById('shipperName').hidden = false;
        document.getElementById('shipperAddress').hidden = true;
      },
      
      submit: function() {
        
        if(this.shipperStreetAddress1 == "") {
          alert("The Street Address cannot be blank.")
          
          return
        }
        
        if(this.shipperCity == "") {
          alert("The City cannot be blank.")
          
          return
        }
        
        if(this.shipperStateUSA == "") {
          alert("The State cannot be blank.")
          
          return
        }
        
        console.log(this.shipperStreetAddress1, this.shipperStreetAddress2, this.shipperCity, this.shipperStateUSA);
        
        const payload = {
          shipperFirstName: this.shipperFirstName,
          shipperMiddleName: this.shipperMiddleName,
          shipperLastName: this.shipperLastName,
          shipperCompanyName: this.shipperCompanyName,
          shipperStreetAddress1: this.shipperStreetAddress1,
          shipperStreetAddress2: this.shipperStreetAddress2,
          shipperCity: this.shipperCity,
          shipperStateUSA: this.shipperStateUSA
        }
        
        this.$store.commit("setShipperData", payload)
        
        this.shipperFirstName = '';
        this.shipperMiddleName = '';
        this.shipperLastName = '';
        this.shipperCompanyName = '';
        
        payload.shipperFirstName = '';
        payload.shipperMiddleName = '';
        payload.shipperLastName = '';
        payload.shipperCompanyName = '';
        
        this.shipperStreetAddress1 = '';
        this.shipperStreetAddress2 = '';
        this.shipperCity = '';
        this.shipperStateUSA = '';
        
        payload.shipperStreetAddress1 = '';
        payload.shipperStreetAddress2 = '';
        payload.shipperCity = '';
        payload.shipperStateUSA = '';
        
        this.$router.push('/shipperReviewNameAndAddress')
      },
      
      checkForPopulatedFields: function() {
        if(this.shipperFirstName !== "" ||
        this.shipperMiddleName !== "" ||
        this.shipperLastName !== "" ||
        this.shipperCompanyName !== "" ||
        this.shipperStreetAddress1 !== "" ||
        this.shipperStreetAddress2 !== "" ||
        this.shipperCity !== "" ||
        this.shipperStateUSA !== "")
        return "Data has not been saved.  Changes will be lost."
      },
    },
    mounted: function() {
      console.log("shipper component mounted.")
      axios.get('http://localhost:5000/api/shippers')
      .then(response => (this.shippers = response.data))
    }
  }
</script>

<style>
/* .grid-container {
  display: grid;
  width: 40vw;
  justify-content: center;
  grid-template-columns: 20vw 20vw;
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

.input-field-item {
  width: 13vw;
  border: 1px solid rgba(0, 0, 0, 0.4); 
  padding: 1.5vh 2vw 1.5vh 2vw; 
  margin: 1vh 0vw 1vh 0vw;
} */
</style>
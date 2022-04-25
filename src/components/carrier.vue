<template>
  <div>
    <!-- Carrier's Name -->
    <div
      id = "carrierName">
    <h2 
      style="
        text-align: left; 
        padding-left: 27vw; 
        text-decoration: underline; 
        text-underline-position:under;
        font-family: Verdana;"
        >Carrier's Name</h2>
    <center>
      <div class="grid-container">
        <div class="grid-item">
          <h3>First Name</h3>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh;">
          <input 
            type = "text" 
            v-model = "carrierFirstName" 
            class = "input-field-item"/>
        </div>

        <div class="grid-item">
          <h3>Middle Name</h3>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh;">
          <input 
            type = "text" 
            v-model = "carrierMiddleName" 
            class = "input-field-item"/>
        </div>

        <div class="grid-item">
          <h3>Last Name</h3>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh;">
          <input 
            type = "text" 
            v-model = "carrierLastName" 
            class = "input-field-item"/>
        </div>

        <div class="grid-item">
          <h3>Company Name</h3>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh;">
          <input 
            type = "text" 
            v-model = "carrierCompanyName" 
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
    <!-- Carrier's Address -->
    <div
      id = "carrierAddress"
      hidden>
      <h2 
        style="
          text-align: left; 
          padding-left: 27vw; 
          text-decoration: underline; 
          text-underline-position:under;
          font-family: Verdana;"
          >Carrier's Address</h2>
      <center>
        <div class="grid-container">
          <div class="grid-item">
            <h3>Street Address 1</h3>
          </div>
          <div class="grid-item" style="padding-top: 1.75vh;">
            <input 
              type = "text" 
              v-model = "carrierStreetAddress1" 
              class = "input-field-item"/>
          </div>

          <div class="grid-item">
            <h3>Street Address 2</h3>
          </div>
          <div class="grid-item" style="padding-top: 1.75vh;">
            <input 
              type = "text" 
              v-model = "carrierStreetAddress2" 
              class = "input-field-item"/>
          </div>

          <div class="grid-item">
            <h3>City</h3>
          </div>
          <div class="grid-item" style="padding-top: 1.75vh;">
            <input 
              type = "text" 
              v-model = "carrierCity" 
              class = "input-field-item"/>
          </div>

          <div class="grid-item">
            <h3>State</h3>
          </div>
          <div class="grid-item" style="padding-top: 1.75vh;">
            <input 
              type = "text" 
              v-model = "carrierStateUSA" 
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
      created: function(){
        var currentUrl = window.location.pathname;
        console.log(currentUrl);
      },

      mounted: function() {
        console.log("carrier component mounted.")
      },

      next: function() {
        console.log(this.carrierFirstName, this.carrierMiddleName, this.carrierLastName, this.carrierCompanyName);

        if(this.carrierFirstName == "") {
          alert("The First Name cannot be blank.")

          return
        }

        if(this.carrierLastName == "") {
          alert("The Last Name cannot be blank.")

          return
        }

        if(this.carrierCompanyName == "") {
          alert("The Company Name cannot be blank.")

          return
        }

        document.getElementById('carrierName').hidden = true;
        document.getElementById('carrierAddress').hidden = false

      },

      back: function() {
        console.log(this.carrierStreetAddress1, this.carrierStreetAddress2, this.carrierCity, this.carrierStateUSA);

        document.getElementById('carrierName').hidden = false;
        document.getElementById('carrierAddress').hidden = true;
      },
      
      submit: function() {

        if(this.carrierStreetAddress1 == "") {
          alert("The Street Address cannot be blank.")

          return
        }

        if(this.carrierCity == "") {
          alert("The City cannot be blank.")

          return
        }

        if(this.carrierStateUSA == "") {
          alert("The State cannot be blank.")

          return
        }

        console.log(this.carrierStreetAddress1, this.carrierStreetAddress2, this.carrierCity, this.carrierStateUSA);

        const payload = {
          carrierFirstName: this.carrierFirstName,
          carrierMiddleName: this.carrierMiddleName,
          carrierLastName: this.carrierLastName,
          carrierCompanyName: this.carrierCompanyName,
          carrierStreetAddress1: this.carrierStreetAddress1,
          carrierStreetAddress2: this.carrierStreetAddress2,
          carrierCity: this.carrierCity,
          carrierStateUSA: this.carrierStateUSA
        }

        this.$store.commit("setCarrierData", payload)

        this.carrierFirstName = '';
        this.carrierMiddleName = '';
        this.carrierLastName = '';
        this.carrierCompanyName = '';

        payload.carrierFirstName = '';
        payload.carrierMiddleName = '';
        payload.carrierLastName = '';
        payload.carrierCompanyName = '';

        this.carrierStreetAddress1 = '';
        this.carrierStreetAddress2 = '';
        this.carrierCity = '';
        this.carrierStateUSA = '';

        payload.carrierStreetAddress1 = '';
        payload.carrierStreetAddress2 = '';
        payload.carrierCity = '';
        payload.carrierStateUSA = '';

        this.$router.push('/carrierReviewNameAndAddress')
      },

    }
  }
</script>

<style>
.grid-container {
  display: grid;
  width: 40vw;
  justify-content: center;
  /* grid-template-columns: 22vw 22vw; */
  grid-template-columns: 20vw 20vw;
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

.input-field-item {
  width: 13vw;
  border: 1px solid rgba(0, 0, 0, 0.4); 
  padding: 1.5vh 2vw 1.5vh 2vw; 
  margin: 1vh 0vw 1vh 0vw;
}
</style>
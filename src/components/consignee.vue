<template>
  <div>
    <!-- Consignee's Name -->
    <div
      id = "consigneeName">
    <h2 
      style="
        text-align: left; 
        padding-left: 27vw; 
        text-decoration: underline; 
        text-underline-position:under;
        font-family: Verdana;"
        >Consignee's Name</h2>
    <center>
      <div class="grid-container">
        <div class="grid-item">
          <h3>First Name</h3>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh;">
          <input 
            type = "text" 
            v-model = "consigneeFirstName" 
            class = "input-field-item"/>
        </div>

        <div class="grid-item">
          <h3>Middle Name</h3>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh;">
          <input 
            type = "text" 
            v-model = "consigneeMiddleName" 
            class = "input-field-item"/>
        </div>

        <div class="grid-item">
          <h3>Last Name</h3>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh;">
          <input 
            type = "text" 
            v-model = "consigneeLastName" 
            class = "input-field-item"/>
        </div>

        <div class="grid-item">
          <h3>Company Name</h3>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh;">
          <input 
            type = "text" 
            v-model = "consigneeCompanyName" 
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
    <!-- Consignee's Address -->
    <div
      id = "consigneeAddress"
      hidden>
      <h2 
        style="
          text-align: left; 
          padding-left: 27vw; 
          text-decoration: underline; 
          text-underline-position:under;
          font-family: Verdana;"
          >Consignee's Address</h2>
      <center>
        <div class="grid-container">
          <div class="grid-item">
            <h3>Street Address 1</h3>
          </div>
          <div class="grid-item" style="padding-top: 1.75vh;">
            <input 
              type = "text" 
              v-model = "consigneeStreetAddress1" 
              class = "input-field-item"/>
          </div>

          <div class="grid-item">
            <h3>Street Address 2</h3>
          </div>
          <div class="grid-item" style="padding-top: 1.75vh;">
            <input 
              type = "text" 
              v-model = "consigneeStreetAddress2" 
              class = "input-field-item"/>
          </div>

          <div class="grid-item">
            <h3>City</h3>
          </div>
          <div class="grid-item" style="padding-top: 1.75vh;">
            <input 
              type = "text" 
              v-model = "consigneeCity" 
              class = "input-field-item"/>
          </div>

          <div class="grid-item">
            <h3>State</h3>
          </div>
          <div class="grid-item" style="padding-top: 1.75vh;">
            <input 
              type = "text" 
              v-model = "consigneeStateUSA" 
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
      created: function(){
        var currentUrl = window.location.pathname;
        console.log(currentUrl);
      },

      mounted: function() {
        console.log("consignee component mounted.")
      },

      next: function() {
        console.log(this.consigneeFirstName, this.consigneeMiddleName, this.consigneeLastName, this.consigneeCompanyName);

        if(this.consigneeFirstName == "") {
          alert("The First Name cannot be blank.")

          return
        }

        if(this.consigneeLastName == "") {
          alert("The Last Name cannot be blank.")

          return
        }

        if(this.consigneeCompanyName == "") {
          alert("The Company Name cannot be blank.")

          return
        }

        document.getElementById('consigneeName').hidden = true;
        document.getElementById('consigneeAddress').hidden = false

      },

      back: function() {
        console.log(this.consigneeStreetAddress1, this.consigneeStreetAddress2, this.consigneeCity, this.consigneeStateUSA);

        document.getElementById('consigneeName').hidden = false;
        document.getElementById('consigneeAddress').hidden = true;
      },
      
      submit: function() {

        if(this.consigneeStreetAddress1 == "") {
          alert("The Street Address cannot be blank.")

          return
        }

        if(this.consigneeCity == "") {
          alert("The City cannot be blank.")

          return
        }

        if(this.consigneeStateUSA == "") {
          alert("The State cannot be blank.")

          return
        }

        console.log(this.consigneeStreetAddress1, this.consigneeStreetAddress2, this.consigneeCity, this.consigneeStateUSA);

        const payload = {
          consigneeFirstName: this.consigneeFirstName,
          consigneeMiddleName: this.consigneeMiddleName,
          consigneeLastName: this.consigneeLastName,
          consigneeCompanyName: this.consigneeCompanyName,
          consigneeStreetAddress1: this.consigneeStreetAddress1,
          consigneeStreetAddress2: this.consigneeStreetAddress2,
          consigneeCity: this.consigneeCity,
          consigneeStateUSA: this.consigneeStateUSA
        }

        this.$store.commit("setConsigneeData", payload)

        this.consigneeFirstName = '';
        this.consigneeMiddleName = '';
        this.consigneeLastName = '';
        this.consigneeCompanyName = '';

        payload.consigneeFirstName = '';
        payload.consigneeMiddleName = '';
        payload.consigneeLastName = '';
        payload.consigneeCompanyName = '';

        this.consigneeStreetAddress1 = '';
        this.consigneeStreetAddress2 = '';
        this.consigneeCity = '';
        this.consigneeStateUSA = '';

        payload.consigneeStreetAddress1 = '';
        payload.consigneeStreetAddress2 = '';
        payload.consigneeCity = '';
        payload.consigneeStateUSA = '';

        this.$router.push('/consigneeReviewNameAndAddress')
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
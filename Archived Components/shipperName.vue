<template>
  <div>
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
          v-on:click="submit" 
          style="
            margin-right: 27vw; 
            margin-top: 2vw; 
            padding: .3vh .5vh .3vh .5vh;"/>
      </div>
  </div>
</template>

<script> 
  export default {
    data: () => ({
      shipperFirstName: '',
      shipperMiddleName: '',
      shipperLastName: '',
      shipperCompanyName: '',
    }),
    methods: {
      created: function(){
        var currentUrl = window.location.pathname;
        console.log(currentUrl);
      },
      submit: function() {
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

        const payload = {
          shipperFirstName: this.shipperFirstName,
          shipperMiddleName: this.shipperMiddleName,
          shipperLastName: this.shipperLastName,
          shipperCompanyName: this.shipperCompanyName
        }

        this.$store.commit("setShipperName", payload)

        this.shipperFirstName = '';
        this.shipperMiddleName = '';
        this.shipperLastName = '';
        this.shipperCompanyName = '';

        payload.shipperFirstName = '';
        payload.shipperMiddleName = '';
        payload.shipperLastName = '';
        payload.shipperCompanyName = '';

        this.$router.push('/shipperAddress');
      }
    }
  }
</script>

<style>
.grid-container {
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
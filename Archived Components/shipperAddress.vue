<template>
  <div>
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

      <!-- <div>
        <h2>The address entered is <p>{{shipperStreetAddress1}} </p> <p> {{shipperStreetAddress2}}</p> <p> {{shipperCity}}, {{shipperStateUSA}} </p> </h2>
      </div> -->
  </div>
</template>

<script> 
  export default {
    data: () => ({
      shipperStreetAddress1: '',
      shipperStreetAddress2: '',
      shipperCity: '',
      shipperStateUSA: '',
    }),
    methods: {
      mounted: function() {
        console.log("shipperAddress component mounted.")
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
          shipperStreetAddress1: this.shipperStreetAddress1,
          shipperStreetAddress2: this.shipperStreetAddress2,
          shipperCity: this.shipperCity,
          shipperStateUSA: this.shipperStateUSA
        }

        this.$store.commit("setShipperAddress", payload)

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

      back: function() {
        console.log(this.shipperStreetAddress1, this.shipperStreetAddress2, this.shipperCity, this.shipperStateUSA);

        this.$router.push('/shipperName')
      }
    }
  }
</script>

<style>
/* .grid-container {
  display: grid;
  width: 44vw;
  justify-content: center;
  grid-template-columns: 22vw 22vw;
  grid-template-rows: auto auto;
  padding: 1.2vh;
  border: 1px solid rgba(0, 0, 0, 0.8);
}

.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 1vh .5vw 1vh .5vw;
  text-align: center;
  background: #eee;
} */
</style>
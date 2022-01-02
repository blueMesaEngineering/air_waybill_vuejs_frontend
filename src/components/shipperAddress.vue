<template>
  <div>
   <div>
      <img src = "../assets/logo.png" style="height: 12vh; width 12vh">
    </div>
    <h2 
      style="
        text-align: left; 
        padding-left: 27vw; 
        text-decoration: underline; 
        text-underline-position:under"
        >Shipper's Address</h2>
    <center>
      <div class="grid-container">
        <div class="grid-item">
          <h3>Street Address 1</h3>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh;">
          <input 
            type = "text" 
            v-model = "streetAddress1" 
            class = "input-field-item"/>
        </div>

        <div class="grid-item">
          <h3>Street Address 2</h3>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh;">
          <input 
            type = "text" 
            v-model = "streetAddress2" 
            class = "input-field-item"/>
        </div>

        <div class="grid-item">
          <h3>City</h3>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh;">
          <input 
            type = "text" 
            v-model = "city" 
            class = "input-field-item"/>
        </div>

        <div class="grid-item">
          <h3>State</h3>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh;">
          <input 
            type = "text" 
            v-model = "state" 
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
        <h2>The address entered is <p>{{streetAddress1}} </p> <p> {{streetAddress2}}</p> <p> {{city}}, {{state}} </p> </h2>
      </div> -->
  </div>
</template>

<script> 
  export default {
    data: () => ({
      streetAddress1: '',
      streetAddress2: '',
      city: '',
      state: '',
    }),
    methods: {
      mounted: function() {
        console.log("shipperAddress component mounted.")
      },
      
      submit: function() {
        console.log(this.streetAddress1, this.streetAddress2, this.city, this.state);

        const payload = {
          streetAddress1: this.streetAddress1,
          streetAddress2: this.streetAddress2,
          city: this.city,
          state: this.state
        }

        this.$store.commit("setShipperAddress", payload)

        this.streetAddress1 = '';
        this.streetAddress2 = '';
        this.city = '';
        this.state = '';

        payload.streetAddress1 = '';
        payload.streetAddress2 = '';
        payload.city = '';
        payload.state = '';

        this.$router.push('/shipperReviewNameAndAddress')
      },

      back: function() {
        console.log(this.streetAddress1, this.streetAddress2, this.city, this.state);

        this.$router.push('/shipperName')
      }
    }
  }
</script>

<style>
.grid-container {
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
  /* border: 1px solid rgba(0, 0, 0, 0.8); */
  padding: 1vh .5vw 1vh .5vw;
  text-align: center;
  background: #eee;
}
</style>
<template>
  <div>
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
</template>

<script> 
  export default {
    data: () => ({
      consigneeStreetAddress1: '',
      consigneeStreetAddress2: '',
      consigneeCity: '',
      consigneeStateUSA: '',
    }),
    methods: {
      mounted: function() {
        console.log("consigneeAddress component mounted.")
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
          consigneeStreetAddress1: this.consigneeStreetAddress1,
          consigneeStreetAddress2: this.consigneeStreetAddress2,
          consigneeCity: this.consigneeCity,
          consigneeStateUSA: this.consigneeStateUSA
        }

        console.log(payload)

        this.$store.commit("setConsigneeAddress", payload)

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

      back: function() {
        console.log(this.consigneeStreetAddress1, this.consigneeStreetAddress2, this.consigneeCity, this.consigneeStateUSA);

        this.$router.push('/consgineeName')
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
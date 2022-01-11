<template>
  <div>
   <div>
    </div>
    <h2 
      style="
        text-align: left; 
        padding-left: 27vw; 
        text-decoration: underline; 
        text-underline-position:under;
        font-family: Verdana;"
        >Search Shippers</h2>
    <center>
      <div class="grid-container">
        <div class="grid-item">
          <h3>Company Name</h3>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh;">
          <input 
            type = "text" 
            v-model = "companyName"
            class = "input-field-item">
        </div>
      </div>
    </center>
    
      <div align = "right">
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
  import axios from "axios";
  
  export default {
    data: () => ({
      firstName: '',
      middleName: '',
      lastName: '',
      companyName: '',
      streetAddress1: '',
      streetAddress2: '',
      city: '',
      state: '',
    }),
    methods: {
      mounted: function() {
        console.log("shipperReviewNameAndAddress component mounted.")
        this.populateOnLoad;
      },

      submit: async function() {

        const response = await axios({
          method: 'get',
          url: 'http://127.0.0.1:5000/api/shippers',
          params: {
            companyName: this.companyName
          }
        })

        console.log(response)
      },
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
}

.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  /* border: 1px solid rgba(0, 0, 0, 0.8); */
  padding: 1vh .5vw 1vh .5vw;
  text-align: center;
  background: #eee;
}
</style>
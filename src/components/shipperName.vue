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
        >Shipper's Name</h2>
    <center>
      <div class="grid-container">
        <div class="grid-item">
          <h3>First Name</h3>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh;">
          <input 
            type = "text" 
            v-model = "firstName" 
            class = "input-field-item"/>
        </div>

        <div class="grid-item">
          <h3>Middle Name</h3>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh;">
          <input 
            type = "text" 
            v-model = "middleName" 
            class = "input-field-item"/>
        </div>

        <div class="grid-item">
          <h3>Last Name</h3>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh;">
          <input 
            type = "text" 
            v-model = "lastName" 
            class = "input-field-item"/>
        </div>

        <div class="grid-item">
          <h3>Company Name</h3>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh;">
          <input 
            type = "text" 
            v-model = "companyName" 
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

      <!-- <div>
        <h2>The name entered is {{firstName}} {{middleName}} {{lastName}} at the company {{companyName}} </h2>
      </div> -->
  </div>
</template>

<script> 
  export default {
    data: () => ({
      firstName: '',
      middleName: '',
      lastName: '',
      companyName: '',
    }),
    methods: {
      submit: function() {
        console.log(this.firstName, this.middleName, this.lastName, this.companyName);

        this.firstName = '';
        this.middleName = '';
        this.lastName = '';
        this.companyName = '';

        this.$router.push('/shipperAddress');
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

.input-field-item {
  width: 15vw;
  border: 1px solid rgba(0, 0, 0, 0.4); 
  padding: 1.5vh 2vw 1.5vh 2vw; 
  margin: 1vh 0vw 1vh 0vw;
}
</style>
<template>
  <div>
    <h2 
      style="
        text-align: left; 
        padding-left: 27vw; 
        text-decoration: underline;
        text-underline-position:under;
        font-family: Verdana;"
        >Carrier Agent's Name</h2>
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
      carrierFirstName: '',
      carrierMiddleName: '',
      carrierLastName: '',
      carrierCompanyName: '',
    }),
    methods: {
      submit: function() {
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

        const payload = {
          carrierFirstName: this.carrierFirstName,
          carrierMiddleName: this.carrierMiddleName,
          carrierLastName: this.carrierLastName,
          carrierCompanyName: this.carrierCompanyName
        }

        console.log(payload)
        
        this.$store.commit("setCarrierName", payload)

        this.carrierFirstName = '';
        this.carrierMiddleName = '';
        this.carrierLastName = '';
        this.carrierCompanyName = '';

        payload.carrierFirstName = '';
        payload.carrierMiddleName = '';
        payload.carrierLastName = '';
        payload.carrierCompanyName = '';

        this.$router.push('/carrierAddress');
      }
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
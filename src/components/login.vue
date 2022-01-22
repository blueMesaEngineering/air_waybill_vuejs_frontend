<template>
  <div>
    <h2 
      style="
        text-align: left; 
        padding-left: 27vw; 
        text-decoration: underline; 
        text-underline-position:under;
        font-family: Verdana;"
        >Log In</h2>
    <center>
      <div class="grid-container">
        <div class="grid-item">
          <h3>User Name</h3>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh;">
          <input 
            type = "text" 
            v-model = "userName" 
            class = "input-field-item"/>
        </div>

        <div class="grid-item">
          <h3>Password</h3>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh;">
          <input 
            type = "password" 
            v-model = "password" 
            class = "input-field-item"/>
        </div>
      </div>
    </center>
    
      <div align = "right">
        <input 
          type="submit" 
          value="Log In" 
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
      userName: '',
      password: '',
    }),
    methods: {
      submit: function() {
        console.log(this.userName, this.password);

        if(this.userName == "") {
          alert("The User Name cannot be blank.")

          return
        }

        if(this.lastName == "") {
          alert("The Password cannot be blank.")

          return
        }

        const payload = {
          userName: this.userName,
          password: this.password,
        }

        this.$store.commit("setShipperName", payload)

        this.userName = '';
        this.password = '';

        payload.userName = '';
        payload.password = '';

        this.$router.push('/home');
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
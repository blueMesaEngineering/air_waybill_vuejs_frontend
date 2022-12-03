<template>
  <div>
    <h2 
      style="
        text-align: center; 
        padding-left: 0vw; 
        text-decoration: underline; 
        text-underline-position:under;
        font-family: Verdana;"
        >Dashboard Home</h2>
    <center>
      <div class="grid-container-name-and-address">
        <div class="grid-item" style="padding-top: 1.75vh; grid-column-start: 1; grid-column-end: 2">
          Shipper Count
        </div>
        <div class="grid-item" style="padding-top: 1.75vh; grid-column-start: 2; grid-column-end: 3">
          Consignee Count
        </div>
        <div class="grid-item" style="padding-top: 1.75vh; grid-column-start: 3; grid-column-end: 4">
          Carrier Count
        </div>
        <div class="grid-item" style="padding-top: 1.75vh; grid-column-start: 4; grid-column-end: 5">
          Shipment Count
        </div>
      </div>
    </center>
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
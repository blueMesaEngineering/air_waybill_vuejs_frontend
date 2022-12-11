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
      <div class="grid-container-home">
        <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 1; grid-row-end: 2">
          SHIPPER COUNT
        </div>
        <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 2; grid-row-end: 3">
          CONSIGNEE COUNT
        </div>
        <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 3; grid-row-end: 4">
          CARRIER COUNT
        </div>
        <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 4; grid-row-end: 5">
          SHIPMENT COUNT
        </div>
        <div class="grid-item" style="grid-row-start: 1; grid-row-end: 5; grid-column-start: 3; grid-column-end: 4; padding-bottom: 10vh; ">
          <div>
            <a href="#/shipper"><img src="../assets/home/crane.svg" style="height: 10vh; width 10vh; padding-top: 10vh; margin: .5vh" ></a>
          </div>
          <div>
            <h3>
              BUILD AIR WAYBILL
            </h3>
          </div>
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
  border-radius: 4px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.grid-container-home {
  display: grid;
  width: 50vw;
  justify-content: center;
  grid-template-columns: 12vw 12vw 26vw;
  grid-template-rows: auto auto auto auto;
  padding: 1.2vh;
  border: 1px solid rgba(0, 0, 0, 0.8);
  border-radius: 4px;
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
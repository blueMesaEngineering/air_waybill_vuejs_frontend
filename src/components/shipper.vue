<template>
  <div>
    <h2 
      style="
        text-align: left; 
        padding-left: 37vw; 
        text-decoration: underline; 
        text-underline-position:under;
        font-family: Verdana;"
        >Shipper</h2>
    <center>
      <div class="grid-container-shipper">
        <div class="grid-item">
          <a href = "#/shipperNew"><h3>New Shipper</h3></a>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh;">
          
        </div>

        <div class="grid-item">
          <a href = "#/shipperEdit"><h3>Select from List</h3></a>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh;">
          
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
      
    }
  }
</script>

<style>
.grid-container-shipper {
  display: grid;
  width: 20vw;
  justify-content: center;
  grid-template-columns: 20vw;
  grid-template-rows: auto auto;
  padding: 1.2vh;
  border: 1px solid rgba(0, 0, 0, 0.8);
  border-radius: 4px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
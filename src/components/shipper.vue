<template>
  <div>
    <h2 
      style="
        text-align: left; 
        padding-left: 27vw; 
        text-decoration: underline; 
        text-underline-position:under;
        font-family: Verdana;"
        >Shipper</h2>
    <center>
      <div class="grid-container">
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

</style>
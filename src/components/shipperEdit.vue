<template>
  <div>
    <center>
      <h2 
        style="
          text-align: left;
          padding-left: 9vw; 
          text-decoration: underline; 
          text-underline-position:under;
          font-family: Verdana;"
          >Shippers List</h2>
      <table>
        <tbody>
          <tr v-for="(shipper) in this.shippers" :key="shipper.id">
            <div>
              <center>
                <div class="grid-container-name-and-address-shipper-edit">
                  <div class="grid-item">
                    <h3>Name</h3>
                  </div>
                  <div class="grid-item" style="padding-top: 1.75vh;">
                    <input 
                      type = "text" 
                      :value = "shipper.shipperFirstName"
                      class = "input-field-item"
                      disabled/>
                  </div>
                  <div class="grid-item" style="padding-top: 1.75vh;">
                    <input 
                      type = "text" 
                      :value = "shipper.shipperMiddleName"
                      class = "input-field-item"
                      disabled/>
                  </div>
                  <div class="grid-item" style="padding-top: 1.75vh;">
                    <input 
                      type = "text" 
                      :value = "shipper.shipperLastName"
                      class = "input-field-item"
                      disabled/>
                  </div>
                  <div class="grid-item" style="background: white; padding-top: 3.5vh;">
                    <input id="toggle" type="checkbox" style="visibility:hidden">
                      <label for="toggle">
                        [ + ]
                      </label>
                    <!-- </input> -->
                  </div>
                  <!-- <div :id = "shipper.id" class="grid-container-name-and-address-sub-field" style="border: none; padding: 0;">

                    <div class="grid-item" style="grid-row-start: 2;">
                      <h3>Company Name</h3>
                    </div>
                  <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 2; grid-column-start: 2; grid-column-end: 5">
                    <input 
                      type = "text" 
                      :value = "shipper.shipperCompanyName"
                      class = "input-field-item"
                      disabled
                      style="width: 53vw;"/>
                  </div>

                  <div class="grid-item" style="grid-row-start: 3;">
                    <h3>Street Address 1</h3>
                  </div>
                  <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 3; grid-column-start: 2; grid-column-end: 5">
                    <input 
                      type = "text" 
                      :value = "shipper.shipperStreetAddress1"
                      class = "input-field-item"
                      disabled
                      style="width: 53vw;"/>
                  </div>

                  <div class="grid-item" style="grid-row-start: 4;">
                    <h3>Street Address 2</h3>
                  </div>
                  <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 4; grid-column-start: 2; grid-column-end: 5">
                    <input 
                      type = "text" 
                      :value = "shipper.shipperStreetAddress2"
                      class = "input-field-item"
                      disabled
                      style="width: 53vw;"/>
                  </div>

                  <div class="grid-item" style="grid-row-start: 5;">
                    <h3>City</h3>
                  </div>
                  <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 5; grid-column-start: 2; grid-column-end: 5">
                    <input 
                    type = "text" 
                    :value = "shipper.shipperCity"
                    class = "input-field-item"
                    disabled
                    style="width: 53vw;"/>
                  </div>
                  
                  <div class="grid-item" style="grid-row-start: 6;">
                    <h3>State</h3>
                  </div>
                  <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 6; grid-column-start: 2; grid-column-end: 5">
                    <input 
                    type = "text" 
                    :value = "shipper.shipperStateUSA"
                    class = "input-field-item"
                    disabled
                    style="width: 53vw;"/>
                  </div>
                </div> -->
              </div>
              </center>
              
                <!-- <div align = "right">
                  <input 
                    type="submit" 
                    value="Edit" 
                    v-on:click="editShipperNameAddress" 
                    style="
                      margin-right: 1vw; 
                      margin-top: 2vw; 
                      padding: .3vh .5vh .3vh .5vh;"/>

                  <input 
                    type="submit" 
                    value="Submit" 
                    v-on:click="submit" 
                    style="
                      margin-right: 9vw; 
                      margin-top: 2vw; 
                      padding: .3vh .5vh .3vh .5vh;"/>
                </div> -->
            </div>
          </tr>
        </tbody>
      </table>
    </center>
  </div>
</template>

<script> 
  import axios from "axios";
  
  export default {
    data: () => ({
      shipperFirstName: '',
      shipperMiddleName: '',
      shipperLastName: '',
      shipperCompanyName: '',
      shipperStreetAddress1: '',
      shipperStreetAddress2: '',
      shipperCity: '',
      shipperStateUSA: '',
      shippers: '',
    }),
    methods: {
      // mounted: function() {
      //   console.log("shipperReviewNameAndAddress component mounted.")
      //   // this.populateOnLoad;
      // },

      populateOnLoad: function() {
        console.log("Entering populateOnLoad")
        console.log(this.$store.state.getters.shipperFirstName + " " + this.$store.state.getters.shipperMiddleName + " " + this.$store.state.getters.shipperLastName + " " + this.$store.state.getters.shipperCompanyName + " " + this.$store.state.getters.shipperStreetAddress1 + " " + this.$store.state.getters.shipperStreetAddress2 + " " + this.$store.state.getters.shipperCity + " " + this.$store.state.getters.shipperStateUSA)

        this.shipperFirstName = this.$store.state.shipper.name.shipperFirstName;
        this.shipperMiddleName = this.$store.state.shipper.name.shipperMiddleName;
        this.shipperLastName = this.$store.state.shipper.name.shipperLastName;
        this.shipperCompanyName = this.$store.state.shipper.name.shipperCompanyName;
        this.shipperStreetAddress1 = this.$store.state.shipper.address.shipperStreetAddress1;
        this.shipperStreetAddress2 = this.$store.state.shipper.address.shipperStreetAddress2;
        this.shipperCity = this.$store.state.shipper.address.shipperCity;
        this.shipperStateUSA = this.$store.state.shipper.address.shipperStateUSA;

        console.log("Leaving populateOnLoad")
      },

      submit: function() {
        console.log(this.$store.getters.shipperFirstName)
        // console.log(this.$store.state.getters.shipperFirstName + " " + this.$store.state.getters.shipperMiddleName + " " + this.$store.state.getters.shipperLastName + " " + this.$store.state.getters.shipperCompanyName + " " + this.$store.state.getters.shipperStreetAddress1 + " " + this.$store.state.getters.shipperStreetAddress2 + " " + this.$store.state.getters.shipperCity + " " + this.$store.state.getters.shipperStateUSA)

        // var saveShipper;

        if (confirm("Would you like to save this shipper to the database for future use?") == true) {
          axios({
            method: 'post',
            url: 'http://127.0.0.1:5000/api/shippers',
            data: {
              'shipperFirstName': this.$store.getters.shipperFirstName,
              'shipperMiddleName': this.$store.getters.shipperMiddleName,
              'shipperLastName': this.$store.getters.shipperLastName,
              'shipperCompanyName': this.$store.getters.shipperCompanyName,
              'shipperStreetAddress1': this.$store.getters.shipperStreetAddress1,
              'shipperStreetAddress2': this.$store.getters.shipperStreetAddress2,
              'shipperCity': this.$store.getters.shipperCity,
              'shipperStateUSA': this.$store.getters.shipperStateUSA
            }
          })

          alert("Shipper saved to database.")
        }
        else {
          alert("Shipper data has been discarded.")
        }

        this.$router.push('/consignee')
      },

      editShipperNameAddress: function() {
        
        this.$router.push('/shipper')
      },

      toggle: function() {
        if (document.getElementById(this.shipper.id).hidden == true){
          document.getElementById(this.shipper.id).hidden = false;
        }
      }
    },
    mounted: function() {
      axios.get('http://localhost:5000/api/shippers')
      .then(response => (this.shippers = response.data))
      console.log("shipper component mounted.")
    }
  }
</script>

<style>
.grid-container-name-and-address-shipper-edit {
  display: grid;
  width: 87vw;
  justify-content: center;
  grid-template-columns: 20vw 20vw 20vw 20vw 7vw;
  grid-template-rows: auto auto;
  padding: 1.2vh;
  border: 1px solid rgba(0, 0, 0, 0.8);
  border-radius: 4px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.grid-container-name-and-address-sub-field {
  display: grid;
  width: 80vw;
  justify-content: center;
  grid-template-columns: 20vw 20vw 20vw 20vw;
  grid-template-rows: auto auto;
  padding: 1.2vh;
  border: 1px solid rgba(0, 0, 0, 0.8);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  /* height:0; */
  /* transition:all 0.4s linear; */
}

input:checked ~ .grid-container-name-and-address-sub-field{height:220px;}

.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  /* border: 1px solid rgba(0, 0, 0, 0.8); */
  padding: 1vh .5vw 1vh .5vw;
  text-align: center;
  background: #eee;
}
</style>
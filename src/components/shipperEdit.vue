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
        <div id="shipper">
          <dl v-for="(shipper) in this.shippers" :key = "shipper._id">
            <dt>
              <center>
                  <div class="grid-container-name-and-address-shipper-edit" v-on:click="shipper.shipperAccordionState = !shipper.shipperAccordionState">
                    <div class="grid-item">
                      <h3>Name</h3>
                    </div>
                    <div class="grid-item" style="padding-top: 1.75vh;">
                      <input 
                        id = "shipperFirstName"
                        type = "text" 
                        :value = "shipper.shipperFirstName"
                        class = "input-field-item"
                        disabled/>
                    </div>
                    <div class="grid-item" style="padding-top: 1.75vh;">
                      <input 
                        id = "shipperMiddleName"
                        type = "text" 
                        :value = "shipper.shipperMiddleName"
                        class = "input-field-item"
                        disabled/>
                    </div>
                    <div class="grid-item" style="padding-top: 1.75vh;">
                      <input 
                        id = "shipperLastName"
                        type = "text" 
                        :value = "shipper.shipperLastName"
                        class = "input-field-item"
                        disabled/>
                    </div>
                    <div class="grid-item">
                      <input 
                        id = "editShipperNameAddress"
                        type="submit" 
                        value="Edit" 
                        v-on:click="editShipperNameAddress(shipper._id.$oid)" 
                        style="
                        /* margin-right: .2vw;  */
                        margin-top: 1.25vw; 
                        padding: .3vh .5vh .3vh .5vh;
                        "/>

                      <input 
                        id = "deleteShipper"
                        type="submit" 
                        value="Delete" 
                        v-on:click="deleteShipper(shipper._id.$oid)"
                        style="
                          margin-top: 1.25vw; 
                          margin-left: 1vw;
                          padding: .3vh .5vh .3vh .5vh;
                          "/>

                      <input 
                        id = "selectShipper"
                        type="submit" 
                        value="Select" 
                        v-on:click="selectShipper(shipper._id.$oid)"
                        style="
                          margin-top: 1.25vw; 
                          margin-left: 1vw;
                          padding: .3vh .5vh .3vh .5vh;
                          "/>
                    </div>
                  </div>
                  <dd v-if="shipper.shipperAccordionState">
                    <div :id = "shipper.id" class="grid-container-name-and-address-sub-field" style="border-top: none; margin-right: 40px">

                      <div class="grid-item" style="grid-row-start: 2;">
                        <h3>Company Name</h3>
                      </div>
                    <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 2; grid-column-start: 2; grid-column-end: 5">
                      <input 
                        id = "shipperCompanyName"
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
                        id = "shipperStreetAddress1"
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
                        id = "shipperStreetAddress2"
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
                        id = "shipperCity"
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
                        id = "shipperStateUSA"
                        type = "text" 
                        :value = "shipper.shipperStateUSA"
                        class = "input-field-item"
                        disabled
                        style="width: 53vw;"/>
                    </div>
                    <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 7; grid-column-start: 1; grid-column-end: 4">

                    </div>
                    <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 7; grid-column-start: 4; grid-column-end: 5">

                      </div>
                  </div>
                </dd>
              </center>
            </dt>
          </dl>
        </div>
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

      // populateOnLoad: function() {
      //   console.log("Entering populateOnLoad")
      //   console.log(this.$store.state.getters.shipperFirstName + " " + this.$store.state.getters.shipperMiddleName + " " + this.$store.state.getters.shipperLastName + " " + this.$store.state.getters.shipperCompanyName + " " + this.$store.state.getters.shipperStreetAddress1 + " " + this.$store.state.getters.shipperStreetAddress2 + " " + this.$store.state.getters.shipperCity + " " + this.$store.state.getters.shipperStateUSA)

      //   this.shipperFirstName = this.$store.state.shipper.name.shipperFirstName;
      //   this.shipperMiddleName = this.$store.state.shipper.name.shipperMiddleName;
      //   this.shipperLastName = this.$store.state.shipper.name.shipperLastName;
      //   this.shipperCompanyName = this.$store.state.shipper.name.shipperCompanyName;
      //   this.shipperStreetAddress1 = this.$store.state.shipper.address.shipperStreetAddress1;
      //   this.shipperStreetAddress2 = this.$store.state.shipper.address.shipperStreetAddress2;
      //   this.shipperCity = this.$store.state.shipper.address.shipperCity;
      //   this.shipperStateUSA = this.$store.state.shipper.address.shipperStateUSA;

      //   console.log("Leaving populateOnLoad")
      // },

      editShipperNameAddress: async function(id) {

        const response = await axios.get('http://localhost:5000/api/shippers/' + id);

        this.shipper = response.data;

        this.$store.commit("setShipperData", {
          'shipperFirstName': this.shipper.shipperFirstName,
          'shipperMiddleName': this.shipper.shipperMiddleName,
          'shipperLastName': this.shipper.shipperLastName,
          'shipperCompanyName': this.shipper.shipperCompanyName,
          'shipperStreetAddress1': this.shipper.shipperStreetAddress1,
          'shipperStreetAddress2': this.shipper.shipperStreetAddress2,
          'shipperCity': this.shipper.shipperCity,
          'shipperStateUSA': this.shipper.shipperStateUSA
        });

        this.$router.push('/shipperReviewNameAndAddress');
      },

      submit: function() {
        console.log(this.$store.getters.shipperFirstName)

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

      deleteShipper: function(id) {
        if (confirm("WARNING: This action will permanently delete this record from the database. Do you want to continue?") == true) {
          axios({
            method: 'delete',
            url: "http://127.0.0.1:5000/api/shippers/" + id
          });
          axios.get('http://localhost:5000/api/shippers')
            .then(response => (this.shippers = response.data)
            .then(location.reload()))
        }
      },

      selectShipper: function(id) {
        if(confirm("Add this shipper to the Air Waybill?") == true) {

          var shipper = this.searchJSONArray(this.shippers, id)
          console.log("this.shippers:")
          console.log(this.shippers)
          console.log("ID:")
          console.log(id)
          console.log("Shipper:")
          console.log(shipper)
          const payload = {
            shipperFirstName: shipper.shipperFirstName,
            shipperMiddleName: shipper.shipperMiddleName,
            shipperLastName: shipper.shipperLastName,
            shipperCompanyName: shipper.shipperCompanyName,
            shipperStreetAddress1: shipper.shipperStreetAddress1,
            shipperStreetAddress2: shipper.shipperStreetAddress2,
            shipperCity: shipper.shipperCity,
            shipperStateUSA: shipper.shipperStateUSA
          }

          console.log(payload)

          this.$store.commit("setShipperData", payload)
        }
        this.$router.push("/consignee")
      },

      searchJSONArray: function(shippers, query) {
        for(var index = 0; index < shippers.length; index++) {
          console.log("Inside for loop. this.shippers[" + index + "]")
          console.log(shippers[index])
          if(shippers[index]._id.$oid == query)
            return(shippers[index]);
        }
      }
    },

    mounted: function() {
      axios.get('http://localhost:5000/api/shippers')
      .then(response => (this.shippers = response.data))
      console.log("shipper component mounted.")
      console.log(this.shippers)
    }
  }
</script>

<style>
.grid-container-name-and-address-shipper-edit {
  display: grid;
  width: 80vw;
  justify-content: center;
  grid-template-columns: 8vw 20vw 20vw 20vw 12vw;
  grid-template-rows: auto auto;
  padding: 1.2vh;
  border: 1px solid rgba(0, 0, 0, 0.8);
  border-radius: 4px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.grid-container-name-and-address-sub-field {
  display: grid;
  width: 79vw;
  justify-content: center;
  grid-template-columns: 19vw 20vw 20vw 20vw;
  grid-template-rows: auto auto;
  padding: 1.2vh;
  border: 1px solid rgba(0, 0, 0, 0.8);
  border-radius: 4px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

input:checked ~ .grid-container-name-and-address-sub-field{height:220px;}

.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  /* border: 1px solid rgba(0, 0, 0, 0.8); */
  padding: 1vh .5vw 1vh .5vw;
  text-align: center;
  background: #eee;
}

.scroller {
  height: 100%;
}

.user {
  height: 32%;
  padding: 0 12px;
  display: flex;
  align-items: center;
}
</style>
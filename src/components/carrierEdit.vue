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
          >Carriers List</h2>
        <div id="carrier">
          <dl v-for="(carrier) in this.carriers" :key = "carrier._id">
            <dt>
              <center>
                  <div class="grid-container-name-and-address-carrier-edit" v-on:click="carrier.carrierAccordionState = !carrier.carrierAccordionState">
                    <div class="grid-item">
                      <h3>Name</h3>
                    </div>
                    <div class="grid-item" style="padding-top: 1.75vh;">
                      <input 
                        id = "carrierFirstName"
                        type = "text" 
                        :value = "carrier.carrierFirstName"
                        class = "input-field-item"
                        disabled/>
                    </div>
                    <div class="grid-item" style="padding-top: 1.75vh;">
                      <input 
                        id = "carrierMiddleName"
                        type = "text" 
                        :value = "carrier.carrierMiddleName"
                        class = "input-field-item"
                        disabled/>
                    </div>
                    <div class="grid-item" style="padding-top: 1.75vh;">
                      <input 
                        id = "carrierLastName"
                        type = "text" 
                        :value = "carrier.carrierLastName"
                        class = "input-field-item"
                        disabled/>
                    </div>
                    <div class="grid-item">
                      <input 
                        id = "editCarrierNameAddress"
                        type="submit" 
                        value="Edit" 
                        v-on:click="editCarrierNameAddress(carrier._id.$oid)" 
                        style="
                        /* margin-right: .2vw;  */
                        margin-top: 1.25vw; 
                        padding: .3vh .5vh .3vh .5vh;
                        "/>

                      <input 
                        id = "deleteCarrier"
                        type="submit" 
                        value="Delete" 
                        v-on:click="deleteCarrier(carrier._id.$oid)"
                        style="
                          margin-top: 1.25vw; 
                          margin-left: 1vw;
                          padding: .3vh .5vh .3vh .5vh;
                          "/>

                      <input 
                        id = "selectCarrier"
                        type="submit" 
                        value="Select" 
                        v-on:click="selectCarrier(carrier._id.$oid)"
                        style="
                          margin-top: 1.25vw; 
                          margin-left: 1vw;
                          padding: .3vh .5vh .3vh .5vh;
                          "/>
                    </div>
                  </div>
                  <dd v-if="carrier.carrierAccordionState">
                    <div :id = "carrier.id" class="grid-container-name-and-address-sub-field" style="border-top: none; margin-right: 40px">

                      <div class="grid-item" style="grid-row-start: 2;">
                        <h3>Company Name</h3>
                      </div>
                    <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 2; grid-column-start: 2; grid-column-end: 5">
                      <input 
                        id = "carrierCompanyName"
                        type = "text" 
                        :value = "carrier.carrierCompanyName"
                        class = "input-field-item"
                        disabled
                        style="width: 53vw;"/>
                    </div>

                    <div class="grid-item" style="grid-row-start: 3;">
                      <h3>Street Address 1</h3>
                    </div>
                    <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 3; grid-column-start: 2; grid-column-end: 5">
                      <input 
                        id = "carrierStreetAddress1"
                        type = "text" 
                        :value = "carrier.carrierStreetAddress1"
                        class = "input-field-item"
                        disabled
                        style="width: 53vw;"/>
                    </div>

                    <div class="grid-item" style="grid-row-start: 4;">
                      <h3>Street Address 2</h3>
                    </div>
                    <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 4; grid-column-start: 2; grid-column-end: 5">
                      <input 
                        id = "carrierStreetAddress2"
                        type = "text" 
                        :value = "carrier.carrierStreetAddress2"
                        class = "input-field-item"
                        disabled
                        style="width: 53vw;"/>
                    </div>
                    
                    <div class="grid-item" style="grid-row-start: 5;">
                      <h3>City</h3>
                    </div>
                    <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 5; grid-column-start: 2; grid-column-end: 5">
                      <input 
                        id = "carrierCity"
                        type = "text" 
                        :value = "carrier.carrierCity"
                        class = "input-field-item"
                        disabled
                        style="width: 53vw;"/>
                    </div>
                    
                    <div class="grid-item" style="grid-row-start: 6;">
                      <h3>State</h3>
                    </div>
                    <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 6; grid-column-start: 2; grid-column-end: 5">
                      <input 
                        id = "carrierStateUSA"
                        type = "text" 
                        :value = "carrier.carrierStateUSA"
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
      carrierFirstName: '',
      carrierMiddleName: '',
      carrierLastName: '',
      carrierCompanyName: '',
      carrierStreetAddress1: '',
      carrierStreetAddress2: '',
      carrierCity: '',
      carrierStateUSA: '',
      carriers: '',
    }),
    methods: {

      // populateOnLoad: function() {
      //   console.log("Entering populateOnLoad")
      //   console.log(this.$store.state.getters.carrierFirstName + " " + this.$store.state.getters.carrierMiddleName + " " + this.$store.state.getters.carrierLastName + " " + this.$store.state.getters.carrierCompanyName + " " + this.$store.state.getters.carrierStreetAddress1 + " " + this.$store.state.getters.carrierStreetAddress2 + " " + this.$store.state.getters.carrierCity + " " + this.$store.state.getters.carrierStateUSA)

      //   this.carrierFirstName = this.$store.state.carrier.name.carrierFirstName;
      //   this.carrierMiddleName = this.$store.state.carrier.name.carrierMiddleName;
      //   this.carrierLastName = this.$store.state.carrier.name.carrierLastName;
      //   this.carrierCompanyName = this.$store.state.carrier.name.carrierCompanyName;
      //   this.carrierStreetAddress1 = this.$store.state.carrier.address.carrierStreetAddress1;
      //   this.carrierStreetAddress2 = this.$store.state.carrier.address.carrierStreetAddress2;
      //   this.carrierCity = this.$store.state.carrier.address.carrierCity;
      //   this.carrierStateUSA = this.$store.state.carrier.address.carrierStateUSA;

      //   console.log("Leaving populateOnLoad")
      // },

      editCarrierNameAddress: async function(id) {

        const response = await axios.get('http://localhost:5000/api/carriers/' + id);

        this.carrier = response.data;

        this.$store.commit("setCarrierData", {
          'carrierFirstName': this.carrier.carrierFirstName,
          'carrierMiddleName': this.carrier.carrierMiddleName,
          'carrierLastName': this.carrier.carrierLastName,
          'carrierCompanyName': this.carrier.carrierCompanyName,
          'carrierStreetAddress1': this.carrier.carrierStreetAddress1,
          'carrierStreetAddress2': this.carrier.carrierStreetAddress2,
          'carrierCity': this.carrier.carrierCity,
          'carrierStateUSA': this.carrier.carrierStateUSA
        });

        this.$router.push('/carrierReviewNameAndAddress');
      },

      submit: function() {
        console.log(this.$store.getters.carrierFirstName)

        if (confirm("Would you like to save this carrier to the database for future use?") == true) {
          axios({
            method: 'post',
            url: 'http://127.0.0.1:5000/api/carriers',
            data: {
              'carrierFirstName': this.$store.getters.carrierFirstName,
              'carrierMiddleName': this.$store.getters.carrierMiddleName,
              'carrierLastName': this.$store.getters.carrierLastName,
              'carrierCompanyName': this.$store.getters.carrierCompanyName,
              'carrierStreetAddress1': this.$store.getters.carrierStreetAddress1,
              'carrierStreetAddress2': this.$store.getters.carrierStreetAddress2,
              'carrierCity': this.$store.getters.carrierCity,
              'carrierStateUSA': this.$store.getters.carrierStateUSA
            }
          })

          alert("Carrier saved to database.")
        }
        else {
          alert("Carrier data has been discarded.")
        }

        this.$router.push('/shipment')
      },

      deleteCarrier: function(id) {
        if (confirm("WARNING: This action will permanently delete this record from the database. Do you want to continue?") == true) {
          axios({
            method: 'delete',
            url: "http://127.0.0.1:5000/api/carriers/" + id
          });
          axios.get('http://localhost:5000/api/carriers')
            .then(response => (this.carriers = response.data)
            .then(location.reload()))
        }
      },

      selectCarrier: function(id) {
        if(confirm("Add this carrier to the Air Waybill?") == true) {

          var carrier = this.searchJSONArray(this.carriers, id)
          console.log("this.carriers:")
          console.log(this.carriers)
          console.log("ID:")
          console.log(id)
          console.log("Carrier:")
          console.log(carrier)
          const payload = {
            carrierFirstName: carrier.carrierFirstName,
            carrierMiddleName: carrier.carrierMiddleName,
            carrierLastName: carrier.carrierLastName,
            carrierCompanyName: carrier.carrierCompanyName,
            carrierStreetAddress1: carrier.carrierStreetAddress1,
            carrierStreetAddress2: carrier.carrierStreetAddress2,
            carrierCity: carrier.carrierCity,
            carrierStateUSA: carrier.carrierStateUSA
          }

          console.log(payload)

          this.$store.commit("setCarrierData", payload)
        }
        this.$router.push("/shipment")
      },

      searchJSONArray: function(carriers, query) {
        for(var index = 0; index < carriers.length; index++) {
          console.log("Inside for loop. this.carriers[" + index + "]")
          console.log(carriers[index])
          if(carriers[index]._id.$oid == query)
            return(carriers[index]);
        }
      }
    },

    mounted: function() {
      axios.get('http://localhost:5000/api/carriers')
      .then(response => (this.carriers = response.data))
      console.log("carrier component mounted.")
      console.log(this.carriers)
    }
  }
</script>

<style>
.grid-container-name-and-address-carrier-edit {
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
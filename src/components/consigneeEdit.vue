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
          >Consignees List</h2>
        <div id="consignee">
          <dl v-for="(consignee) in this.consignees" :key = "consignee._id">
            <dt>
              <center>
                  <div class="grid-container-name-and-address-consignee-edit" v-on:click="consignee.consigneeAccordionState = !consignee.consigneeAccordionState">
                    <div class="grid-item">
                      <h3>Name</h3>
                    </div>
                    <div class="grid-item" style="padding-top: 1.75vh;">
                      <input 
                        id = "consigneeFirstName"
                        type = "text" 
                        :value = "consignee.consigneeFirstName"
                        class = "input-field-item"
                        disabled/>
                    </div>
                    <div class="grid-item" style="padding-top: 1.75vh;">
                      <input 
                        id = "consigneeMiddleName"
                        type = "text" 
                        :value = "consignee.consigneeMiddleName"
                        class = "input-field-item"
                        disabled/>
                    </div>
                    <div class="grid-item" style="padding-top: 1.75vh;">
                      <input 
                        id = "consigneeLastName"
                        type = "text" 
                        :value = "consignee.consigneeLastName"
                        class = "input-field-item"
                        disabled/>
                    </div>
                    <div class="grid-item">
                      <input 
                        id = "editConsigneeNameAddress"
                        type="submit" 
                        value="Edit" 
                        v-on:click="editConsigneeNameAddress(consignee._id.$oid)" 
                        style="
                        /* margin-right: .2vw;  */
                        margin-top: 1.25vw; 
                        padding: .3vh .5vh .3vh .5vh;
                        "/>

                      <input 
                        id = "deleteConsignee"
                        type="submit" 
                        value="Delete" 
                        v-on:click="deleteConsignee(consignee._id.$oid)"
                        style="
                          margin-top: 1.25vw; 
                          margin-left: 1vw;
                          padding: .3vh .5vh .3vh .5vh;
                          "/>

                      <input 
                        id = "selectConsignee"
                        type="submit" 
                        value="Select" 
                        v-on:click="selectConsignee(consignee._id.$oid)"
                        style="
                          margin-top: 1.25vw; 
                          margin-left: 1vw;
                          padding: .3vh .5vh .3vh .5vh;
                          "/>
                    </div>
                  </div>
                  <dd v-if="consignee.consigneeAccordionState">
                    <div :id = "consignee.id" class="grid-container-name-and-address-sub-field" style="border-top: none; margin-right: 40px">

                      <div class="grid-item" style="grid-row-start: 2;">
                        <h3>Company Name</h3>
                      </div>
                    <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 2; grid-column-start: 2; grid-column-end: 5">
                      <input 
                        id = "consigneeCompanyName"
                        type = "text" 
                        :value = "consignee.consigneeCompanyName"
                        class = "input-field-item"
                        disabled
                        style="width: 53vw;"/>
                    </div>

                    <div class="grid-item" style="grid-row-start: 3;">
                      <h3>Street Address 1</h3>
                    </div>
                    <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 3; grid-column-start: 2; grid-column-end: 5">
                      <input 
                        id = "consigneeStreetAddress1"
                        type = "text" 
                        :value = "consignee.consigneeStreetAddress1"
                        class = "input-field-item"
                        disabled
                        style="width: 53vw;"/>
                    </div>

                    <div class="grid-item" style="grid-row-start: 4;">
                      <h3>Street Address 2</h3>
                    </div>
                    <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 4; grid-column-start: 2; grid-column-end: 5">
                      <input 
                        id = "consigneeStreetAddress2"
                        type = "text" 
                        :value = "consignee.consigneeStreetAddress2"
                        class = "input-field-item"
                        disabled
                        style="width: 53vw;"/>
                    </div>
                    
                    <div class="grid-item" style="grid-row-start: 5;">
                      <h3>City</h3>
                    </div>
                    <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 5; grid-column-start: 2; grid-column-end: 5">
                      <input 
                        id = "consigneeCity"
                        type = "text" 
                        :value = "consignee.consigneeCity"
                        class = "input-field-item"
                        disabled
                        style="width: 53vw;"/>
                    </div>
                    
                    <div class="grid-item" style="grid-row-start: 6;">
                      <h3>State</h3>
                    </div>
                    <div class="grid-item" style="padding-top: 1.75vh; grid-row-start: 6; grid-column-start: 2; grid-column-end: 5">
                      <input 
                        id = "consigneeStateUSA"
                        type = "text" 
                        :value = "consignee.consigneeStateUSA"
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
      consigneeFirstName: '',
      consigneeMiddleName: '',
      consigneeLastName: '',
      consigneeCompanyName: '',
      consigneeStreetAddress1: '',
      consigneeStreetAddress2: '',
      consigneeCity: '',
      consigneeStateUSA: '',
      consignees: '',
    }),
    methods: {

      // populateOnLoad: function() {
      //   console.log("Entering populateOnLoad")
      //   console.log(this.$store.state.getters.consigneeFirstName + " " + this.$store.state.getters.consigneeMiddleName + " " + this.$store.state.getters.consigneeLastName + " " + this.$store.state.getters.consigneeCompanyName + " " + this.$store.state.getters.consigneeStreetAddress1 + " " + this.$store.state.getters.consigneeStreetAddress2 + " " + this.$store.state.getters.consigneeCity + " " + this.$store.state.getters.consigneeStateUSA)

      //   this.consigneeFirstName = this.$store.state.consignee.name.consigneeFirstName;
      //   this.consigneeMiddleName = this.$store.state.consignee.name.consigneeMiddleName;
      //   this.consigneeLastName = this.$store.state.consignee.name.consigneeLastName;
      //   this.consigneeCompanyName = this.$store.state.consignee.name.consigneeCompanyName;
      //   this.consigneeStreetAddress1 = this.$store.state.consignee.address.consigneeStreetAddress1;
      //   this.consigneeStreetAddress2 = this.$store.state.consignee.address.consigneeStreetAddress2;
      //   this.consigneeCity = this.$store.state.consignee.address.consigneeCity;
      //   this.consigneeStateUSA = this.$store.state.consignee.address.consigneeStateUSA;

      //   console.log("Leaving populateOnLoad")
      // },

      editConsigneeNameAddress: async function(id) {

        const response = await axios.get('http://localhost:5000/api/consignees/' + id);

        this.consignee = response.data;

        this.$store.commit("setConsigneeData", {
          'consigneeFirstName': this.consignee.consigneeFirstName,
          'consigneeMiddleName': this.consignee.consigneeMiddleName,
          'consigneeLastName': this.consignee.consigneeLastName,
          'consigneeCompanyName': this.consignee.consigneeCompanyName,
          'consigneeStreetAddress1': this.consignee.consigneeStreetAddress1,
          'consigneeStreetAddress2': this.consignee.consigneeStreetAddress2,
          'consigneeCity': this.consignee.consigneeCity,
          'consigneeStateUSA': this.consignee.consigneeStateUSA
        });

        this.$router.push('/consigneeReviewNameAndAddress');
      },

      submit: function() {
        console.log(this.$store.getters.consigneeFirstName)

        if (confirm("Would you like to save this consignee to the database for future use?") == true) {
          axios({
            method: 'post',
            url: 'http://127.0.0.1:5000/api/consignees',
            data: {
              'consigneeFirstName': this.$store.getters.consigneeFirstName,
              'consigneeMiddleName': this.$store.getters.consigneeMiddleName,
              'consigneeLastName': this.$store.getters.consigneeLastName,
              'consigneeCompanyName': this.$store.getters.consigneeCompanyName,
              'consigneeStreetAddress1': this.$store.getters.consigneeStreetAddress1,
              'consigneeStreetAddress2': this.$store.getters.consigneeStreetAddress2,
              'consigneeCity': this.$store.getters.consigneeCity,
              'consigneeStateUSA': this.$store.getters.consigneeStateUSA
            }
          })

          alert("Consignee saved to database.")
        }
        else {
          alert("Consignee data has been discarded.")
        }

        this.$router.push('/carrier')
      },

      deleteConsignee: function(id) {
        if (confirm("WARNING: This action will permanently delete this record from the database. Do you want to continue?") == true) {
          axios({
            method: 'delete',
            url: "http://127.0.0.1:5000/api/consignees/" + id
          });
          axios.get('http://localhost:5000/api/consignees')
            .then(response => (this.consignees = response.data)
            .then(location.reload()))
        }
      },

      selectConsignee: function(id) {
        if(confirm("Add this consignee to the Air Waybill?") == true) {

          var consignee = this.searchJSONArray(this.consignees, id)
          console.log("this.consignees:")
          console.log(this.consignees)
          console.log("ID:")
          console.log(id)
          console.log("Consignee:")
          console.log(consignee)
          const payload = {
            consigneeFirstName: consignee.consigneeFirstName,
            consigneeMiddleName: consignee.consigneeMiddleName,
            consigneeLastName: consignee.consigneeLastName,
            consigneeCompanyName: consignee.consigneeCompanyName,
            consigneeStreetAddress1: consignee.consigneeStreetAddress1,
            consigneeStreetAddress2: consignee.consigneeStreetAddress2,
            consigneeCity: consignee.consigneeCity,
            consigneeStateUSA: consignee.consigneeStateUSA
          }

          console.log(payload)

          this.$store.commit("setConsigneeData", payload)
        }
        this.$router.push("/carrier")
      },

      searchJSONArray: function(consignees, query) {
        for(var index = 0; index < consignees.length; index++) {
          console.log("Inside for loop. this.consignees[" + index + "]")
          console.log(consignees[index])
          if(consignees[index]._id.$oid == query)
            return(consignees[index]);
        }
      }
    },

    mounted: function() {
      axios.get('http://localhost:5000/api/consignees')
      .then(response => (this.consignees = response.data))
      console.log("consignee component mounted.")
      console.log(this.consignees)
    }
  }
</script>

<style>
.grid-container-name-and-address-consignee-edit {
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
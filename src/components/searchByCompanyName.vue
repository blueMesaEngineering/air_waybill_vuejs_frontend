<template>
  <div>
   <div id = "searchDiv">
     <h2 
     style="
        text-align: left; 
        padding-left: 27vw; 
        text-decoration: underline; 
        text-underline-position:under;
        font-family: Verdana;"
        >Search Shippers</h2>
    <center>
      <div class="grid-container">
        <div class="grid-item">
          <h3>Shipper Keyword</h3>
        </div>
        <div class="grid-item" style="padding-top: 1.75vh;">
          <input 
            id = "searchBoxElement"
            type = "text" 
            class = "input-field-item">
        </div>
      </div>
    </center>
    
      <div align = "right">
        <input 
          type="submit" 
          value="Search" 
          v-on:click="submitSearch" 
          style="
            margin-right: 27vw; 
            margin-top: 2vw; 
            padding: .3vh .5vh .3vh .5vh;"/>
      </div>
    </div>
    <div id = "resultsDiv"
      hidden>
      <h2 
     style="
        text-align: left; 
        padding-left: 9vw; 
        text-decoration: underline; 
        text-underline-position:under;
        font-family: Verdana;"
        >Search Results</h2>
        <div id = "results">
          {{ this.searchResults }}
          {{ this.getShippers() }}
          <dl v-for="(shipper) in this.searchResults" :key = "shipper._id">
            <dt>
              <center>
                <div class="grid-container-name-and-address-shipper-search">
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
                  <div  class="grid-item">
                    <input
                      type = "submit"
                      value="Edit"
                      style="
                        margin-right: .2vw; 
                        margin-top: 1.25vw; 
                        padding: .3vh .5vh .3vh .5vh;"/>
                        
                    <input
                      type = "submit"
                      value="Delete"
                      style="
                        margin-top: 1.25vw;  
                        margin-left: 1vw;
                        padding: .3vh .5vh .3vh .5vh;"/>
                  </div>
                </div>
              </center>
            </dt>
          </dl>
        </div>
      <div align = "right">
        <input 
          type="submit" 
          value="Back to Search" 
          v-on:click="backToSearch" 
          style="
            margin-right: 9vw; 
            margin-top: 1vw; 
            padding: .3vh .5vh .3vh .5vh;"/>
      </div>
    </div>
  </div>
</template>

<script> 
  import axios from "axios";
  // import url from "url";
  
  export default {
    data: () => ({
      firstName: '',
      middleName: '',
      lastName: '',
      companyName: '',
      streetAddress1: '',
      streetAddress2: '',
      city: '',
      state: '',
      shippers: '',
      searchResults: []
    }),

    methods: {
      submitSearch: function() {
        let searchValue = document.getElementById("searchBoxElement").value
        // alert(searchValue)

        // for(var index = 0; index < this.shippers.length; index++) {
        //   if(this.shippers[index][shipperFirstName].toUpperCase == searchValue.toUpperCase) {
        //     this.searchResults.push(this.shippers[index]);
        //   }
        //   else if(this.shippers[index][this.shippers.shipperLastName] == searchValue) {
        //     this.searchResults.push(this.shippers[index]);
        //   }
        //   else if(this.shippers[index][this.shippers.shipperCompanyName] == searchValue) {
        //     this.searchResults.push(this.shippers[index]);
        //   }
        // }

        // this.shippers.forEach(function(shipper) {
        //   if(shipper.shipperFirstName == searchValue) {
        //     this.searchResults.push(shipper)
        //   }
        // });

        // this.searchResults = this.shippers

        this.shippers.forEach(element => {
          Object.entries(element).forEach(element => { 
            if(element.includes(searchValue)) {
              this.searchResults.push(element)
            } 
          })
        });

        // var currentShippers = this.getShippers()
        // console.log("Current Shippers returned from this.getShippers():")
        // console.log(currentShippers)
        // console.log("Search Results:")
        // console.log(this.searchResults)
        console.log("Search Value (for pedantic purposes):")
        console.log(searchValue)
        // console.log(results)

        // var searchBox = document.getElementById("searchBoxElement");
        // searchBox.value = "";
        document.getElementById("searchDiv").hidden = true;
        document.getElementById("resultsDiv").hidden = false;
      },

      getShippers: async function() {
        const response = await axios({
          method: 'get',
          url: 'http://127.0.0.1:5000/api/shippers/:id',
          params: { shipperFirstName: 'Nathan' }
        })


        // let payload = { shipperFirstName: 'Nathan' }
        
        // const params = new url.URLSearchParams(payload)
        
        // let res = await axios.get(`http://127.0.0.1:5000/api/shippers?${params}`)
        
        // this.searchResults = res.data
        
        // return res.data
        return response.data
      },

      backToSearch: function() {
        // document.getElementById("searchBoxElement").value = ""
        document.getElementById("searchDiv").hidden = false;
        document.getElementById("resultsDiv").hidden = true;
        this.searchResults = null
      }
    },

    mounted: async function() {
      console.log("shipperReviewNameAndAddress component mounted.")
      const response = await axios({
          method: 'get',
          url: 'http://127.0.0.1:5000/api/shippers'
        })

        this.shippers = response.data

        console.log(response)
    }
  }
</script>

<style>
.grid-container-name-and-address-shipper-search {
  display: grid;
  width: 80vw;
  justify-content: center;
  grid-template-columns: 10vw 20vw 20vw 20vw 10vw;
  grid-template-rows: auto auto;
  padding: 1.2vh;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.8);
}

.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  /* border: 1px solid rgba(0, 0, 0, 0.8); */
  padding: 1vh .5vw 1vh .5vw;
  text-align: center;
  background: #eee;
}
</style>
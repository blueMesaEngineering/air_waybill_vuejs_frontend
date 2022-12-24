import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // serialNumberAWBPDF: '',
    shipper: {
      name: {
        firstName: '',
        middleName: '',
        lastName: '',
        companyName: '',
      },
      address: {
        streetAddress1: '',
        streetAddress2: '',
        city: '',
        stateUSA: '',
        zip: '',
      }
    },
    consignee: {
      name: {
        firstName: '',
        middleName: '',
        lastName: '',
        companyName: '',
      },
      address: {
        streetAddress1: '',
        streetAddress2: '',
        city: '',
        stateUSA: '',
        zip: '',
      }
    },
    carrier: {
      name: {
        firstName: '',
        middleName: '',
        lastName: '',
        companyName: '',
      },
      address: {
        streetAddress1: '',
        streetAddress2: '',
        city: '',
        stateUSA: '',
        zip: '',
      }
    },
  },

  getters: {

    // serialNumberAWBPDF Getter

    serialNumberAWBPDF: state => {
      return state.shipper.serialNumberAWBPDF
    },

    // Shipper Getters

    shipperFirstName: state => {
      return state.shipper.name.firstName
    },
    shipperMiddleName: state => {
      return state.shipper.name.middleName
    },
    shipperLastName: state => {
      return state.shipper.name.lastName
    },
    shipperCompanyName: state => {
      return state.shipper.name.companyName
    },
    shipperStreetAddress1: state => {
      return state.shipper.address.streetAddress1
    },
    shipperStreetAddress2: state => {
      return state.shipper.address.streetAddress2
    },
    shipperCity: state => {
      return state.shipper.address.city
    },
    shipperStateUSA: state => {
      return state.shipper.address.stateUSA
    },
    shipperZip: state => {
      return state.shipper.address.zip
    },

    // Consignee Getters

    consigneeFirstName: state => {
      return state.consignee.name.firstName
    },
    consigneeMiddleName: state => {
      return state.consignee.name.middleName
    },
    consigneeLastName: state => {
      return state.consignee.name.lastName
    },
    consigneeCompanyName: state => {
      return state.consignee.name.companyName
    },
    consigneeStreetAddress1: state => {
      return state.consignee.address.streetAddress1
    },
    consigneeStreetAddress2: state => {
      return state.consignee.address.streetAddress2
    },
    consigneeCity: state => {
      return state.consignee.address.city
    },
    consigneeStateUSA: state => {
      return state.consignee.address.stateUSA
    },
    consigneeZip: state => {
      return state.consignee.address.zip
    },

    // Carrier Getters

    carrierFirstName: state => {
      return state.carrier.name.firstName
    },
    carrierMiddleName: state => {
      return state.carrier.name.middleName
    },
    carrierLastName: state => {
      return state.carrier.name.lastName
    },
    carrierCompanyName: state => {
      return state.carrier.name.companyName
    },
    carrierStreetAddress1: state => {
      return state.carrier.address.streetAddress1
    },
    carrierStreetAddress2: state => {
      return state.carrier.address.streetAddress2
    },
    carrierCity: state => {
      return state.carrier.address.city
    },
    carrierStateUSA: state => {
      return state.carrier.address.stateUSA
    },
    carrierZip: state => {
      return state.carrier.address.zip
    },
  },

  mutations: {
    setSerialNumberAWBPDF(state, payload) {
      console.log("Entering setSerialNumber AWBPDF")
      state.shipper.serialNumberAWBPDF = payload.serialNumberAWBPDF
      console.log("serialNumberAWBPDF has been set")
    },
    setShipperName (state, payload) {
      console.log("Entering setShipperName")
      state.shipper.name.firstName = payload.shipperFirstName
      state.shipper.name.middleName = payload.shipperMiddleName
      state.shipper.name.lastName = payload.shipperLastName
      state.shipper.name.companyName = payload.shipperCompanyName

      console.log("shipperName has been set")
    },
    setShipperAddress (state, payload) {
      console.log("Entering setShipperAddress")
      state.shipper.address.streetAddress1 = payload.shipperStreetAddress1
      state.shipper.address.streetAddress2 = payload.shipperStreetAddress2
      state.shipper.address.city = payload.shipperCity
      state.shipper.address.stateUSA = payload.shipperStateUSA

      console.log("shipperAddress has been set")
      // console.log(state.shipper.address.streetAddress1 + " " + state.shipper.address.streetAddress2 + " " + state.shipper.address.city + " " + state.shipper.address.stateUSA)
    },
    setShipperData (state, payload) {
      console.log("Entering setShipperData")
      state.shipper.name.firstName = payload.shipperFirstName
      state.shipper.name.middleName = payload.shipperMiddleName
      state.shipper.name.lastName = payload.shipperLastName
      state.shipper.name.companyName = payload.shipperCompanyName

      state.shipper.address.streetAddress1 = payload.shipperStreetAddress1
      state.shipper.address.streetAddress2 = payload.shipperStreetAddress2
      state.shipper.address.city = payload.shipperCity
      state.shipper.address.stateUSA = payload.shipperStateUSA

      console.log("shipperData: ")
      console.log(state.shipper)
      console.log("shipperData has been set")
    },
    setConsigneeName (state, payload) {
      console.log("Entering setConsigneeName")
      state.consignee.name.firstName = payload.consigneeFirstName
      state.consignee.name.middleName = payload.consigneeMiddleName
      state.consignee.name.lastName = payload.consigneeLastName
      state.consignee.name.companyName = payload.consigneeCompanyName

      console.log("consigneeName has been set")
      // console.log(state.consignee.name.firstName + " " + state.consignee.name.middleName + " " + state.consignee.name.lastName + " " + state.consignee.name.companyName)
    },
    setConsigneeAddress (state, payload) {
      console.log("Entering setConsigneeAddress")
      state.consignee.address.streetAddress1 = payload.consigneeStreetAddress1
      state.consignee.address.streetAddress2 = payload.consigneeStreetAddress2
      state.consignee.address.city = payload.consigneeCity
      state.consignee.address.stateUSA = payload.consigneeStateUSA

      console.log("consigneeAddress has been set")
      // console.log(state.consignee.address.streetAddress1 + " " + state.consignee.address.streetAddress2 + " " + state.consignee.address.city + " " + state.consignee.address.stateUSA)
    },
    setConsigneeData (state, payload) {
      console.log("Entering setConsigneeData")
      state.consignee.name.firstName = payload.consigneeFirstName
      state.consignee.name.middleName = payload.consigneeMiddleName
      state.consignee.name.lastName = payload.consigneeLastName
      state.consignee.name.companyName = payload.consigneeCompanyName
    
      state.consignee.address.streetAddress1 = payload.consigneeStreetAddress1
      state.consignee.address.streetAddress2 = payload.consigneeStreetAddress2
      state.consignee.address.city = payload.consigneeCity
      state.consignee.address.stateUSA = payload.consigneeStateUSA
    
      console.log("consigneeData has been set")
    },
    setCarrierData (state, payload) {
      console.log("Entering setCarrierData")
      state.carrier.name.firstName = payload.carrierFirstName
      state.carrier.name.middleName = payload.carrierMiddleName
      state.carrier.name.lastName = payload.carrierLastName
      state.carrier.name.companyName = payload.carrierCompanyName
    
      state.carrier.address.streetAddress1 = payload.carrierStreetAddress1
      state.carrier.address.streetAddress2 = payload.carrierStreetAddress2
      state.carrier.address.city = payload.carrierCity
      state.carrier.address.stateUSA = payload.carrierStateUSA
    
      console.log("carrierData has been set")
    },
  },

  actions: {}
  
});
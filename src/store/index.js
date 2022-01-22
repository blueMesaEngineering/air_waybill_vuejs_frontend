import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
  },

  getters: {

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
      return state.shipper.name.firstName
    },
    consigneeMiddleName: state => {
      return state.shipper.name.middleName
    },
    consigneeLastName: state => {
      return state.shipper.name.lastName
    },
    consigneeCompanyName: state => {
      return state.shipper.name.companyName
    },
    consigneeStreetAddress1: state => {
      return state.shipper.address.streetAddress1
    },
    consigneeStreetAddress2: state => {
      return state.shipper.address.streetAddress2
    },
    consigneeCity: state => {
      return state.shipper.address.city
    },
    consigneeStateUSA: state => {
      return state.shipper.address.stateUSA
    },
    consigneeZip: state => {
      return state.shipper.address.zip
    },

    // Consignee Getters
  },

  mutations: {
    setShipperName (state, payload) {
      console.log("Entering setShipperName")
      state.shipper.name.firstName = payload.firstName
      state.shipper.name.middleName = payload.middleName
      state.shipper.name.lastName = payload.lastName
      state.shipper.name.companyName = payload.companyName

      console.log("shipperName has been set")
      // console.log(state.shipper.name.firstName + " " + state.shipper.name.middleName + " " + state.shipper.name.lastName + " " + state.shipper.name.companyName)
    },
    setShipperAddress (state, payload) {
      console.log("Entering setShipperAddress")
      state.shipper.address.streetAddress1 = payload.streetAddress1
      state.shipper.address.streetAddress2 = payload.streetAddress2
      state.shipper.address.city = payload.city
      state.shipper.address.stateUSA = payload.state

      console.log("shipperAddress has been set")
      // console.log(state.shipper.address.streetAddress1 + " " + state.shipper.address.streetAddress2 + " " + state.shipper.address.city + " " + state.shipper.address.stateUSA)
    },
    setConsigneeName (state, payload) {
      console.log("Entering setShipperName")
      state.consignee.name.firstName = payload.firstName
      state.consignee.name.middleName = payload.middleName
      state.consignee.name.lastName = payload.lastName
      state.consignee.name.companyName = payload.companyName

      console.log("consigneeName has been set")
      // console.log(state.consignee.name.firstName + " " + state.consignee.name.middleName + " " + state.consignee.name.lastName + " " + state.consignee.name.companyName)
    },
    setConsigneeAddress (state, payload) {
      console.log("Entering setShipperAddress")
      state.consignee.address.streetAddress1 = payload.streetAddress1
      state.consignee.address.streetAddress2 = payload.streetAddress2
      state.consignee.address.city = payload.city
      state.consignee.address.stateUSA = payload.state

      console.log("consigneeAddress has been set")
      // console.log(state.consignee.address.streetAddress1 + " " + state.consignee.address.streetAddress2 + " " + state.consignee.address.city + " " + state.consignee.address.stateUSA)
    },
  },

  actions: {}
  
});
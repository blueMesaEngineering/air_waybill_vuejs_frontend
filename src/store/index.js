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
    }
  },

  getters: {
    firstName: state => {
      return state.shipper.name.firstName
    },
    middleName: state => {
      return state.shipper.name.middleName
    },
    lastName: state => {
      return state.shipper.name.lastName
    },
    streetAddress1: state => {
      return state.shipper.address.streetAddress1
    },
    streetAddress2: state => {
      return state.shipper.address.streetAddress2
    },
    city: state => {
      return state.shipper.address.city
    },
    stateUSA: state => {
      return state.shipper.address.stateUSA
    },
    zip: state => {
      return state.shipper.address.zip
    },
  },

  mutations: {
    setShipperName (state, payload) {
      console.log("Entering setShipperName")
      state.shipper.name.firstName = payload.firstName
      state.shipper.name.middleName = payload.middleName
      state.shipper.name.lastName = payload.lastName
      state.shipper.name.companyName = payload.companyName

      console.log("shipperName has been set")
      console.log(state.shipper.name.firstName + " " + state.shipper.name.middleName + " " + state.shipper.name.lastName + " " + state.shipper.name.companyName)
    },
    setShipperAddress (state, payload) {
      console.log("Entering setShipperAddress")
      state.shipper.address.streetAddress1 = payload.streetAddress1
      state.shipper.address.streetAddress2 = payload.streetAddress2
      state.shipper.address.city = payload.city
      state.shipper.address.stateUSA = payload.state

      console.log("shipperAddress has been set")
      console.log(state.shipper.address.streetAddress1 + " " + state.shipper.address.streetAddress2 + " " + state.shipper.address.city + " " + state.shipper.address.stateUSA)
    }
  },

  actions: {}
  
});
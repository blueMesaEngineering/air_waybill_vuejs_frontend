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
  setters: {},
  actions: {}
  
});
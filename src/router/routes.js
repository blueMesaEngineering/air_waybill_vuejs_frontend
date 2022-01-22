import login from "../components/login";
import home from "../components/home";
import shipperName from "../components/shipperName";
import shipperAddress from "../components/shipperAddress";
import shipperReviewNameAndAddress from "../components/shipperReviewNameAndAddress";
import searchByCompanyName from "../components/searchByCompanyName";

export default [
  {
    path: '/', redirect: '/login'
  },
  {
    path: '/login',
    component: login,
    name: "Log In",
  },
  {
    path: '/home',
    component: home,
    name: "Home",
  },
  {
    path: '/shipperName',
    component: shipperName,
    name: "Shipper Name",
  },
  {
    path: '/shipperAddress',
    component: shipperAddress,
    name: "Shipper Address",
  },
  {
    path: '/shipperReviewNameAndAddress',
    component: shipperReviewNameAndAddress,
    name: "Shipper Review Name and Address",
  },
  {
    path: '/searchByCompanyName',
    component: searchByCompanyName,
    name: "Search for Shipper by Company Name",
  },
]
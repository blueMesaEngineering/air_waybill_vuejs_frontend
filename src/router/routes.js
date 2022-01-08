import shipperName from "../components/shipperName";
import shipperAddress from "../components/shipperAddress";
import shipperReviewNameAndAddress from "../components/shipperReviewNameAndAddress";
import searchByCompanyName from "../components/searchByCompanyName";

export default [
  {
    path: '/', redirect: '/shipperName'
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
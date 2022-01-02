import shipperName from "../components/shipperName";
import shipperAddress from "../components/shipperAddress";
import shipperReviewNameAndAddress from "../components/shipperReviewNameAndAddress";

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
]
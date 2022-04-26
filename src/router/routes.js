import login from "../components/login";
import home from "../components/home";
import shipper from "../components/shipper";
import consignee from "../components/consignee";
import carrier from "../components/carrier";
import shipperReviewNameAndAddress from "../components/shipperReviewNameAndAddress";
import consigneeReviewNameAndAddress from "../components/consigneeReviewNameAndAddress";
import searchByCompanyName from "../components/searchByCompanyName";
import airWaybill from "../components/airWaybill";

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
    path: '/shipper',
    component: shipper,
    name: "Shipper",
  },
  {
    path: '/shipperReviewNameAndAddress',
    component: shipperReviewNameAndAddress,
    name: "Shipper Review Name and Address",
  },
  {
    path: '/consignee',
    component: consignee,
    name: "Consignee",
  },
  {
    path: '/consigneeReviewNameAndAddress',
    component: consigneeReviewNameAndAddress,
    name: "Consignee Review Name and Address",
  },
  {
    path: '/carrier',
    component: carrier,
    name: "Carrier",
  },
  // {
  //   path: '/carrierReviewNameAndAddress',
  //   component: carrierReviewNameAndAddress,
  //   name: "Carrier Review Name and Address",
  // },
  {
    path: '/searchByCompanyName',
    component: searchByCompanyName,
    name: "Search for Shipper by Company Name",
  },
  {
    path: '/airWaybill',
    component: airWaybill,
    name: "Air Waybill Review",
  },
]
import login from "../components/login";
import home from "../components/home";
import shipper from "../components/shipper";
import shipperName from "../components/shipperName";
import shipperAddress from "../components/shipperAddress";
import shipperReviewNameAndAddress from "../components/shipperReviewNameAndAddress";
import consigneeName from "../components/consigneeName";
import consigneeAddress from "../components/consigneeAddress";
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
    path: '/consigneeName',
    component: consigneeName,
    name: "Consignee Name",
  },
  {
    path: '/consigneeAddress',
    component: consigneeAddress,
    name: "Consignee Address",
  },
  {
    path: '/consigneeReviewNameAndAddress',
    component: consigneeReviewNameAndAddress,
    name: "Consignee Review Name and Address",
  },
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
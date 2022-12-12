import login from "../components/login";
import home from "../components/home";
import shipper from "../components/shipper";
import shipperNew from "../components/shipperNew";
import shipperEdit from "../components/shipperEdit";
import shipperReviewNameAndAddress from "../components/shipperReviewNameAndAddress";
import consignee from "../components/consignee";
import consigneeEdit from "../components/consigneeEdit";
import consigneeNew from "../components/consigneeNew";
import consigneeReviewNameAndAddress from "../components/consigneeReviewNameAndAddress";
import carrier from "../components/carrier";
import carrierNew from "../components/carrierNew";
import carrierReviewNameAndAddress from "../components/carrierReviewNameAndAddress";
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
    path: '/shipperNew',
    component: shipperNew,
    name: "Shipper New",
  },
  {
    path: '/shipperEdit',
    component: shipperEdit,
    name: "Shipper Edit",
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
    path: '/consigneeNew',
    component: consigneeNew,
    name: "Consignee New",
  },
  {
    path: '/consigneeEdit',
    component: consigneeEdit,
    name: "Consignee Edit",
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
  {
    path: '/carrierNew',
    component: carrierNew,
    name: "Carrier New",
  },
  {
    path: '/carrierReviewNameAndAddress',
    component: carrierReviewNameAndAddress,
    name: "Carrier Review Name and Address",
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
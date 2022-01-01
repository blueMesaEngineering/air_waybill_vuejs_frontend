import shipperName from "../components/shipperName";
import shipperAddress from "../components/shipperAddress";

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
]
import axios from "axios";
import Moment from "moment";
import summary from "./summary.json"

const apiUrl = "https://api.covid19api.com/country/dominican-republic";
const get = () => axios.get(apiUrl, { contentType: "json" });
const dateFormat1 = "MM-DD-YYYY";

export function getData() {
  return get().then((res) =>
    res.data.map((d) => ({ ...d, Date: Moment(d.Date, dateFormat1).toString() }))
  );
}

export function setFromData(setter) {
  get().then((res) => setter(res.data.map((d) => ({ ...d, Date: Moment(d.Date).format(dateFormat1).toString() }) )));
}


export async function getAllCountries(){
  return await axios.get("https://api.covid19api.com/countries", { contentType: "json" }).then(({data}) => data);
};


export const getSummary = () => {
  // const uri = "https://api.covid19api.com/summary";
  // return await axios.get(uri, { contentType: "json" }).then(({data}) => data);
  return summary;
};
import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { getData, setFromData, getAllCountries, getSummary } from "../tools/api";
import {Container} from 'react-bootstrap';
import CountriesDropDown from '../components/CountriesDropDown';
import SummaryGlobalChart from './SummaryGlobalChart';


export default function Main(props) {
  const [spread, setSpread] = React.useState([]);
  const [countries, setCountries] = React.useState([]/*()=> getAllCountries()*/);
  /**
   * Summary
   * {
   * Global: Object {
   *   
   * }
   * Countries: Object
   * Date: String with full date format
   * }
   */

  const [summary, setSummary] = React.useState(()=> getSummary());
  console.log("summary", summary);
  const handleGetData = () => setFromData(setSpread);

  return (
    <Container className="App" fluid="sm" >
      <SummaryGlobalChart global={summary.Global} />
    </Container>
  );
}

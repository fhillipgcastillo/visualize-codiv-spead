import React from "react";
import { Container } from 'react-bootstrap';
import { getSummary, setFromData } from "../tools/api";
import SummaryGlobalChart from './SummaryGlobalChart';
import SummaryByCounrtries from "./SummaryByCounrtries";


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
      <SummaryByCounrtries countries={summary.Countries} />
    </Container>
  );
}

import React from "react";
import Title from "../components/Title";
import SummaryGlobalChart from "./SummaryGlobalChart";
import {Row, Col} from "react-bootstrap"
import CountriesDropDown from "../components/CountriesDropDown"

export default function SummaryByCounrtries(props) {
  const [country, setCountry ] = React.useState();
  const mappedCountries = props.countries.map(c => ({CountryCode:c.CountryCode, Country: c.Country, Slug: c.Slug}));
  const handleCountrySelect = (slug) => {
    console.log(slug);
    setCountry(props.countries.find(c => c.Slug === slug))
  };

  return (
    <Row>
      <Col sm={12}>
        <Title>Country</Title>
        <CountriesDropDown countries={mappedCountries} onSelect={handleCountrySelect}/>
      </Col>
      <Col sm={12}>
        {country && (
          <>
          <Title>{country.Country}</Title>
          <SummaryGlobalChart global={country} />
        </>
        )}
      </Col>
      {/* {props.countries.map((c) => (
        <>
          <Title>{c.Country}</Title>
          <SummaryGlobalChart global={c} />
        </>
      ))} */}
    </Row>
  );
}

import React from "react";
import { Dropdown } from "react-bootstrap/";


export default function CountriesDropDown (props) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Select a Country
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {
          props.countries !== undefined && props.countries.length > 0
        ? props.countries.map(country => (<Dropdown.Item href="#/action-1" key={country.CountryCode}>{country.Country}</Dropdown.Item>))
          : null
        }
      </Dropdown.Menu>
    </Dropdown>
  );
};

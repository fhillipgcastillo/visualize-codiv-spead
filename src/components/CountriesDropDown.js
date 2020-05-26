import React from "react";
import { Dropdown } from "react-bootstrap/";

export default function CountriesDropDown({ countries = [], onSelect = null }) {
  return (
    <Dropdown onSelect={onSelect}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Select a Country
      </Dropdown.Toggle>

      <Dropdown.Menu>
        { countries.length > 0
          ? countries.map((country) => (
              <Dropdown.Item
                key={country.CountryCode}
                eventKey={country.Slug}
              >
                {country.Country}
              </Dropdown.Item>
            ))
          : null}
      </Dropdown.Menu>
    </Dropdown>
  );
}

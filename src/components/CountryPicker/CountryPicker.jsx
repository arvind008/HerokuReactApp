import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchedCountries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchCountries, setFetchCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchCountries(await fetchedCountries());
    };
    fetchAPI();
  }, [setFetchCountries]);
  return (
    <FormControl>
      <NativeSelect
        default=""
        onChange={e => handleCountryChange(e.target.value)}
      >
        <option value="">global</option>
        {fetchCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;

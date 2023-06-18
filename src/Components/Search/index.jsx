import React from 'react';
import WeatherApi from "../../api/weather";
import {components} from "react-select";

import AsyncSelect from "react-select/async";

function Search({onSearch}) {


  const getCities = async (inputValue, callback) => {
    try {
      const cities = await new WeatherApi().searchForCities(inputValue).then(res => res.data.results);
      return callback(WeatherApi.generateOptions(cities));
    } catch (err) {
    }
  }
  const handleOnSearch = (data) => {
    onSearch && onSearch(data);
  }

  const OptionComponent = (props) => {

    return (
      <components.Option {...props}>
        <div className={"d-flex justify-content-between"}>
          <div className={"d-flex"}>
            <div
              className={"me-2"}
              style={{
                backgroundImage: `url(https://flagsapi.com/${props.data?.countryCode}/flat/32.png)`,
                borderRadius: 13,
                width: 32,
                height: 32
              }}></div>
            <div className={"d-flex flex-column"}>
              <span className={"fw-bold"}>{props.data.label}</span>
              <div className={"d-flex text-secondary text-small mt-1"}>
                <span>{props.data.country}&nbsp;</span>
                <span>{props.data.countryCode}</span>
              </div>
            </div>
          </div>
          <span className={"fw-normal mt-1 text-small text-secondary"}>{props.data.timezone}</span>
        </div>
      </components.Option>
    )
  }
  return (
    <>
      <AsyncSelect
        theme={(theme) => ({
          ...theme,
          borderRadius: 10,
          colors: {
            ...theme.colors,
            primary25: '#ed4a2717',
            primary: '#ed4a27',
          },
        })}

        styles={{
          menuList: (provided, state) => ({
            ...provided,
            borderRadius: 10,
          }),
          option: (provided, state) => ({
          ...provided,
            ":hover": {
              backgroundColor: "#ed4a2717" ,
            },
            backgroundColor: state.isSelected? '#000000' : '#fff',
          }),
        }}
        placeholder={"Type to search 👌!"}
        components={{
          Option: OptionComponent,
        }}
        cacheOptions
        loadOptions={getCities}
        onChange={handleOnSearch}
      />

    </>
  )
}

export default Search;

import React, { useState } from "react";
import "./Filter.css";
import Houses from "../Houses/Houses";

// import { houseRental } from "../../HouseAPI";
import { city } from "../../HouseAPI";
// import { price } from "../../HouseAPI";
import { ameneties } from "../../HouseAPI";
import { size } from "../../HouseAPI";
import { priceOpt } from "../../HouseAPI";

const Filter = () => {
  //Selected Filter
  let [selectedCity, setSelectedCity] = useState();
  let [selectedPrice, setSelectedPrice] = useState();
  let [selectedSize, setSelectedSize] = useState([]);
  let [selectedAmeneties, setSelectedAmeneties] = useState([]);

  //Possible Filter options
  let [dropDownOptionsSize, setDropDownOptionsSize] = useState("hide");
  let [dropDownOptionsAmenities, setDropDownOptionsAmenities] =
    useState("hide");
  let [hideCityDropDown, setHideCityDropDown] = useState("hide");
  let [hidePriceDropDown, setHidePriceDropDown] = useState("hide");

  //To design selected options
  let [inputCity, setInputCity] = useState("");
  let [selectedSizeOption, setSelectedSizeOption] = useState([]);
  let [selectedAmenitiesOption, setSelectedAmenitiesOption] = useState([]);
  let [passFilter, setPassFilter] = useState(false);

  // adding house size in the defined array for filtering and removing if it already exists
  let addSize = (e, size, index) => {
    // adding size
    if (!selectedSize.includes(size)) {
      setSelectedSize([...selectedSize, size]);
      setSelectedSizeOption([...selectedSizeOption, index]);
    }
    // removing size
    else {
      let arr = selectedSize.filter((el) => el !== size);
      setSelectedSize([...arr]);
      let arr1 = selectedSizeOption.filter((el) => el !== index);
      setSelectedSizeOption([...arr1]);
    }
  };
  let addSize1 = (size, index) => {
    // adding amenities
    if (!selectedAmeneties.includes(size)) {
      setSelectedAmeneties([...selectedAmeneties, size]);
      setSelectedAmenitiesOption([...selectedAmenitiesOption, index]);
    }
    // removing amenities
    else {
      let arr = selectedAmeneties.filter((el) => el !== size);
      setSelectedAmeneties([...arr]);
      let arr1 = selectedAmenitiesOption.filter((el) => el !== index);
      setSelectedAmenitiesOption([...arr1]);
    }
  };

  let showOptionsSize = () => {
    if (dropDownOptionsSize === "hide") {
      setDropDownOptionsSize("dropDownOptionsSizeShow");
      setDropDownOptionsAmenities("hide");
      setHideCityDropDown("hide");
      setHidePriceDropDown("hide");
    } else {
      setDropDownOptionsSize("hide");
    }
  };
  let showOptionsSize1 = () => {
    if (dropDownOptionsAmenities === "hide") {
      setDropDownOptionsAmenities("dropDownOptionsSizeAmenities");
      setDropDownOptionsSize("hide");
      setHideCityDropDown("hide");
      setHidePriceDropDown("hide");
    } else {
      setDropDownOptionsAmenities("hide");
    }
  };

  //Handling Input for City
  let handleChangeCity = (e) => {
    setInputCity(e.target.value);
  };

  let showCities = () => {
    setHideCityDropDown("inputCity");
    setDropDownOptionsSize("hide");
    setDropDownOptionsAmenities("hide");
    setHidePriceDropDown("hide");
  };

  let setTheCity = (el) => {
    setHideCityDropDown("hide");
    setSelectedCity(el);
    setInputCity(el);
  };

  let showPricingOptions = () => {
    if (hidePriceDropDown === "hide") {
      setHidePriceDropDown("showPriceDropDown");
      setDropDownOptionsSize("hide");
      setDropDownOptionsAmenities("hide");
      setHideCityDropDown("hide");
    } else {
      setHidePriceDropDown("hide");
    }
  };

  let selectPricing = (pricing) => {
    setSelectedPrice(pricing);
    setHidePriceDropDown("hide");
  };

  let search = () => {
    // selectedCity, selectedSize, selectedAmeneties, selectedPrice
    if (
      !selectedCity ||
      selectedAmeneties.length === 0 ||
      !selectedPrice ||
      selectedSize.length === 0
    ) {
      setDropDownOptionsSize("hide");
      setDropDownOptionsAmenities("hide");
      setHideCityDropDown("hide");
      setHidePriceDropDown("hide");
      alert("Please fill all the filter options");
    } else {
      setDropDownOptionsSize("hide");
      setDropDownOptionsAmenities("hide");
      setHideCityDropDown("hide");
      setHidePriceDropDown("hide");
      setPassFilter(true);
    }
  };

  let clearAll = () => {
    setSelectedCity("");
    setSelectedSize([]);
    setSelectedAmeneties([]);
    setSelectedSizeOption([]);
    setSelectedAmenitiesOption([]);
    setInputCity("");
    setPassFilter(false);
    setDropDownOptionsSize("hide");
    setDropDownOptionsAmenities("hide");
    setHideCityDropDown("hide");
    setHidePriceDropDown("hide");
  };

  return (
    <>
      <div className="filter_container">
        <div className="filter_wrapper">
          {/* Size */}
          <div className="filter_type1" onClick={showOptionsSize}>
            Size <div>{selectedSize.length}</div>
            <img src="./assets/down.png" alt="" />
          </div>
          <div className={dropDownOptionsSize}>
            {size.map((el, index) => {
              return (
                <div
                  key={index}
                  onClick={(e) => addSize(e, el, index)}
                  className={
                    selectedSizeOption.includes(index)
                      ? "dropDownOptionsSizeShowSelected"
                      : ""
                  }
                >
                  {el}
                </div>
              );
            })}
          </div>
          {/* City */}
          <input
            className="filter_input"
            type="text"
            name="city"
            onClick={showCities}
            autoComplete="false"
            placeholder="City: Gotham"
            value={inputCity}
            onChange={(e) => handleChangeCity(e)}
          />
          <div className={hideCityDropDown}>
            {city.map((el, index) => {
              if (el.toLowerCase().includes(inputCity.toLowerCase())) {
                return (
                  <div key={index} onClick={() => setTheCity(el)}>
                    {el}
                  </div>
                );
              }
            })}
          </div>
          {/* City */}
          {/* Amenities */}
          <div className="filter_type1" onClick={showOptionsSize1}>
            Amenities<div>{selectedAmeneties.length}</div>
            <img src="./assets/down.png" alt="" />
          </div>
          <div className={dropDownOptionsAmenities}>
            {ameneties.map((el, index) => {
              return (
                <div
                  key={index}
                  onClick={() => addSize1(el, index)}
                  className={
                    selectedAmenitiesOption.includes(index)
                      ? "dropDownOptionsSizeShowSelected"
                      : ""
                  }
                >
                  {el}
                </div>
              );
            })}
          </div>
          {/* Amenities */}
          {/* Price */}
          <div
            className="filter_type1 filter_price"
            onClick={showPricingOptions}
          >
            Price
            <img src="./assets/down.png" alt="" />
          </div>
          <div className={hidePriceDropDown}>
            {priceOpt.map((el, index) => {
              return (
                <div key={index} onClick={() => selectPricing(index + 1)}>
                  {el}
                </div>
              );
            })}
          </div>
          {/* Price */}

          {/* Search/Clear*/}
          <div className="filter_btns" onClick={search}>
            Search
          </div>
          <div className="filter_btns" onClick={clearAll}>
            Clear
          </div>
          {/* Search/Clear*/}
        </div>
      </div>
      <Houses
        props={
          passFilter
            ? { selectedCity, selectedSize, selectedAmeneties, selectedPrice }
            : {}
        }
      />
    </>
  );
};

export default Filter;

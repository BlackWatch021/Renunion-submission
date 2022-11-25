import React from "react";
import "./Houses.css";
import { houseRental } from "../../HouseAPI";

const Houses = (props) => {
  let { selectedAmeneties, selectedSize, selectedCity, selectedPrice } =
    props.props;

  let pricing = [];

  if (selectedPrice === 1) {
    pricing = [1, 499];
  } else if (selectedPrice === 2) {
    pricing = [500, 999];
  } else if (selectedPrice === 3) {
    pricing = [1000, 1999];
  } else if (selectedPrice === 4) {
    pricing = [2000, 4999];
  } else if (selectedPrice === 5) {
    pricing = [5000, 9999];
  } else if (selectedPrice === 6) {
    pricing = [10000, 14999];
  } else if (selectedPrice === 7) {
    pricing = [15000, 24999];
  } else if (selectedPrice === 8) {
    pricing = [25000, 49999];
  }

  // console.log(houseRental);
  return (
    <>
      <div className="house_container">
        {houseRental.map((el, index) => {
          // console.log(selectedAmeneties);
          // console.log(selectedSize);
          // console.log(selectedCity);
          // console.log(selectedPrice);
          // console.log(props.props);
          if (
            el.city.includes(selectedCity) &&
            pricing[0] <= el.price &&
            el.price <= pricing[1]
          ) {
            let amenities = false;
            let size = false;
            for (let i = 0; i < selectedAmeneties.length; i++) {
              if (el.amenities.includes(selectedAmeneties[i])) {
                amenities = true;
              }
            }

            for (let i = 0; i < selectedSize.length; i++) {
              if (el.size.includes(selectedSize[i])) {
                size = true;
              }
            }

            if (amenities && size) {
              // console.log(el.city, selectedCity);
              // console.log(el.price, pricing);
              // console.log(el.amenities, selectedAmeneties);
              // console.log(el.size, selectedSize);
              return (
                <div key={index} className="house_wrapper">
                  <div className="rental_container">
                    <img src={el.image} alt="" />
                    <div className="rental_heading">
                      <div className="rental_name">
                        <p>
                          ${el.price}
                          <span>/month</span>
                        </p>
                        <p>{el.city}</p>
                      </div>
                      <div className="rental_details">
                        <div className="rental_bedroom">
                          <img src="./assets/bed.png" alt="" /> {el.bedrooms}{" "}
                          Bedrooms
                        </div>
                        <div className="rental_bathroom">
                          <img src="./assets/bathtub.png" alt="" />{" "}
                          {el.bathroom} Bathrooms
                        </div>
                      </div>
                    </div>
                    <div className="house_address_facilities">
                      <p className="house_address">{el.address}</p>
                      <div className="facilities">
                        <div className="facilities_size">{el.size}</div>
                        {el.amenities.map((el, index) => {
                          return <div key={index}>{el}</div>;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          } else if (
            !selectedAmeneties &&
            !selectedCity &&
            !selectedPrice &&
            !selectedSize
          ) {
            // console.log("its working");
            return (
              <div key={index} className="house_wrapper">
                <div className="rental_container">
                  <img src={el.image} alt="" />
                  <div className="rental_heading">
                    <div className="rental_name">
                      <p>
                        ${el.price}
                        <span>/month</span>
                      </p>
                      <p>{el.city}</p>
                    </div>
                    <div className="rental_details">
                      <div className="rental_bedroom">
                        <img src="./assets/bed.png" alt="" /> {el.bedrooms}{" "}
                        Bedrooms
                      </div>
                      <div className="rental_bathroom">
                        <img src="./assets/bathtub.png" alt="" /> {el.bathroom}{" "}
                        Bathrooms
                      </div>
                    </div>
                  </div>
                  <div className="house_address_facilities">
                    <p className="house_address">{el.address}</p>
                    <div className="facilities">
                      <div className="facilities_size">{el.size}</div>
                      {el.amenities.map((el, index) => {
                        return <div key={index}>{el}</div>;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          } else {
          }
        })}
        {/* <div className="house_wrapper">
        <div className="rental_container">
          <img src="./images/house1.jpg" alt="" />
          <div className="rental_heading">
            <div className="rental_name">
              <p>
                $20,000<span>/month</span>
              </p>
              <p>Manhatan</p>
            </div>
            <div className="rental_details">
              <div className="rental_bedroom">
                <img src="./assets/bed.png" alt="" /> 3 Bedroom
              </div>
              <div className="rental_bathroom">
                <img src="./assets/bathtub.png" alt="" /> 1 Washroom
              </div>
            </div>
          </div>
          <div className="house_address_facilities">
            <p className="house_address">
              K-210, MorningStart Street, NYC, USA
            </p>
            <div className="facilities">
              <div className="facilities_size">3bhk</div>
              <div>Swimming Pool</div>
              <div>Swimming Pool</div>
              <div>Terrace</div>
              <div>Terrace</div>
            </div>
          </div>
        </div>
      </div> */}
      </div>
    </>
  );
};

export default Houses;

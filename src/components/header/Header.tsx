import React from "react";
import StyledSearchBox from "./StyledHeader";

type HeaderProps = {
    title?: string;
    onChangeCountry: (country: string) => void;
    onSearchWeather: (country: string) => void;
};

export const Header = ({
    title,
    onChangeCountry,
    onSearchWeather
}: HeaderProps) => {

  return (
    <>
      <StyledSearchBox>
        <input
          className="input"
          placeholder="Enter your location"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
                onChangeCountry(e.currentTarget.value);
            }
          }}
        ></input>
          <button 
              className="search-button"
              disabled={false}
          >
              Search
          </button>
      </StyledSearchBox>
    </>
  );
};

export default Header;
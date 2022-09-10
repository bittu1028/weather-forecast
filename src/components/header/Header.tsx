import React, { useRef } from "react";
import Forecast from "../forecast/Forecast";
import StyledSearchBox, { StyledButton, StyledHeaderContainer, StyledHeaderWrapper, StyledLogo } from "./StyledHeader";

type HeaderProps = {
  onChange: (e: any) => void;
  onKeyDown: (e: any) => void;
  searchQuery: string;
  isSearching: boolean;
  onSearchWeather: () => void;
};

const Header = ({
  onChange,
  onKeyDown,
  searchQuery,
  onSearchWeather,
  isSearching,
}: HeaderProps) => {
  const header = useRef(null);
  const onFocusChange = (e: any) => {
    e.target.select();
  };

  const toggleSearchBar = () => {
    // header?.current?.classList?.toggle('active');
  };

  return (
    <StyledHeaderContainer ref={header}>
      <StyledHeaderWrapper>
        <StyledLogo>
          <h1>Weather Forecast</h1>
        </StyledLogo>
        <div className="search-toggle" onClick={toggleSearchBar} />
        <StyledSearchBox>
          <input
            className="form-control"
            onChange={onChange}
            onFocus={onFocusChange}
            onKeyDown={onKeyDown}
            placeholder="Search for city, country"
            readOnly={isSearching}
            type="text"
            value={searchQuery}
          />
          <StyledButton
            className="search-button"
            disabled={isSearching}
            onClick={onSearchWeather}
          >
            Search
          </StyledButton>
        </StyledSearchBox>
      </StyledHeaderWrapper>
    </StyledHeaderContainer>
  );
};

export default Header;

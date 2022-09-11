import React, { useRef } from "react";
import { IHeaderProps } from "./Header.types";
import {StyledSearchBox, StyledButton, StyledHeaderContainer, StyledHeaderWrapper, StyledLogo, StyledInput } from "./StyledHeader";


const Header = ({
  onChange,
  onKeyDown,
  searchQuery,
  onSearchWeather,
  isSearching,
}: IHeaderProps) => {
  const header = useRef(null);
  const onFocusChange = (e: any) => {
    e.target.select();
  };


  return (
    <StyledHeaderContainer ref={header}>
        <StyledHeaderWrapper>
        <StyledSearchBox>
          <StyledInput
            className="form-control"
            onChange={onChange}
            onFocus={onFocusChange}
            onKeyDown={onKeyDown}
            placeholder="Search for city, country"
            readOnly={isSearching}
            type="text"
            value={searchQuery}
          />
          <StyledButton onClick={onSearchWeather}>
            <StyledLogo>
              Weather Forecast
            </StyledLogo>
          </StyledButton>
        </StyledSearchBox>
      </StyledHeaderWrapper>
    </StyledHeaderContainer>
  );
};

export default Header;

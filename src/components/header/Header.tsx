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
        </StyledSearchBox>
      </StyledHeaderWrapper>
    </StyledHeaderContainer>
  );
};

export default Header;

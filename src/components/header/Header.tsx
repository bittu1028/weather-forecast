import React, { useRef } from "react";
import { IHeaderProps } from "./Header.types";
import {StyledHeaderContainer, StyledHeaderWrapper } from "./StyledHeader";
import SearchBox from '../../shared/Input/SearchBox';


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
        <SearchBox  
          onChange={onChange}
          onKeyDown={onKeyDown}
          onSubmit={onSearchWeather}
          searchQuery={searchQuery}
          isSearching={isSearching}
        />
      </StyledHeaderWrapper>
    </StyledHeaderContainer>
  );
};

export default Header;

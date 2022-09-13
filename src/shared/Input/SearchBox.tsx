import React, { KeyboardEvent } from 'react';
import { StyledButton, StyledInput, StyledLogo, StyledSearchBox } from './StyledSearchBox';

interface ISearch {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  searchQuery?: string;
  isSearching?: boolean;
}

const SearchBox: React.FC<ISearch> = ({
  searchQuery,
  onChange,
  onSubmit,
  isSearching,
  onKeyDown,
}) => {
  return (
    <>
      <StyledSearchBox>
        <StyledInput
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder='Search for city'
          type='text'
          readOnly={isSearching}
          value={searchQuery}
        />
        <StyledButton aria-label='submit' onClick={onSubmit}>
          <StyledLogo />
        </StyledButton>
      </StyledSearchBox>
    </>
  );
};

export default SearchBox;

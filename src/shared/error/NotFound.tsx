import React from 'react';
import { StyledErrorContainer, StyledErrorMessage, StyledErrorTitle } from './StyledError';

interface INotFoundProps {
  errorMessage: string;
}

export const NotFoundError = ({ errorMessage }: INotFoundProps) => {
  return (
    <>
      <StyledErrorContainer>
        <StyledErrorTitle>Error</StyledErrorTitle>
        <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
      </StyledErrorContainer>
    </>
  );
};

import React from 'react';
import { StyledErrorContainer, StyledErrorMessage, StyledErrorTitle } from './StyledError';

interface IErrorProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export const Error = ({ error, resetErrorBoundary }: IErrorProps) => {
  return (
    <>
      <StyledErrorContainer>
        <StyledErrorTitle>Error</StyledErrorTitle>
        <StyledErrorMessage>{error.message}</StyledErrorMessage>
        <button onClick={resetErrorBoundary}>Try again</button>
      </StyledErrorContainer>
    </>
  );
};

export const ErrorHandler = (
  error: Error,
  info: { componentStack: string }
) => {
  console.error(error, 'error');
};
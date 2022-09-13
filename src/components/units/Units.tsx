import React, { useRef } from 'react';
import { StyledUnits, StyledUnitsContainer } from './StyledUnits';
import { IUnits } from './Units.type';

const Units = ({ changeUnitSettings, unit }: IUnits) => {
  return (
    <StyledUnitsContainer>
      <StyledUnits
        active={unit === 'metric'}
        onClick={() => {
          changeUnitSettings('metric');
        }}
      >
        °C
      </StyledUnits>
      <StyledUnits
        active={unit === 'imperial'}
        onClick={() => {
          changeUnitSettings('imperial');
        }}
      >
        °F
      </StyledUnits>
    </StyledUnitsContainer>
  );
};

export default Units;

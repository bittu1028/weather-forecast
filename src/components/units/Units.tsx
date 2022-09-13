import React, { useRef } from 'react';
import { StyledUnits, StyledUnitsContainer } from './StyledUnits';

interface IUnits {
  changeUnitSettings: (unit:string) => void;
  unit: string;
}

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

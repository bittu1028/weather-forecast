import styled from 'styled-components';

interface IStyledSpan {
    active: boolean;
}

export const StyledUnitsContainer = styled.div`
   margin-top: 3px;
   margin-right: 15px;
`

export const StyledUnits = styled.span`
  cursor: pointer;
  margin-right: 5px;
  color: ${(props: IStyledSpan) => props.active ? '#4581c5' : '#968e8e'};
  font-weight: ${(props: IStyledSpan) => props.active ? 600 : 400};
`
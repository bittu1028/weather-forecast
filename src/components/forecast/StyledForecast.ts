import styled from 'styled-components';
import { device } from '../../utils/device';

export const StyledForecastContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.75);
  box-shadow: rgb(0 0 0 / 10%) 1px 1px 3px;
  border-radius: 15px;
  padding: 1.5rem 2rem;
  overflow: hidden;
  margin-top: ${(props) => props.theme.xl};

  @media ${device.mobile} {
    flex-direction: column;
    margin-top: 20px;
  }
`;

export const StyledForecastItem = styled.div`
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  flex-direction: column;

  i {
    font-size: ${(props) => props.theme.iconl};

    @media ${device.mobile} {
      font-size: ${(props) => props.theme.xl};
      order: 2;
    }
  }

  @media ${device.mobile} {
    flex-direction: row;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: ${(props) => props.theme.ms} 0;
  }
`;

export const StyledForecastDate = styled.h4`
  font-weight: 600;
  color: rgb(69, 129, 197);
  @media ${device.mobile} {
    order: 1;
    margin: 0;
  }
`;

export const StyledForecastTemp = styled.h2`
  span {
    font-weight: normal;
  }

  @media ${device.mobile} {
    order: 3;
  }
`;

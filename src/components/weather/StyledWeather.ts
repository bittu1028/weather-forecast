import styled from 'styled-components';
import { device } from '../../utils/device';

export const StyledWeatherContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: ${(props) => props.theme.ms};
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 10%) 1px 1px 3px;
  border-radius: 15px;
  flex-direction: column;
  padding: 1.5rem 2rem;
  color: #000;

  @media ${device.mobile} {
    flex-direction: column;
  }

  & i {
    font-size: 15rem;
    flex-grow: 1;

    @media ${device.mobile} {
      font-size: ${(props) => props.theme.xxl};
      flex-grow: 0;
      order: 2;
    }
  }
`;

export const StyledTemperatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${(props) => props.theme.xxl};
  text-align: center;
  align-items: center;
  position: relative;

  @media ${device.tablet} {
    padding-left: 0;
    padding-right: ${(props) => props.theme.ms};
  }

  @media ${device.mobile} {
    padding: 0;
    width: 100%;
    flex-direction: row;
    align-items: center;
  }
`;
export const StyledImage = styled.img`
  height: 100px;
  width: 100px;
`;

export const StyledWeatherWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${device.tablet} {
    padding-left: 0;
    padding-right: ${(props) => props.theme.ms};
  }

  @media ${device.mobile} {
    padding: 0;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

export const TemperatureContainer = styled.div`
  position: relative;
  text-align: right;

  @media ${device.mobile} {
    margin-right: ${(props) => props.theme.xl};
  }

  span {
    padding: 0 ${(props) => props.theme.ss};
  }
`;
export const StyledHeader = styled.div`
  font-size: ${(props) => props.theme.xl};

  @media ${device.mobile} {
    order: 1;
    font-size: ${(props) => props.theme.ms};
  }
`;

export const StyledLocation = styled.div`
  display: flex;
  align-items: center;

  @media ${device.mobile} {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  img {
    width: 30px;
    height: 30px;
    margin-left: ${(props) => props.theme.ms};
  }

  h2 {
    @media ${device.mobile} {
      font-size: 2rem;
    }
  }
`;

export const StyledTemperatureInfoContainer = styled.div`
  flex-grow: 1;
  margin-bottom: ${(props) => props.theme.ms};
  position: relative;
  padding-left: ${(props) => props.theme.xl};

  h4 {
    span {
      font-weight: normal;
      margin-right: ${(props) => props.theme.ss};
    }
  }

  @media ${device.mobile} {
    width: 100%;
    padding-left: 0;
  }
`;

export const H4 = styled.h4`
  texttransform: 'capitalize' & span {
    font-weight: normal;
    margin-right: ${(props) => props.theme.ss};
  }
`;

export const H2 = styled.h2``;

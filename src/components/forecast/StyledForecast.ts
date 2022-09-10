import styled from 'styled-components';
import { device } from '../../styles/device';

export const StyledForecastContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: ${props => props.theme.xl};

    @media ${device.mobile} {
        flex-direction: column;
        margin-top: 0;
    }
`

export const StyledForecastItem = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    flex-direction: column;
    border-right: 1px solid rgba(255, 255, 255, .1);

    i {
        font-size: ${props => props.theme.iconl};

        @media ${device.mobile} {
            font-size: ${props => props.theme.xl};
            order: 2;
        }
    }

    @media ${device.mobile} {
        flex-direction: row;
        border: none;
        border-bottom: 1px solid rgba(255, 255, 255, .1);
        padding: ${props => props.theme.ms} 0;
    }
`

export const StyledForecastDate = styled.h5`
    font-weight: normal;
    margin-bottom: 0;
    @media ${device.mobile} {
        order: 1;
        margin: 0;
    }
`

export const StyledForecastTemp = styled.h2`
   span {
     font-weight: normal;
   }

  @media ${device.mobile} {
    order: 3;
  }
`
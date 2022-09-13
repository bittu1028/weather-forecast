import styled from 'styled-components';
import { device } from '../../utils/device';

export const StyledContent = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: $xl-size;
  text-align: left;

  @media ${device.tablet} {
    width: 100%;
  }

  @media ${device.mobile} {
    padding: ${(props) => props.theme.ls};
    padding-bottom: ${(props) => props.theme.xl};
  }
`;

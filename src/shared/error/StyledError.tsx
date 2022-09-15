import styled from 'styled-components';
import { device } from '../../utils/device';

export const StyledErrorContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const StyledErrorTitle = styled.div`
  font-size: ${(props) => props.theme.ms};
  font-weight: 700;
`;



import styled from 'styled-components';
import { device } from '../../utils/device';
import { ReactComponent as SearchIconSvg } from '../../asset/icon/search.svg';

export const StyledSearchBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 40px 0 40px;
  border-radius: 26px;
  color: #000;
  background: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 3px;

  @media ${device.mobile} {
    width: 100%;
    position: absolute;
    padding: 0 20px 0 20px;
    background: rgb(255, 255, 255);
  }
`;

export const StyledInput = styled.input`
  color: #000;
  ::placeholder {
    color: green !important;
  }
  &:focus: {
    border: none !important
  }
  width: 100%;
`;

export const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  height: 100%;
  display: contents;
  &:hover svg {
  }
`;

export const StyledLogo = styled(SearchIconSvg)`
  margin-left: 1.2rem;
  fill: #4a6fa1;
`;

import styled from "styled-components";
import { device } from "../../utils/device";
import {ReactComponent as SearchIconSvg} from '../../asset/icon/search.svg';

const StyledSearchBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 40px 0 40px;
  border-radius: 26px;
  color: #000;
  background: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 3px;

  & input {
    color: #000;
    ::placeholder,
    ::-webkit-input-placeholder {
      color: red;
    }
    :-ms-input-placeholder {
      color: red;
    }
    width: 100%;
  }

  @media ${device.mobile} {
    width: 100%;
    position: absolute;
    right: 0;
    visibility: hidden;
    top: 60px;
    padding: 20px;
    opacity: 0;
    background: darken($purple, 10%);
  }
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

export const StyledHeaderContainer = styled.div`
  width: 100%;
  height: 80px;

  @media ${device.mobile} {
    height: 60px;
  }
`;

export const StyledLogo = styled(SearchIconSvg)`
  margin-left: 1.2rem;
  fill: #4a6fa1;
`;

export const StyledHeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  // justify-content: space-between;
  position: relative;

  @media ${device.desktop} {
    width: 1140px;
  }

  @media ${device.tablet} {
    width: 85%;
  }

  @media ${device.mobile} {
    width: 100%;
    padding: 0 $l-size;
  }
`;

export default StyledSearchBox;

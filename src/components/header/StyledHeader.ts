import styled from "styled-components";
import { device } from "../../utils/device";

const StyledSearchBox = styled.div`
  display: flex;
  width: 50%;
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
  margin: 0 ${props => props.theme.ss};
  background: greenyellow;
  color: #1a1a1a;

  &:hover {
    background: yellow;
  }
`;

export const StyledHeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  background: #2d2d73;
  position: fixed;
  top: 0;
  z-index: 10;

  @media ${device.mobile} {
    height: 60px;
  }
`;

export const StyledLogo = styled.div`
  h1 {
    margin: 0;

    @media ${device.mobile} {
      font-size: 2.5rem;
    }
  }
`;

export const StyledHeaderWrapper = styled.div`
  width: 70%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

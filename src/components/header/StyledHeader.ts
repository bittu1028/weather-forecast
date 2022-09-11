import styled from "styled-components";
import { device } from "../../utils/device";

export const StyledHeaderContainer = styled.div`
  width: 100%;
  height: 80px;

  @media ${device.mobile} {
    height: 60px;
  }
`;

export const StyledHeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
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


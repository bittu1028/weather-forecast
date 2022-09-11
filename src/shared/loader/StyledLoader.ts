import styled from "styled-components";

export const StyledLoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  background-color: rgba(255, 255, 255, 0.4);
  top: 0;
  left: 0;
  z-index: 5;
`;

export const StyledLoaderCircular = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid #fff;
  border-left: none;
  border-radius: 50%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  animation: spin 0.3s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

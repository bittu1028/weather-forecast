import styled from 'styled-components';

const StyledSearchBox = styled.div`
  display: flex;
  width: 50%;
  @media (max-width: $mobile) {
    width: 100%;
    position: absolute;
    right: 0;
    visibility: hidden;
    top: 60px;
    padding: 20px;
    opacity: 0;
    background: darken($purple, 10%);
  }
`


export const StyledButton = styled.button`
margin: 0 $s-size;
background: greenyellow;
color: #1a1a1a;

&:hover {
  background: darken(greenyellow, 10%);
}
`

export const StyledHeaderContainer = styled.div`
width: 100%;
height: 80px;
background: #2d2d73;
position: fixed;
top: 0;
z-index: 10;

@media (max-width: $mobile) {
  height: 60px;
}
`

export const StyledLogo = styled.div`
  h1 {
    margin: 0;
  
    @media (max-width: $mobile) {
      font-size: 2.5rem;
    }
  } 
`

export const StyledHeaderWrapper = styled.div`
width: 70%;
height: 100%;
margin: auto;
display: flex;
align-items: center;
justify-content: space-between;
position: relative;

@media (min-width: $desktop) {
  width: 1140px;
}

@media (max-width: $tablet) {
  width: 85%;
}

@media (max-width: $mobile) {
  width: 100%;
  padding: 0 $l-size;
}
`

export default StyledSearchBox;
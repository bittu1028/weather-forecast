import styled from 'styled-components';


type StyleWeatherProps = {
    bgImage: string;
}

const StyledWeather = styled.div<StyleWeatherProps>`
  background-size: cover;
  background-position: top center;
`

export default StyledWeather;
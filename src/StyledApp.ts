import { createGlobalStyle } from 'styled-components';

export const AppStyles = createGlobalStyle`
* {
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
}

body {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    background: linear-gradient(rgb(81, 233, 233) 0%, rgb(56, 200, 230) 100%) fixed;
}

button {
    font-size: 2rem;
    font-weight: bold;
    padding: 0 ;
    margin: 0 1.2rem;
    border: none;
}

button:disabled {
    opacity: .5;
}

button:hover {
    cursor: pointer;
}

button:focus {
    outline: none;
}   


input {
    border: none !important;
    position: relative;
    padding: 1.2rem;
}

`;

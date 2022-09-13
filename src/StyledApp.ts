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
    padding: 0 $m-size;
    margin: 0 $s-size;
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
    border: 1px solid rgba(255,255,255,.4) !important;
    position: relative;
    padding: $s-size;
  
    &:focus {
      border: 1px solid rgba(255,255,255,.7) !important;
    }
}

  
input::placeholder {
    color: rgba(255,255,255,.7) !important;
}



.loading {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
  }
  
  .loading__circular {
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
    animation: spin .3s linear infinite;
  }
  
@keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
.loaded {
    animation: fadeOut .5s ease;
  }
  
  @keyframes fadeOut {
    from { opacity: 0; } 
    to { opacity: 1; }
  }
`;
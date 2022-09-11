import React, { useEffect, useState } from "react";
// import './App.css';
import "./styles/style.scss";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import HomePage from "./container/HomePage";

function App() {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
          <HomePage />
      </ThemeProvider>
    </div>
  );
}

export default App;

import React from "react";
import Routes from "routes/Routes";
import { StyledEngineProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import "./App.scss";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Container className="app-container">
        <Routes />
      </Container>
    </StyledEngineProvider>
  );
}

export default App;

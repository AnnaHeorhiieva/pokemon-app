import React from "react";
import Routes from "routes/Routes";
import { StyledEngineProvider } from "@mui/material/styles";

import Container from "@mui/material/Container";

import styles from "./App.module.scss";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Container className={styles.appContainer}>
        <Routes />
      </Container>
    </StyledEngineProvider>
  );
}

export default App;

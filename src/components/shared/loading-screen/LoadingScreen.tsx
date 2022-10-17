import React from "react";

import Container from "@mui/material/Container";
import Spinner from "components/shared/spinner/Spinner";

import "./LoadingScreen.scss";

function LoadingScreen() {
  return (
    <Container className="loading-screen-container">
      <Spinner size={10} />
    </Container>
  );
}

export default LoadingScreen;

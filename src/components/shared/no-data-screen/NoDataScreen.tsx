import React from "react";

import noDataImage from "assets/no-data-image.svg";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import "./NoDataScreen.scss";

function NoDataScreen() {
  return (
    <Container className="no-data-screen-container">
      <Typography className="no-data-screen-message">
        No data is available. Please correct the spelling of your query and try
        again.
      </Typography>
      <img src={noDataImage} alt="no-data" />
    </Container>
  );
}

export default NoDataScreen;

import React from "react";

import BeatLoader from "react-spinners/BeatLoader";
import Container from "@mui/material/Container";

import "./Spinner.scss";

function Spinner(): JSX.Element {
  return (
    <Container className="spinner-container">
      <BeatLoader color="#F2726C" size={10} speedMultiplier={1.3} />
    </Container>
  );
}

export default Spinner;

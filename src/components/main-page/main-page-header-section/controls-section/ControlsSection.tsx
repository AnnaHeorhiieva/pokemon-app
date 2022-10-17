import React from "react";

import Container from "@mui/material/Container";
import ClearButton from "./clear-button/ClearButton";
import SortingButton from "./sorting-button/SortingButton";

import "./ControlsSection.scss";

function ControlsSection() {
  return (
    <Container className="controls-section-container">
      <SortingButton />
      <ClearButton />
    </Container>
  );
}

export default ControlsSection;

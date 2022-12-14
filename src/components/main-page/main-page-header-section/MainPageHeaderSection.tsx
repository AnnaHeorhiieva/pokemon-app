import React from "react";

import Container from "@mui/material/Container";
import SearchFieldSection from "./search-field-section/SearchFieldSection";
import ControlsSection from "./controls-section/ControlsSection";

import "./MainPageHeaderSection.scss";

function MainPageHeaderSection() {
  return (
    <Container className="main-page-header-section">
      <SearchFieldSection />
      <ControlsSection />
    </Container>
  );
}

export default MainPageHeaderSection;

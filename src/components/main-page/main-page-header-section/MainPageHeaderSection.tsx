import React from "react";

import Container from "@mui/material/Container";
import SearchFieldSection from "./search-field-section/SearchFieldSection";

import styles from "./MainPageHeaderSection.module.scss";
// import ControlsSection from "./controls-section/ControlsSection";

function MainPageHeaderSection() {
  return (
    <Container className={styles.mainPageHeaderSection}>
      <SearchFieldSection />
      {/* <ControlsSection/> */}
    </Container>
  );
}

export default MainPageHeaderSection;

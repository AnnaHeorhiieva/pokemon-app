import React from "react";

import Container from "@mui/material/Container";
import MainPageContentSection from "components/main-page/main-page-content-section/MainPageContentSection";
import MainPageHeaderSection from "components/main-page/main-page-header-section/MainPageHeaderSection";

import "./MainPage.scss";

function MainPage() {
  return (
    <Container className="main-page-container">
      <MainPageHeaderSection />
      <MainPageContentSection />
    </Container>
  );
}

export default MainPage;

import React from "react";

import { MainPokemonDetails } from "utils/helpers/getTransformedPokemonDetails";

import Container from "@mui/material/Container";
import MainDetailsBody from "./main-details-body/MainDetailsBody";
import MainDetailsHeader from "./main-details-header/MainDetailsHeader";

import "./MainDetailsSection.scss";

interface MainDetailsSectionProps {
  mainDetails: MainPokemonDetails;
}

function MainDetailsSection({ mainDetails }: MainDetailsSectionProps) {
  const { mainHeaderDetails, mainBodyDetails } = mainDetails;

  return (
    <Container className="main-details-section">
      <MainDetailsHeader mainHeaderDetails={mainHeaderDetails} />
      <MainDetailsBody mainBodyDetails={mainBodyDetails} />
    </Container>
  );
}

export default MainDetailsSection;

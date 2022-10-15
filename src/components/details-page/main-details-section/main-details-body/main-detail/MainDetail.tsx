import React from "react";

import { MUIIcon } from "utils/helpers/getTransformedPokemonDetails";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import "./MainDetail.scss";

interface MainDetailProps {
  mainDetailTitle: string;
  mainDetailValue: string;
  icon: MUIIcon;
}

function MainDetail({
  mainDetailTitle,
  mainDetailValue,
  icon: DetailIcon,
}: MainDetailProps) {
  return (
    <Container className="main-detail-container">
      <Container className="main-detail-icon-container">
        <Container className="main-detail-icon-background">
          <DetailIcon />
        </Container>
      </Container>
      <Container className="main-detail-info-container">
        <Typography className="main-detail">{mainDetailTitle}</Typography>
        <Typography className="main-detail">{mainDetailValue}</Typography>
      </Container>
    </Container>
  );
}

export default MainDetail;

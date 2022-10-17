import React from "react";

import { addIndexToString } from "utils/helpers/addIndexToString";
import { MainBodyPokemonDetails } from "utils/helpers/getTransformedPokemonDetails";

import Container from "@mui/material/Container";
import MainDetail from "./main-detail/MainDetail";

import "./MainDetailsBody.scss";

interface MainDetailsBodyProps {
  mainBodyDetails: MainBodyPokemonDetails;
}

function MainDetailsBody({ mainBodyDetails }: MainDetailsBodyProps) {
  const detailsMapCb = (arr: any) => arr.flat();
  const mainBodyDetailsArr = Object.entries(mainBodyDetails)?.map(detailsMapCb);

  const renderMainDetails = mainBodyDetailsArr?.map(
    ([mainDetailTitle, mainDetailValue, icon], index) => {
      const key = addIndexToString(mainDetailTitle, index);
      return (
        <MainDetail
          key={key}
          mainDetailTitle={mainDetailTitle}
          mainDetailValue={mainDetailValue}
          icon={icon}
        />
      );
    },
  );

  return (
    <Container className="main-details-body">{renderMainDetails}</Container>
  );
}

export default MainDetailsBody;

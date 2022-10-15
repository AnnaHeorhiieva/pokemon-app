import React from "react";

import { MainBodyPokemonDetails } from "utils/helpers/getTransformedPokemonDetails";
import { addIndexToString } from "utils/helpers/addIndexToString";

import Container from "@mui/material/Container";
import MainDetail from "./main-detail/MainDetail";

import styles from "./MainDetailsBody.module.scss";

interface MainDetailsBodyProps {
  mainBodyDetails: MainBodyPokemonDetails;
}

function MainDetailsBody({ mainBodyDetails }: MainDetailsBodyProps) {
  const mainBodyDetailsArray = Object.entries(mainBodyDetails)?.map((arr) =>
    arr.flat(),
  );

  const renderMainDetails = mainBodyDetailsArray?.map(
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
    <Container className={styles.mainDetailsBody}>
      {renderMainDetails}
    </Container>
  );
}

export default MainDetailsBody;

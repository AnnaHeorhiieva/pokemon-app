import React from "react";

import { SecondaryPokemonDetails } from "utils/helpers/getTransformedPokemonDetails";
import { addIndexToString } from "utils/helpers/addIndexToString";

import Container from "@mui/material/Container";
import SecondaryDetail from "./secondary-detail/SecondaryDetail";

import styles from "./SecondaryDetailsSection.module.scss";

interface SecondaryDetailsSectionProps {
  secondaryDetails: SecondaryPokemonDetails;
}

function SecondaryDetailsSection({
  secondaryDetails,
}: SecondaryDetailsSectionProps) {
  const secondaryDetailsArrays = Object.entries(secondaryDetails);

  const renderSecondaryDetails = secondaryDetailsArrays?.map(
    ([secondaryDetailTitle, secondaryDetailItems], index) => {
      const key = addIndexToString(secondaryDetailTitle, index);
      return (
        <SecondaryDetail
          key={key}
          secondaryDetailTitle={secondaryDetailTitle}
          secondaryDetailItems={secondaryDetailItems}
        />
      );
    },
  );

  return (
    <Container className={styles.secondaryDetailsSection}>
      {renderSecondaryDetails}
    </Container>
  );
}

export default SecondaryDetailsSection;

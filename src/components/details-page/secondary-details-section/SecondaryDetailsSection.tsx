import React from "react";

import { addIndexToString } from "utils/helpers/addIndexToString";
import { SecondaryPokemonDetails } from "utils/helpers/getTransformedPokemonDetails";

import Container from "@mui/material/Container";
import SecondaryDetail from "./secondary-detail/SecondaryDetail";

import "./SecondaryDetailsSection.scss";

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
    <Container className="secondary-details-section">
      {renderSecondaryDetails}
    </Container>
  );
}

export default SecondaryDetailsSection;

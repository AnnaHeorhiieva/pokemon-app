import React from "react";

import { addIndexToString } from "utils/helpers/addIndexToString";

import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import SecondaryDetailItem from "./secondary-detail-item/SecondaryDetailItem";

import "./SecondaryDetail.scss";

interface SecondaryDetailProps {
  secondaryDetailTitle: string;
  secondaryDetailItems: string[];
}

function SecondaryDetail({
  secondaryDetailTitle,
  secondaryDetailItems,
}: SecondaryDetailProps) {
  const renderSecondaryDetailItems = secondaryDetailItems?.map(
    (secondaryDetailItem, index) => {
      const key = addIndexToString(secondaryDetailItem, index);
      return (
        <SecondaryDetailItem
          key={key}
          secondaryDetailItem={secondaryDetailItem}
        />
      );
    },
  );

  return (
    <Container className="secondary-detail-container">
      <Typography className="secondary-detail-heading">
        {secondaryDetailTitle}
      </Typography>
      <Divider className="secondary-detail-divider" />
      <Container className="secondary-detail-items-container">
        {renderSecondaryDetailItems}
      </Container>
    </Container>
  );
}

export default SecondaryDetail;

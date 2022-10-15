import React from "react";

import { addIndexToString } from "utils/helpers/addIndexToString";

import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import SecondaryDetailItem from "./secondary-detail-item/SecondaryDetailItem";

import styles from "./SecondaryDetail.module.scss";

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
    <Container className={styles.secondaryDetailContainer}>
      <Typography className={styles.secondaryDetailHeading}>
        {secondaryDetailTitle}
      </Typography>
      <Divider className={styles.secondaryDetailDivider} />
      <Container className={styles.secondaryDetailItemsContainer}>
        {renderSecondaryDetailItems}
      </Container>
    </Container>
  );
}

export default SecondaryDetail;

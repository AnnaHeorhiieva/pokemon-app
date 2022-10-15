import React from "react";

import Chip from "@mui/material/Chip";

import styles from "./SecondaryDetailItem.module.scss";

interface SecondaryDetailItemProps {
  secondaryDetailItem: string;
}

function SecondaryDetailItem({
  secondaryDetailItem,
}: SecondaryDetailItemProps) {
  return (
    <Chip
      label={secondaryDetailItem}
      variant="outlined"
      className={styles.secondaryDetailItem}
    />
  );
}

export default SecondaryDetailItem;

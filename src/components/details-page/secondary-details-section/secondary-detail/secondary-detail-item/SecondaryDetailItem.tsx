import React from "react";

import Chip from "@mui/material/Chip";

import "./SecondaryDetailItem.scss";

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
      className="secondary-detail-item"
    />
  );
}

export default SecondaryDetailItem;

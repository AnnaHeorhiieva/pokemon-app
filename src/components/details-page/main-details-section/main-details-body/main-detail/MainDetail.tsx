import React from "react";

import { MUIIcon } from "utils/helpers/getTransformedPokemonDetails";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import styles from "./MainDetail.module.scss";

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
    <Container className={styles.mainDetailContainer}>
      <Container className={styles.mainDetailIconContainer}>
        <Container className={styles.mainDetailIconBackground}>
          <DetailIcon />
        </Container>
      </Container>
      <Container className={styles.mainDetailInfoContainer}>
        <Typography className={styles.mainDetail}>{mainDetailTitle}</Typography>
        <Typography className={styles.mainDetail}>{mainDetailValue}</Typography>
      </Container>
    </Container>
  );
}

export default MainDetail;

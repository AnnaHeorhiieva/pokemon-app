import React from "react";

import BeatLoader from "react-spinners/BeatLoader";
import Container from "@mui/material/Container";

import styles from "./Spinner.module.scss";

function Spinner(): JSX.Element {
  return (
    <Container className={styles.spinnerContainer}>
      <BeatLoader color="#F2726C" size={10} speedMultiplier={1.3} />
    </Container>
  );
}

export default Spinner;

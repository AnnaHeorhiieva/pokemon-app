import React from "react";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";

import styles from "./SearchFieldSection.module.scss";

function SearchFieldSection() {
  return (
    <Container className={styles.searchFieldSection}>
      <TextField
        autoFocus
        // inputProps={{ sx: additionalStyle }}
        // onChange={handleSearchInputChange}
        // onKeyDown={handleEnterClick}
        // placeholder={PLACEHOLDER}
        // value={cityQueried}
        className={styles.searchField}
      />
      <Button className={styles.searchButton}>SEARCH</Button>
    </Container>
  );
}

export default SearchFieldSection;

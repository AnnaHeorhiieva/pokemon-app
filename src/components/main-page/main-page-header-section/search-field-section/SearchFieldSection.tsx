import React from "react";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";

import "./SearchFieldSection.scss";

function SearchFieldSection() {
  return (
    <Container className="search-field-section">
      <TextField
        autoFocus
        // inputProps={{ sx: additionalStyle }}
        // onChange={handleSearchInputChange}
        // onKeyDown={handleEnterClick}
        // placeholder={PLACEHOLDER}
        // value={cityQueried}
        className="search-field"
      />
      <Button className="search-button">SEARCH</Button>
    </Container>
  );
}

export default SearchFieldSection;

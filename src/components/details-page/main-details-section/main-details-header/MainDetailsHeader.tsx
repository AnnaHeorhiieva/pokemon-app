import React from "react";
import { Link } from "react-router-dom";

import { MainHeaderPokemonDetails } from "utils/helpers/getTransformedPokemonDetails";

import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import styles from "./MainDetailsHeader.module.scss";

interface MainDetailsHeadeProps {
  mainHeaderDetails: MainHeaderPokemonDetails;
}

function MainDetailsHeader({ mainHeaderDetails }: MainDetailsHeadeProps) {
  const { photo, name } = mainHeaderDetails;

  return (
    <Container className={styles.mainDetailsHeader}>
      <Link to="/" className={styles.mainDetailsPagePointer}>
        <NavigateBeforeIcon />
      </Link>
      <img src={photo} alt={name} className={styles.pokemonPhoto} />
      <Typography className={styles.pokemonName}>{name}</Typography>
    </Container>
  );
}

export default MainDetailsHeader;

import React from "react";
import { Link } from "react-router-dom";

import { MainHeaderPokemonDetails } from "utils/helpers/getTransformedPokemonDetails";

import Container from "@mui/material/Container";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import Typography from "@mui/material/Typography";

import "./MainDetailsHeader.scss";

interface MainDetailsHeadeProps {
  mainHeaderDetails: MainHeaderPokemonDetails;
}

function MainDetailsHeader({ mainHeaderDetails }: MainDetailsHeadeProps) {
  const { photo, name } = mainHeaderDetails;

  return (
    <Container className="main-details-header">
      <Link to="/" className="main-details-page-pointer">
        <NavigateBeforeIcon />
      </Link>
      <img src={photo} alt={name} className="pokemon-photo" />
      <Typography className="pokemon-name">{name}</Typography>
    </Container>
  );
}

export default MainDetailsHeader;

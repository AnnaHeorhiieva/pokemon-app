import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import "./PokemonCard.scss";

interface PokemonCardProps {
  pokemonName: string;
  pokemonType: string;
}

function PokemonCard({ pokemonName, pokemonType }: PokemonCardProps) {
  const navigate = useNavigate();

  function handleCardClick() {
    navigate(`/${pokemonName}`);
  }

  return (
    <Card className="pokemon-card" onClick={handleCardClick}>
      <Container className="pokemon-card-text-container">
        <Typography className="pokemon-card-text">
          Name: {pokemonName}
        </Typography>
        <Typography className="pokemon-card-text">
          Type: {pokemonType}
        </Typography>
      </Container>
      <Button className="see-more-button">see more</Button>
    </Card>
  );
}

export default PokemonCard;

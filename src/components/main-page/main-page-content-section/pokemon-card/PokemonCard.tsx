import React from "react";
import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";

import styles from "./PokemonCard.module.scss";

interface PokemonCardProps {
  pokemonName: string;
}

function PokemonCard({ pokemonName }: PokemonCardProps) {
  const navigate = useNavigate();

  function handleCardClick() {
    navigate(`/${pokemonName}`);
  }

  return (
    <Card className={styles.pokemonCard} onClick={handleCardClick}>
      {pokemonName}
    </Card>
  );
}

export default PokemonCard;

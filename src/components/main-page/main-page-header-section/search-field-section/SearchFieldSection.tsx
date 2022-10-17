import React, { useState } from "react";
import { useAppDispatch } from "store/reduxHooks";

import { configurePokemonRequestUrl } from "utils/helpers/configureRequestUrl";
import { fetchSearchedPokemon } from "store/pokemons/thunks";
import { setMainPageMode } from "store/pokemons/actionCreators";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";

import "./SearchFieldSection.scss";

export const additionalStyle = {
  "&::placeholder": {
    color: "#222433",
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: "0.7rem",
  },
};

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
type EnterClickEvent = React.KeyboardEvent<HTMLInputElement>;

const DEFAULT_POKEMON = "";
const PLACEHOLDER = "Search pokemon by name...";
const SEARCH = "search";

function SearchFieldSection() {
  const [pokemonQueried, setPokemonQueried] = useState<string>(DEFAULT_POKEMON);

  const dispatch = useAppDispatch();

  function handleSearchFieldChange(event: InputChangeEvent) {
    const pokemon = event.target.value;
    setPokemonQueried(pokemon);
  }

  function handleSearchButtonClick() {
    const pokemonQueriedLowercased = pokemonQueried.toLowerCase();
    const url = configurePokemonRequestUrl(pokemonQueriedLowercased);
    dispatch(setMainPageMode(SEARCH));
    dispatch(fetchSearchedPokemon(url));
    setPokemonQueried(DEFAULT_POKEMON);
  }

  function handleEnterClick(event: EnterClickEvent) {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearchButtonClick();
    }
  }

  return (
    <Container className="search-field-section">
      <TextField
        inputProps={{ sx: additionalStyle }}
        onChange={handleSearchFieldChange}
        onKeyDown={handleEnterClick}
        placeholder={PLACEHOLDER}
        value={pokemonQueried}
        className="search-field"
        autoFocus
      />
      <Button className="search-button" onClick={handleSearchButtonClick}>
        SEARCH
      </Button>
    </Container>
  );
}

export default SearchFieldSection;

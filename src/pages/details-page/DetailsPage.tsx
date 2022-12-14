import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/reduxHooks";
import { useParams } from "react-router-dom";

import { configurePokemonRequestUrl } from "utils/helpers/configureRequestUrl";
import { getTransformedPokemonDetails } from "utils/helpers/getTransformedPokemonDetails";
import { fetchPokemon } from "store/pokemons/thunks";
import { pokemonDetailsSelector } from "store/pokemons/selectors";

import Container from "@mui/material/Container";
import MainDetailsSection from "components/details-page/main-details-section/MainDetailsSection";
import SecondaryDetailsSection from "components/details-page/secondary-details-section/SecondaryDetailsSection";

import "./DetailsPage.scss";

function DetailsPage() {
  const dispatch = useAppDispatch();

  const { pokemonName } = useParams() as { pokemonName: string };

  const initialPokemonObject = useAppSelector(pokemonDetailsSelector);
  const pokemonDetails = getTransformedPokemonDetails(initialPokemonObject);
  const { mainDetails, secondaryDetails } = pokemonDetails;

  useEffect(() => {
    const endpoint = configurePokemonRequestUrl(pokemonName);
    dispatch(fetchPokemon(endpoint));
    window.scrollTo(0, 0);
  }, [dispatch, pokemonName]);

  return (
    <Container className="details-page-container">
      <MainDetailsSection mainDetails={mainDetails} />
      <SecondaryDetailsSection secondaryDetails={secondaryDetails} />
    </Container>
  );
}

export default DetailsPage;

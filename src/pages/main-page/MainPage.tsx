import React, { useEffect } from "react";
import { useAppDispatch } from "store/reduxHooks";

import { fetchPokemons } from "store/pokemons/thunks";

import Container from "@mui/material/Container";
import MainPageContentSection from "components/main-page/main-page-content-section/MainPageContentSection";
import MainPageHeaderSection from "components/main-page/main-page-header-section/MainPageHeaderSection";

import "./MainPage.scss";

function MainPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const endpoint = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";
    dispatch(fetchPokemons(endpoint));
  }, [dispatch]);

  return (
    <Container className="main-page-container">
      <MainPageHeaderSection />
      <MainPageContentSection />
    </Container>
  );
}

export default MainPage;

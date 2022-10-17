import {
  Pokemon,
  PokemonAbility,
  PokemonMove,
  PokemonStat,
} from "utils/types/types";
import { SvgIcon } from "@mui/material";

import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import HeightIcon from "@mui/icons-material/Height";
import ScaleIcon from "@mui/icons-material/Scale";

import { addUnitsToNumericValues } from "./addUnitsToNumericValues";
import { formArrayOfNames } from "./formArrayOfNames";

export type MUIIcon = typeof SvgIcon;

export interface MainHeaderPokemonDetails {
  name: string;
  photo: string;
}

export interface MainBodyPokemonDetails {
  experience: [number, MUIIcon];
  height: [string, MUIIcon];
  weight: [string, MUIIcon];
}

export interface MainPokemonDetails {
  mainHeaderDetails: MainHeaderPokemonDetails;
  mainBodyDetails: MainBodyPokemonDetails;
}

export interface SecondaryPokemonDetails {
  [key: string]: string[];
  abilities: string[];
  moves: string[];
  stats: string[];
}

export interface PokemonDetails {
  mainDetails: MainPokemonDetails;
  secondaryDetails: SecondaryPokemonDetails;
}

export function getTransformedPokemonDetails(initialPokemonObject: Pokemon) {
  const { name, base_experience, height, weight } = initialPokemonObject;
  const { abilities, moves, stats, sprites } = initialPokemonObject;

  const nameUppercased = name?.toUpperCase();
  const photoOptions = sprites?.front_default ?? sprites?.front_shiny;
  const heightWithUnits = addUnitsToNumericValues(height, "decimetres");
  const weightWithUnits = addUnitsToNumericValues(weight, "hectograms");

  const mainHeaderDetails = { name: nameUppercased, photo: photoOptions };

  const mainBodyDetails = {
    experience: [base_experience, CatchingPokemonIcon],
    height: [heightWithUnits, HeightIcon],
    weight: [weightWithUnits, ScaleIcon],
  };

  const mainDetails = { mainHeaderDetails, mainBodyDetails };

  const secondaryDetails = {
    abilities: formArrayOfNames<PokemonAbility>(abilities, "ability"),
    moves: formArrayOfNames<PokemonMove>(moves, "move"),
    stats: formArrayOfNames<PokemonStat>(stats, "stat"),
  };

  return {
    mainDetails,
    secondaryDetails,
  } as PokemonDetails;
}

import React from "react";
import { useAppDispatch, useAppSelector } from "store/reduxHooks";

import { mainPageModeSelector } from "store/pokemons/selectors";
import { MainPageMode } from "store/pokemons/types";
import { setMainPageMode } from "store/pokemons/actionCreators";

import SortIcon from "@mui/icons-material/Sort";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import "./SortingButton.scss";

const TOOLTIP_MESSAGE = "Sort by type";

function SortingButton() {
  const dispatch = useAppDispatch();

  const mainPageMode = useAppSelector(mainPageModeSelector);

  function handleSortingButtonClick() {
    dispatch(setMainPageMode(MainPageMode.SORT));
    window.scrollTo(0, 0);
  }

  return (
    <Tooltip title={TOOLTIP_MESSAGE}>
      <IconButton
        type="button"
        className={
          mainPageMode === MainPageMode.SORT
            ? "sorting-button-active"
            : "sorting-button"
        }
        onClick={handleSortingButtonClick}
        disabled={mainPageMode === MainPageMode.SEARCH}
      >
        <SortIcon />
      </IconButton>
    </Tooltip>
  );
}

export default SortingButton;

import React from "react";
import { useAppDispatch, useAppSelector } from "store/reduxHooks";

import { setMainPageMode } from "store/pokemons/actionCreators";
import { mainPageModeSelector } from "store/pokemons/selectors";

import SortIcon from "@mui/icons-material/Sort";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import "./SortingButton.scss";

const TOOLTIP_MESSAGE = "Sort by type";
const SORT = "sort";
const SEARCH = "search";

function SortingButton() {
  const dispatch = useAppDispatch();

  const mainPageMode = useAppSelector(mainPageModeSelector);

  function handleSortingButtonClick() {
    dispatch(setMainPageMode(SORT));
    window.scrollTo(0, 0);
  }

  return (
    <Tooltip title={TOOLTIP_MESSAGE}>
      <IconButton
        type="button"
        className="sorting-button"
        onClick={handleSortingButtonClick}
        disabled={mainPageMode === SEARCH}
      >
        <SortIcon />
      </IconButton>
    </Tooltip>
  );
}

export default SortingButton;

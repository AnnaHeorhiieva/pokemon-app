import React from "react";
import { useAppDispatch } from "store/reduxHooks";

import { setMainPageMode } from "store/pokemons/actionCreators";

import IconButton from "@mui/material/IconButton";
import RestorePageIcon from "@mui/icons-material/RestorePage";
import Tooltip from "@mui/material/Tooltip";

import "./ClearButton.scss";

const TOOLTIP_MESSAGE = "Clear sort/search";
const COMMON = "common";

function ClearButton() {
  const dispatch = useAppDispatch();

  function handleClearButtonClick() {
    dispatch(setMainPageMode(COMMON));
    window.scrollTo(0, 0);
  }

  return (
    <Tooltip title={TOOLTIP_MESSAGE}>
      <IconButton
        type="button"
        className="clear-button"
        onClick={handleClearButtonClick}
      >
        <RestorePageIcon />
      </IconButton>
    </Tooltip>
  );
}

export default ClearButton;

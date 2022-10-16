import React from "react";

import BeatLoader from "react-spinners/BeatLoader";

import "./Spinner.scss";

interface SpinnerProps {
  color?: string;
  size?: number;
  speedMultiplier?: number;
  className?: string;
}

function Spinner({
  color = "#F2726C",
  size = 10,
  speedMultiplier = 1.3,
  className,
}: SpinnerProps): JSX.Element {
  return (
    <BeatLoader
      color={color}
      size={size}
      speedMultiplier={speedMultiplier}
      className={className}
    />
  );
}

export default Spinner;

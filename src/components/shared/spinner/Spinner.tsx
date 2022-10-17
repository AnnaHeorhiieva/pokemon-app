import React from "react";

import BeatLoader from "react-spinners/BeatLoader";

interface SpinnerProps {
  color?: string;
  size?: number;
  speedMultiplier?: number;
  className?: string;
}

const DEFAULT_SPINNER_COLOR = "#F2726C";
const DEFAULT_SPINNER_SIZE = 6;
const DEFAULT_SPINNER_SPEED = 1.3;

function Spinner({
  color = DEFAULT_SPINNER_COLOR,
  size = DEFAULT_SPINNER_SIZE,
  speedMultiplier = DEFAULT_SPINNER_SPEED,
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

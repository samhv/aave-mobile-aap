import React from "react";
import Logo from "../svgs/logo.svg"

type AaveLogoProps = {
  width?: number
  height?: number
}

export const AaveLogo = ({ width, height, ...props }: AaveLogoProps) => {
    return <Logo width={width} height={height} {...props} />;
};

AaveLogo.defaultProps = {
  width: 101,
  height: 35,
};

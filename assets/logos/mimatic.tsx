import * as React from "react";
import Svg, {
  Ellipse,
  Circle,
  G,
  Path,
  Defs,
  RadialGradient,
  Stop,
  LinearGradient,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const MIMATICLogo = (props) => (
  <Svg
    width={171}
    height={177}
    viewBox="0 0 171 177"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Ellipse
      opacity={0.84}
      cx={84.7629}
      cy={172.474}
      rx={56.7543}
      ry={4.42241}
      fill="url(#paint0_radial)"
    />
    <Circle cx={85.5} cy={85.5} r={85.5} fill="url(#paint1_linear)" />
    <Circle
      cx={85.5001}
      cy={85.5}
      r={68.2845}
      stroke="url(#paint2_linear)"
      strokeWidth={2}
    />
    <G filter="url(#filter0_d)">
      <Path
        d="M117.797 51.6981H109.464L84.9135 103.538L60.4526 51.6981H52.0302V120.205H61.3486V74.9087L82.6735 120.205H87.2431L108.478 74.9087V120.205H117.797V51.6981Z"
        fill="white"
      />
      <Path
        d="M38.3276 71.3725H131.497V81.1798H38.3276V71.3725Z"
        fill="white"
      />
      <Path d="M38.3305 93.4392H131.5V103.247H38.3305V93.4392Z" fill="white" />
    </G>
    <Defs>
      <RadialGradient
        id="paint0_radial"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(84.7629 172.474) rotate(90) scale(4.42241 56.7543)"
      >
        <Stop stopColor="#CB1922" />
        <Stop offset={0.296875} stopColor="#FF636B" />
        <Stop offset={1} stopColor="#FF636B" stopOpacity={0} />
      </RadialGradient>
      <LinearGradient
        id="paint1_linear"
        x1={85.5}
        y1={0}
        x2={85.5}
        y2={171}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFA6AA" />
        <Stop offset={0.205653} stopColor="#FB7C83" />
        <Stop offset={0.518899} stopColor="#FA515A" />
        <Stop offset={1} stopColor="#FF5C65" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear"
        x1={85.5001}
        y1={16.2155}
        x2={85.5001}
        y2={154.784}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E3252E" />
        <Stop offset={1} stopColor="#FF898F" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export {
    MIMATICLogo
}

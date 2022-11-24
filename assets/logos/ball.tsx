import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

/* SVGR has dropped some elements not supported by react-native-svg: title */
const BALLLogo = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" {...props}>
    <G id="Layer_2" data-name="Layer 2">
      <G id="Layer_1-2" data-name="Layer 1">
        <Path
          id="SVGID"
          d="M500,0c276.1,0,500,223.9,500,500s-223.9,500-500,500S0,776.1,0,500,223.9,0,500,0Z"
          style={{
            fill: "#1e1e1e",
            fillRule: "evenodd",
          }}
        />
        <Path
          id="SVGID-2"
          data-name="SVGID"
          d="M507.5,709C347.6,709,218,662.8,218,600.9c0-32.3,35.3-61.4,91.8-81.9,44.1,28.3,118.1,42.8,202,42.8,81.9,0,154.3-17.7,198.8-44.8,53.3,20.3,86.4,48.6,86.4,79.8,0,62-129.6,112.2-289.5,112.2Z"
          style={{
            fill: "#fff",
          }}
        />
        <Path
          id="SVGID-3"
          data-name="SVGID"
          d="M509.2,547.9c-121.2,0-219.5-38-219.5-84.9,0-26,30.3-49.3,77.8-64.8,33.9,17.7,84.7,29,141.7,29s107.8-11.3,141.7-29c47.6,15.6,77.8,38.8,77.8,64.8.1,46.9-98.2,84.9-219.5,84.9Z"
          style={{
            fill: "#fff",
          }}
        />
        <Path
          id="SVGID-4"
          data-name="SVGID"
          d="M508.4,413.1c-93.7,0-169.7-31.4-169.7-70s76-70,169.7-70,169.7,31.4,169.7,70-76,70-169.7,70Z"
          style={{
            fill: "#fff",
          }}
        />
      </G>
    </G>
  </Svg>
);

export {
    BALLLogo
}
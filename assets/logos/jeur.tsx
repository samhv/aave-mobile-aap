import * as React from "react";
import Svg, { G, Path, Polygon } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style, title, desc */

const JEURLogo= (props) => (
  <Svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 30 30"
    style={{
      enableBackground: "new 0 0 30 30",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <G>
      <Path
        id="Fill-1"
        className="st0"
        d="M30,15c0,8.3-6.7,15-15,15C6.7,30,0,23.3,0,15C0,6.7,6.7,0,15,0C23.3,0,30,6.7,30,15"
      />
      <Polygon
        id="Fill-4"
        className="st1"
        points="15,5.2 15.3,6.1 16.2,6.1 15.5,6.7 15.8,7.5 15,7 14.2,7.5 14.5,6.7 13.8,6.1 14.7,6.1  "
      />
      <Polygon
        id="Fill-6"
        className="st1"
        points="10.6,6.4 10.9,7.3 11.8,7.3 11,7.8 11.3,8.7 10.6,8.2 9.8,8.7 10.1,7.8 9.3,7.3 10.3,7.3  "
      />
      <Polygon
        id="Fill-8"
        className="st1"
        points="7.3,9.6 7.6,10.5 8.6,10.5 7.8,11 8.1,11.9 7.3,11.3 6.6,11.9 6.9,11 6.1,10.5 7,10.5  "
      />
      <Polygon
        id="Fill-10"
        className="st1"
        points="19.4,6.4 19.7,7.3 20.7,7.3 19.9,7.8 20.2,8.7 19.4,8.2 18.7,8.7 19,7.8 18.2,7.3  19.1,7.3  "
      />
      <Polygon
        id="Fill-12"
        className="st1"
        points="23.8,10.4 23,10.9 23.3,11.8 22.5,11.3 21.8,11.8 22.1,10.9 21.3,10.4 22.2,10.4  22.5,9.5 22.8,10.4  "
      />
      <Polygon
        id="Fill-14"
        className="st1"
        points="25,14.8 24.2,15.3 24.5,16.2 23.8,15.6 23,16.2 23.3,15.3 22.5,14.8 23.5,14.8  23.8,13.9 24,14.8  "
      />
      <Polygon
        id="Fill-16"
        className="st1"
        points="23.4,20.4 22.6,19.8 21.8,20.4 22.1,19.5 21.4,19 22.3,19 22.6,18.1 22.9,19 23.9,19  23.1,19.5  "
      />
      <Polygon
        id="Fill-18"
        className="st1"
        points="14.3,24.8 14.6,23.9 13.8,23.3 14.8,23.3 15.1,22.4 15.4,23.3 16.3,23.3 15.6,23.9  15.8,24.8 15.1,24.2  "
      />
      <Polygon
        id="Fill-20"
        className="st1"
        points="9.9,23.6 10.2,22.7 9.4,22.2 10.3,22.2 10.6,21.3 10.9,22.2 11.9,22.2 11.1,22.7  11.4,23.6 10.6,23.1  "
      />
      <Polygon
        id="Fill-22"
        className="st1"
        points="20.1,23.6 19.4,23 18.6,23.6 18.9,22.7 18.1,22.2 19.1,22.2 19.4,21.3 19.7,22.2  20.6,22.2 19.8,22.7  "
      />
      <Polygon
        id="Fill-24"
        className="st1"
        points="5,14.8 6,14.8 6.2,13.9 6.5,14.8 7.5,14.8 6.7,15.3 7,16.2 6.2,15.7 5.5,16.2 5.8,15.3  "
      />
      <Polygon
        id="Fill-26"
        className="st1"
        points="6.6,20.4 6.9,19.5 6.1,19 7.1,19 7.4,18.1 7.7,19 8.6,19 7.9,19.5 8.2,20.4 7.4,19.8  "
      />
    </G>
  </Svg>
);
export {
    JEURLogo
}
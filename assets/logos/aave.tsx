import * as React from "react"
import Svg, {
  Defs,
  Path,
  ClipPath,
  Use,
  G,
  LinearGradient,
  Stop,
  Circle
} from "react-native-svg"

function AaveLogo(props) {
  return (
    <Svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 800 800"
      xmlSpace="preserve"
      enableBackground="new 0 0 800 800"
      {...props}
    >
      <Defs>
        <Path id="SVGID_1_" d="M0 0H800V800H0z" />
      </Defs>
      <ClipPath id="SVGID_2_">
        <Use xlinkHref="#SVGID_1_" overflow="visible" />
      </ClipPath>
      <G id="b" clipPath="url(#SVGID_2_)">
        <LinearGradient
          id="SVGID_3_"
          gradientUnits="userSpaceOnUse"
          x1={-597.3553}
          y1={900.6861}
          x2={-598.0993}
          y2={900.0601}
          gradientTransform="matrix(776 0 0 -776 464237 699089)"
        >
          <Stop offset={0} stopColor="#b6509e" />
          <Stop offset={1} stopColor="#2ebac6" />
        </LinearGradient>
        <Circle cx={400} cy={400} r={388} fill="url(#SVGID_3_)" />
        <Path
          d="M569.8 554.6L438.6 237.4c-7.4-16.4-18.4-24.4-32.9-24.4h-11.6c-14.5 0-25.5 8-32.9 24.4l-57.1 138.2h-43.2c-12.9.1-23.4 10.5-23.5 23.5v.3c.1 12.9 10.6 23.4 23.5 23.5h23.2l-54.5 131.7c-1 2.9-1.6 5.9-1.6 9 0 7.4 2.3 13.2 6.4 17.7s10 6.7 17.4 6.7c4.9-.1 9.6-1.6 13.5-4.5 4.2-2.9 7.1-7.1 9.4-11.9l60-148.8h41.6c12.9-.1 23.4-10.5 23.5-23.5v-.6c-.1-12.9-10.6-23.4-23.5-23.5h-22.2l45.8-114.1 124.8 310.4c2.3 4.8 5.2 9 9.4 11.9 3.9 2.9 8.7 4.4 13.5 4.5 7.4 0 13.2-2.2 17.4-6.7 4.2-4.5 6.4-10.3 6.4-17.7.1-3-.4-6.1-1.6-8.9z"
          fill="#fff"
        />
      </G>
    </Svg>
  )
}

export {
    AaveLogo
}

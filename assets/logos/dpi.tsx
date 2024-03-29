import * as React from "react";
import Svg, { Rect, G, Circle, Path } from "react-native-svg";
const DPILogo = (props) => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect fill="#8150E6" width={40} height={40} rx={12} />
    <G transform="translate(4 4)">
      <Circle cx={16} cy={16} r={14} fill="#fff" />
      <Svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16z"
          fill="#8150E6"
        />
        <Path
          d="M10.946 23.752v2.2h5.91c4.787 0 8.644-3.988 8.644-8.876 0-3.046-1.497-5.742-3.783-7.342.27.392.512.806.72 1.24A8.466 8.466 0 0125 17.077c0 4.625-3.646 8.375-8.143 8.375h-5.41v-1.7h-.5z"
          fill="#fff"
        />
        <Path
          d="M18.548 11.803a5.322 5.322 0 00-1.746-.292H14.07v8.542h.5v-8.042h2.232c.792 0 1.542.192 2.208.533a5.144 5.144 0 00-.462-.74z"
          fill="#fff"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.67 23.252a7.924 7.924 0 002.928-.558c2.07-.82 3.733-2.486 4.587-4.586a8.573 8.573 0 00.629-3.233 8.502 8.502 0 00-1.456-4.78 8.367 8.367 0 00-.93-1.142C18.956 7.437 16.92 6.5 14.672 6.5H9.26v16.752h5.41zm5.085-10.237c.211.598.326 1.244.326 1.917 0 3.104-2.446 5.621-5.465 5.621h-2.732V9.311h2.732c1.887 0 3.55.983 4.532 2.478a5.659 5.659 0 01.607 1.226z"
          fill="#fff"
        />
      </Svg>
    </G>
  </Svg>
);
export {
    DPILogo
}

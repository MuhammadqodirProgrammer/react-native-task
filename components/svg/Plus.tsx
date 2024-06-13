import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const PlusSvg = (props: SvgProps) => (
  <Svg
    width={40}
    height={40}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 12h16m-8-8v16"
    />
  </Svg>
)
export default PlusSvg
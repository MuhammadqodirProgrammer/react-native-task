import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const GoBackSvg = (props: SvgProps) => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 16 16"
    {...props}
  >
    <Path
      // fill="#fff"
      d="M12 2a1 1 0 0 0-1.707-.707l-6 6a1 1 0 0 0 0 1.414l6 6a1 1 0 1 0 1.414-1.414L6.414 8l5.293-5.293A1 1 0 0 0 12 2zm0 0"
    />
  </Svg>
)
export default GoBackSvg

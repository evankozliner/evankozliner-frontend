import { Component } from 'react'
import { XSMALL_BREAKPOINT,
         SMALL_BREAKPOINT,
         MEDIUM_BREAKPOINT,
         LARGE_BREAKPOINT,
         XLARGE_BREAKPOINT } from '../constants/style-constants'

const breakpointMap = {
  xsmall: XSMALL_BREAKPOINT,
  small: SMALL_BREAKPOINT,
  medium: MEDIUM_BREAKPOINT,
  large: LARGE_BREAKPOINT,
  xlarge: XLARGE_BREAKPOINT
}

export default function dynamic(ComposedComponent) {
  return class Dynamic extends Component {
    static propTypes = ComposedComponent.propTypes
    static defaultProps = ComposedComponent.defaultProps
    
  }
}

import React, { Component, PropTypes, createElement } from 'react'
import Radium from 'radium'
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

// check to see if the string is a px or em value
function isPxOrEm(props, propName, componentName) {
  if (!/\d+(em|px)$/.test(props[propName])) {
    return new Error('Validation failed!');
  }
}

@Radium
export default class DynBody extends Component {
  static propTypes = {
    base: isPxOrEm,
    scale: PropTypes.number.isRequired,
    size: PropTypes.number,
    weight: PropTypes.oneOf(['bold', 'normal', '700', '600', '500', '400', '300']),
    sizeSmall: PropTypes.number,
    sizeMedium: PropTypes.number,
    sizeLarge: PropTypes.number,
    sizeXlarge: PropTypes.number
  }
  static defaultProps = { size: 0 }
  constructor(props) {
    super(props)
    this.state = {
      sizeSmall: false,
      sizeMedium: false,
      sizeLarge: false,
      sizeXlarge: false
    }
  }
  computeFontSize(value, unit, size) {
    return (value * Math.pow(this.props.scale, size)).toString() + unit
  }
  shouldScale(keys, width, breakpoint) {
    keys.forEach((key) => {
      if (this.props[key]) {
        if (width >= breakpoint && !this.state[key]) {
          this.setState({ [key]: true })
        } else if (width < breakpoint && this.state[key]) {
          this.setState({ [key]: false })
        }
      }
    })
  }
  shouldComponentScaleAtBreakpoint(breakpoint) {
    let windowWidth = window.innerWidth
    let propNames = []
    switch (breakpoint) {
      case SMALL_BREAKPOINT:
        if (this.props.sizeSmall) propNames.push('sizeSmall')
        this.shouldScale(propNames, windowWidth, SMALL_BREAKPOINT)
        break
      case MEDIUM_BREAKPOINT:
        if (this.props.sizeMedium) propNames.push('sizeMedium')
        this.shouldScale(propNames, windowWidth, MEDIUM_BREAKPOINT)
        break
      case LARGE_BREAKPOINT:
        if (this.props.sizeLarge) propNames.push('sizeLarge')
        this.shouldScale(propNames, windowWidth, LARGE_BREAKPOINT)
        break
      case XLARGE_BREAKPOINT:
        if (this.props.sizeXlarge) propNames.push('sizeXlarge')
        this.shouldScale(propNames, windowWidth, XLARGE_BREAKPOINT)
        break
      default:

    }
  }
  componentDidMount() {
    for (let key of Object.keys(this.props)) {
      let matches = key.match(/.*(Small|Medium|Large|Xlarge)$/)
      if (matches) {
        let breakpoint = matches[1].toLowerCase()
        this.shouldComponentScaleAtBreakpoint(breakpointMap[breakpoint])
        window.addEventListener('resize', this.shouldComponentScaleAtBreakpoint.bind(this, breakpointMap[breakpoint]))
      }
    }
  }
  componentWillUnmount() {
    for (let key of Object.keys(this.props)) {
      let matches = key.match(/.*(Small|Medium|Large|Xlarge)$/)
      if (matches) {
        let breakpoint = matches[1].toLowerCase()
        window.removeEventListener('resize', this.shouldComponentScaleAtBreakpoint.bind(this, breakpointMap[breakpoint]))
      }
    }
  }
  render() {
    let styles = {}
    let [ , base, baseUnit] = this.props.base.match(/^(\d+)(px|em)$/)
    return (
      <p style={[
          styles.base,
          { fontSize: this.computeFontSize(base, baseUnit, this.props.size) },
          this.props.weight && { fontWeight: this.props.weight },
          this.state.sizeSmall && { fontSize: this.computeFontSize(base, baseUnit, this.props.sizeSmall) },
          this.state.sizeMedium && { fontSize: this.computeFontSize(base, baseUnit, this.props.sizeMedium) },
          this.state.sizeLarge && { fontSize: this.computeFontSize(base, baseUnit, this.props.sizeLarge) },
          this.state.sizeXlarge && { fontSize: this.computeFontSize(base, baseUnit, this.props.sizeXlarge) }
        ]}>
        {this.props.children}
      </p>
    )
  }
}

const styles = {
  base: {

  }
}

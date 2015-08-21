import React, { Component, PropTypes } from 'react'
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
    constructor(props) {
      super(props)
      let state = {}
      for (let key of Object.keys(props)) {
        if (/.*(Small|Medium|Large|Xlarge)$/.test(key)) {
          state[key] = false
        }
      }
      this.state = state
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
      return <ComposedComponent {...this.props} state={this.state} />
    }
  }
}

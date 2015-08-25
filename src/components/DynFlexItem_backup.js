import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { connect } from 'react-redux'
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

@Radium
export default class DynFlexItem extends Component {
  static propTypes = {
    children: PropTypes.any,
    width: PropTypes.number,
    order: PropTypes.number,
    flexGrow: PropTypes.number,
    flexShrink: PropTypes.number,
    flexBasis: PropTypes.string,
    alignSelf: PropTypes.oneOf(['flexStart', 'flexEnd', 'center', 'baseline', 'stretch']),
    padding: PropTypes.string,
    flexGrowSmall: PropTypes.number,
    flexGrowMedium: PropTypes.number,
    flexGrowLarge: PropTypes.number,
    flexGrowXlarge: PropTypes.number,
    orderSmall: PropTypes.number,
    orderMedium: PropTypes.number,
    orderLarge: PropTypes.number,
    orderXlarge: PropTypes.number
  }
  constructor(props) {
    super(props)
    this.state = {
      flexGrowSmall: false,
      flexGrowMedium: false,
      flexGrowLarge: false,
      flexGrowXlarge: false,
      orderSmall: false,
      orderMedium: false,
      orderLarge: false,
      orderXlarge: false
    }
  }
  shouldApplyFlex(keys, width, breakpoint) {
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
  shouldComponentFlexAtBreakpoint(breakpoint) {
    let windowWidth = window.innerWidth
    let propNames = []
    switch (breakpoint) {
      case SMALL_BREAKPOINT:
        if (this.props.flexGrowSmall) propNames.push('flexGrowSmall')
        if (this.props.orderSmall) propNames.push('orderSmall')
        this.shouldApplyFlex(propNames, windowWidth, SMALL_BREAKPOINT)
        break
      case MEDIUM_BREAKPOINT:
        if (this.props.flexGrowMedium) propNames.push('flexGrowMedium')
        if (this.props.orderMedium) propNames.push('orderMedium')
        this.shouldApplyFlex(propNames, windowWidth, MEDIUM_BREAKPOINT)
        break
      case LARGE_BREAKPOINT:
        if (this.props.flexGrowLarge) propNames.push('flexGrowLarge')
        if (this.props.orderLarge) propNames.push('orderLarge')
        this.shouldApplyFlex(propNames, windowWidth, LARGE_BREAKPOINT)
        break
      case XLARGE_BREAKPOINT:
        if (this.props.flexGrowXlarge) propNames.push('flexGrowXlarge')
        if (this.props.orderXlarge) propNames.push('orderXlarge')
        this.shouldApplyFlex(propNames, windowWidth, XLARGE_BREAKPOINT)
        break
      default:

    }
  }
  componentDidMount() {
    for (let key of Object.keys(this.props)) {
      let matches = key.match(/.*(Small|Medium|Large|Xlarge)$/)
      if (matches) {
        let breakpoint = matches[1].toLowerCase()
        this.shouldComponentFlexAtBreakpoint(breakpointMap[breakpoint])
        window.addEventListener('resize', this.shouldComponentFlexAtBreakpoint.bind(this, breakpointMap[breakpoint]))
      }
    }
  }
  componentWillUnmount() {
    for (let key of Object.keys(this.props)) {
      let matches = key.match(/.*(Small|Medium|Large|Xlarge)$/)
      if (matches) {
        let breakpoint = matches[1].toLowerCase()
        window.removeEventListener('resize', this.shouldComponentFlexAtBreakpoint.bind(this, breakpointMap[breakpoint]))
      }
    }
  }
  render() {
    let toPercent = (width) => {
      return width.toString() + '%'
    }
    return (
      <div style={[
          styles.base,
          this.props.width && { width: toPercent(this.props.width) },
          this.props.order && { order: this.props.order },
          this.props.flexGrow && { flexGrow: this.props.flexGrow },
          this.props.flexShrink && { flexShrink: this.props.flexShrink },
          this.props.flexBasis && { flexBasis: this.props.flexBasis },
          this.props.alignSelf && styles.alignSelf[this.props.alignSelf],
          this.props.padding && { padding: `${this.props.padding} 0 0 ${this.props.padding}` },
          this.state.flexGrowSmall && { flexGrow: this.props.flexGrowSmall },
          this.state.flexGrowMedium && { flexGrow: this.props.flexGrowMedium },
          this.state.flexGrowLarge && { flexGrow: this.props.flexGrowLarge },
          this.state.flexGrowXlarge && { flexGrow: this.props.flexGrowXlarge },
          this.state.orderSmall && { order: this.props.orderSmall },
          this.state.orderMedium && { order: this.props.orderMedium },
          this.state.orderLarge && { order: this.props.orderLarge },
          this.state.orderXlarge && { order: this.props.orderXlarge }
        ]}>
        {this.props.children}
      </div>
    )
  }
}

const styles = {
  base: {
    transition: 'flex 300ms',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '0%'
  },
  alignSelf: {
    flexStart: {
      alignSelf: 'flex-start'
    },
    flexEnd: {
      alignSelf: 'flex-end'
    },
    center: {
      alignSelf: 'center'
    },
    baseline: {
      alignSelf: 'baseline'
    },
    stretch: {
      stretch: 'stretch'
    }
  }
}

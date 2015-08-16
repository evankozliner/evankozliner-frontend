import React, { Component, PropTypes } from 'react'
import ResponsiveMixin from 'react-responsive-mixin'
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
    stretchBreakpoint: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge'])
  }
  constructor(props) {
    super(props)
    this.state = {stretch: false}
  }
  shouldComponentExpand() {
    var windowWidth = window.innerWidth
    if (windowWidth <= breakpointMap[this.props.stretchBreakpoint]) {
      if (!this.state.stretch) this.setState({stretch: true})
    } else {
      if (this.state.stretch) this.setState({stretch: false})
    }
  }
  componentDidMount() {
    if (this.props.stretchBreakpoint) {
      this.shouldComponentExpand()
      window.addEventListener('resize', this.shouldComponentExpand.bind(this))
    }
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.shouldComponentExpand.bind(this))
  }
  render() {
    function toPercent(width) {
      return width.toString() + '%'
    }
    return (
      <div style={[
          styles.base,
          this.props.width && {width: toPercent(this.props.width)},
          this.props.order && {order: this.props.order},
          this.props.flexGrow && {flexGrow: this.props.flexGrow},
          this.state.stretch && styles.stretch
        ]}>
        {this.props.children}
      </div>
    )
  }
}

const styles = {
  base: {
    transition: 'width 300ms'
  },
  stretch: {
    width: '100%'
  }
}

import React, { Component, PropTypes } from 'react'
import ResponsiveMixin from 'react-responsive-mixin'
import Radium from 'radium'
import { connect } from 'react-redux'
import * as DynActions from '../actions/dyn-actions'
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

@connect(state => ({dynStretch: state.dynStretch}))
@Radium
export default class DynFlexItem extends Component {
  static propTypes = {
    children: PropTypes.any,
    width: PropTypes.number,
    widthMedium: PropTypes.number,
    order: PropTypes.number,
    flexGrow: PropTypes.number,
    stretchBreakpoint: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge'])
  }
  shouldComponentExpand() {
    var windowWidth = window.innerWidth
    if (windowWidth <= breakpointMap[this.props.stretchBreakpoint]) {
      if (!this.props.dynStretch) DynActions.truthifyStretch()
    } else {
      if (this.props.dynStretch) DynActions.falsifyStretch()
    }
  }
  componentDidMount() {
    if (this.props.stretchBreakpoint) {
      this.shouldComponentExpand()
      window.addEventListener('resize', e => {
        this.shouldComponentExpand()
      })
    }
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
          this.props.dynStretch && styles.stretch
        ]}>
        {this.props.children}
      </div>
    )
  }
}

const styles = {
  base: {
    backgroundColor: 'white',
    ':hover': {
      boxShadow: '0 0 3px rgba(0,0,0,0.5)'
    }
  },
  stretch: {
    width: '100%'
  }
}

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
    flexShrink: PropTypes.number,
    flexBasis: PropTypes.string,
    alignSelf: PropTypes.oneOf(['flexStart', 'flexEnd', 'center', 'baseline', 'stretch']),
    padding: PropTypes.string,
    flexGrowSmall: PropTypes.number,
    flexGrowMedium: PropTypes.number,
    flexGrowLarge: PropTypes.number,
    flexGrowXlarge: PropTypes.number,
    breakpoint: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge'])
  }
  constructor(props) {
    super(props)
    this.state = { 
      stretch: false,
      flexGrowSmall: false,
      flexGrowMedium: false,
      flexGrowLarge: false,
      flexGrowXlarge: false
    }
  }
  shouldComponentExpand() {
    let windowWidth = window.innerWidth
    if (windowWidth <= breakpointMap[this.props.breakpoint]) {
      if (!this.state.stretch) this.setState({ stretch: true })
    } else {
      if (this.state.stretch) this.setState({ stretch: false })
    }
  }
  shouldComponentFlexAtBreakpoint(breakpoint) {
    let windowWidth = window.innerWidth
    switch (breakpoint) {
      case XLARGE_BREAKPOINT:
        if (windowWidth >= XLARGE_BREAKPOINT && !this.state.flexGrowXlarge) {
          this.setState({ flexGrowXlarge: true })
        } else if (windowWidth < XLARGE_BREAKPOINT && this.state.flexGrowXlarge) {
          this.setState({ flexGrowXlarge: false })
        }
        break
      case LARGE_BREAKPOINT:
        if (windowWidth >= LARGE_BREAKPOINT && !this.state.flexGrowLarge) {
          this.setState({ flexGrowLarge: true })
        } else if (windowWidth < LARGE_BREAKPOINT && this.state.flexGrowLarge) {
          this.setState({ flexGrowLarge: false })
        }
        break
      case MEDIUM_BREAKPOINT:
        if (windowWidth >= MEDIUM_BREAKPOINT && !this.state.flexGrowMedium) {
          this.setState({ flexGrowMedium: true })
        } else if (windowWidth < MEDIUM_BREAKPOINT && this.state.flexGrowMedium) {
          this.setState({ flexGrowMedium: false })
        }
        break
      case SMALL_BREAKPOINT:
        if (windowWidth >= SMALL_BREAKPOINT && !this.state.flexGrowSmall) {
          this.setState({ flexGrowSmall: true })
        } else if (windowWidth < SMALL_BREAKPOINT && this.state.flexGrowSmall) {
          this.setState({ flexGrowSmall: false })
        }
        break
      default:
        
    }
  }
  componentDidMount() {
    if (this.props.breakpoint) {
      this.shouldComponentExpand()
      window.addEventListener('resize', this.shouldComponentExpand.bind(this))
    }
    if (this.props.flexGrowSmall) {
      this.shouldComponentFlexAtBreakpoint(SMALL_BREAKPOINT)
      window.addEventListener('resize', this.shouldComponentFlexAtBreakpoint.bind(this, SMALL_BREAKPOINT))
    }
    if (this.props.flexGrowMedium) {
      this.shouldComponentFlexAtBreakpoint(MEDIUM_BREAKPOINT)  
      window.addEventListener('resize', this.shouldComponentFlexAtBreakpoint.bind(this, MEDIUM_BREAKPOINT))
    }
    if (this.props.flexGrowLarge) {
      this.shouldComponentFlexAtBreakpoint(LARGE_BREAKPOINT)
      window.addEventListener('resize', this.shouldComponentFlexAtBreakpoint.bind(this, LARGE_BREAKPOINT))
    }
    if (this.props.flexGrowXlarge) {
      this.shouldComponentFlexAtBreakpoint(XLARGE_BREAKPOINT)
      window.addEventListener('resize', this.shouldComponentFlexAtBreakpoint.bind(this, XLARGE_BREAKPOINT))
    }
  }
  componentWillUnmount() {
    if (this.props.breakpoint) window.removeEventListener('resize', this.shouldComponentExpand.bind(this))
    if (this.props.flexGrowXlarge) window.removeEventListener('resize', this.shouldComponentFlexAtBreakpoint.bind(this, XLARGE_BREAKPOINT))
    if (this.props.flexGrowLarge) window.removeEventListener('resize', this.shouldComponentFlexAtBreakpoint.bind(this, LARGE_BREAKPOINT))
    if (this.props.flexGrowMedium) window.removeEventListener('resize', this.shouldComponentFlexAtBreakpoint.bind(this, MEDIUM_BREAKPOINT))
    if (this.props.flexGrowSmall) window.removeEventListener('resize', this.shouldComponentFlexAtBreakpoint.bind(this, SMALL_BREAKPOINT))
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
          this.state.stretch && styles.stretch
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
  },
  stretch: {
    flexBasis: '100%'
  }
}

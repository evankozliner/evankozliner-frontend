import React, { Component, PropTypes, addons, Children } from 'react/addons'
import { DynFlexItem as FlexItem } from './'
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

@Radium
export default class DynFlexContainer extends Component {
  static propTypes = {
    children: PropTypes.any,
    inline: PropTypes.bool,
    flexDirection: PropTypes.oneOf(['row', 'rowReverse', 'column', 'columnReverse']),
    flexWrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrapReverse']),
    justifyContent: PropTypes.oneOf(['flexStart', 'flexEnd', 'center', 'spaceBetween', 'spaceAround']),
    alignItems: PropTypes.oneOf(['stretch', 'flexStart', 'flexEnd', 'center', 'baseline']),
    alignContent: PropTypes.oneOf(['stretch', 'flexState', 'flexEnd', 'center', 'spaceBetween', 'spaceAround']),
    breakpoint: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
    gutter: PropTypes.string
  }
  constructor(props) {
    super(props)
    this.state = {
      breakpoint: false
    }
  }
  renderChildren() {
    return Children.map(this.props.children, (child) => {
      if (child.type === FlexItem) {
        let props = {}
        if (this.props.gutter) props.padding = this.props.gutter
        return addons.cloneWithProps(child, props)
      } else {
        return child
      }
    })
  }
  shouldComponentbreakpoint() {
    let windowWidth = window.innerWidth
    if (windowWidth <= breakpointMap[this.props.breakpoint]) {
      if (!this.state.breakpoint) this.setState({ breakpoint: true })
    } else {
      if (this.state.breakpoint) this.setState({ breakpoint: false })
    }
  }
  componentDidMount() {
    if (this.props.breakpoint) {
      this.shouldComponentbreakpoint()
      window.addEventListener('resize', this.shouldComponentbreakpoint.bind(this))
    }
  }
  componentWillUnmount() {
    if (this.props.breakpoint) window.removeEventListener('resize', this.shouldComponentbreakpoint.bind(this))
  }
  render() {
    return (
      <div style={[
          styles.base,
          this.props.inline && styles.inline,
          this.props.flexDirection && styles.flexDirection[this.props.flexDirection],
          this.props.flexWrap && styles.flexWrap[this.props.flexWrap],
          this.props.justifyContent && styles.justifyContent[this.props.justifyContent],
          this.props.alignItems && styles.alignItems[this.props.alignItems],
          this.props.alignContent && styles.alignContent[this.props.alignContent],
          this.props.gutter && { margin: `-${this.props.gutter} 0 ${this.props.gutter} -${this.props.gutter}` },
          this.state.breakpoint && styles.breakpoint
        ]}>
        {(this.props.gutter) ? this.renderChildren() : this.props.children}
      </div>
    )
  }
}

const styles = {
  base: {
    boxSizing: 'border-box',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  inline: {
    display: 'inline-flex'
  },
  flexDirection: {
    row: {
      flexDirection: 'row'
    },
    rowReverse: {
      flexDirection: 'row-reverse'
    },
    column: {
      flexDirection: 'column'
    },
    columnReverse: {
      flexDirection: 'column-reverse'
    }
  },
  flexWrap: {
    nowrap: {
      flexWrap: 'nowrap'
    },
    wrap: {
      flexWrap: 'wrap'
    },
    wrapReverse: {
      flexWrap: 'wrap-reverse'
    }
  },
  justifyContent: {
    flexStart: {
      justifyContent: 'flex-start'
    },
    flexEnd: {
      justifyContent: 'flex-end'
    },
    center: {
      justifyContent: 'center'
    },
    spaceBetween: {
      justifyContent: 'space-between'
    },
    spaceAround: {
      justifyContent: 'space-around'
    }
  },
  alignItems: {
    stretch: {
      alignItems: 'stretch'
    },
    flexStart: {
      alignItems: 'flex-start'
    },
    flexEnd: {
      alignItems: 'flex-end'
    },
    center: {
      alignItems: 'center'
    },
    baseline: {
      alignItems: 'baseline'
    }
  },
  alignContent: {
    stretch: {
      alignContent: 'stretch'
    },
    flexStart: {
      alignContent: 'flex-start'
    },
    flexEnd: {
      alignContent: 'flex-end'
    },
    center: {
      alignContent: 'center'
    },
    spaceBetween: {
      alignContent: 'space-between'
    },
    spaceAround: {
      alignContent: 'space-around'
    }
  },
  breakpoint: {
    flexDirection: 'column'
  }
}

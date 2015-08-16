import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

function widthPropType(props, propName, componentName) {
  if (props[propName] === undefined) return
  // regex matches fractions (1/2, up to 11/12) and percentages (50%, up to 100%)
  if (!(/^(([2-9]|1[0-1]?)\/([2-9]|1[0-2]?))|(([1-9][0-9]?|100)%)$/.test(props[propName])
      && (typeof props[propName] === 'string' || props[propName] instanceof String))) {
    return new Error('Validation failed!')
  }
}

@Radium
export default class DynGridColumn extends Component {
  static propTypes = {
    children: PropTypes.any,
    width: widthPropType,
    xsmallWidth: widthPropType,
    smallWidth: widthPropType,
    mediumWidth: widthPropType,
    largeWidth: widthPropType,
    xlargeWidth: widthPropType
  }
  render() {
    // gets width in the form
    function getAssociatedStyle(width) {
      console.log('width' + width.replace('%', ''))
      return 'width' + width.replace('%', '')
    }
    return (
      <div className="dyn-grid-column" style={[
          styles.base,
          this.props.width && styles[getAssociatedStyle(this.props.width)]
        ]}>
        {this.props.children}
      </div>
    )
  }
}

let styles = {
  base: {
    float: 'left'
  },
  width50: {
    width: '50%'
  },
  width25: {
    width: '25%'
  },
  xsmall: {
    '@media (max-width: 480px)': {
      width: '100%'
    }
  },
  small: {
    '@media (max-width: 768px)': {
      width: '100%'
    }
  },
  medium: {
    '@media (max-width: 992px)': {
      width: '100%'
    }
  },
  large: {
    '@media (max-width: 1200px)': {
      width: '100%'
    }
  },
  xlarge: {
    '@media (max-width: 1400px)': {
      width: '100%'
    }
  }
}

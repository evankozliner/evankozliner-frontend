import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

@Radium
export default class DynFlexContainer extends Component {
  static propTypes = {
    children: PropTypes.any,
    inline: PropTypes.bool,
    flexDirection: PropTypes.oneOf(['row', 'rowReverse', 'column', 'columnReverse']),
    flexWrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrapReverse']),
    justifyContent: PropTypes.oneOf(['flexStart', 'flexEnd', 'center', 'spaceBetween', 'spaceAround']),
    alignItems: PropTypes.oneOf(['stretch', 'flexStart', 'flexEnd', 'center', 'baseline'])
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
          this.props.alignContent && styles.alignContent[this.props.alignContent]
        ]}>
        {this.props.children}
      </div>
    )
  }
}

const styles = {
  base: {
    width: '100%',
    backgroundColor: '#eee',
    minHeight: 200,
    boxSizing: 'border-box',
    display: 'flex'
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
  }
}
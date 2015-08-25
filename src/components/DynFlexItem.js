import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { connect } from 'react-redux'
import dynamic from './dynamic'

@dynamic
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
    flexGrowXsmall: PropTypes.number,
    flexGrowSmall: PropTypes.number,
    flexGrowMedium: PropTypes.number,
    flexGrowLarge: PropTypes.number,
    flexGrowXlarge: PropTypes.number,
    orderXsmall: PropTypes.number,
    orderSmall: PropTypes.number,
    orderMedium: PropTypes.number,
    orderLarge: PropTypes.number,
    orderXlarge: PropTypes.number,
    data: PropTypes.object
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
          this.props.data.flexGrowXsmall && { flexGrow: this.props.flexGrowXsmall },
          this.props.data.flexGrowSmall && { flexGrow: this.props.flexGrowSmall },
          this.props.data.flexGrowMedium && { flexGrow: this.props.flexGrowMedium },
          this.props.data.flexGrowLarge && { flexGrow: this.props.flexGrowLarge },
          this.props.data.flexGrowXlarge && { flexGrow: this.props.flexGrowXlarge },
          this.props.data.orderXsmall && { order: this.props.orderXsmall },
          this.props.data.orderSmall && { order: this.props.orderSmall },
          this.props.data.orderMedium && { order: this.props.orderMedium },
          this.props.data.orderLarge && { order: this.props.orderLarge },
          this.props.data.orderXlarge && { order: this.props.orderXlarge }
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

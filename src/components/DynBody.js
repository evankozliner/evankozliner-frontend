import React, { Component, PropTypes, createElement } from 'react'
import Radium from 'radium'
import dynamic from './dynamic'
import { isPxOrEm, computeFontSize } from './DynUtility'

@dynamic
@Radium
export default class DynBody extends Component {
  static propTypes = {
    children: PropTypes.any,
    base: isPxOrEm,
    scale: PropTypes.number.isRequired,
    size: PropTypes.number,
    weight: PropTypes.oneOf(['bold', 'normal', '700', '600', '500', '400', '300']),
    sizeXsmall: PropTypes.number,
    sizeSmall: PropTypes.number,
    sizeMedium: PropTypes.number,
    sizeLarge: PropTypes.number,
    sizeXlarge: PropTypes.number,
    data: PropTypes.object
  }
  static defaultProps = { size: 0 }
  render() {
    let [ , base, baseUnit] = this.props.base.match(/^(\d+)(px|em)$/)
    return (
      <p style={[
          styles.base,
          this.props.size && { fontSize: computeFontSize(base, baseUnit, this.props.size, this.props.scale) },
          this.props.weight && { fontWeight: this.props.weight },
          this.props.data.sizeXsmall && { fontSize: computeFontSize(base, baseUnit, this.props.sizeXsmall, this.props.scale) },
          this.props.data.sizeSmall && { fontSize: computeFontSize(base, baseUnit, this.props.sizeSmall, this.props.scale) },
          this.props.data.sizeMedium && { fontSize: computeFontSize(base, baseUnit, this.props.sizeMedium, this.props.scale) },
          this.props.data.sizeLarge && { fontSize: computeFontSize(base, baseUnit, this.props.sizeLarge, this.props.scale) },
          this.props.data.sizeXlarge && { fontSize: computeFontSize(base, baseUnit, this.props.sizeXlarge, this.props.scale) }
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

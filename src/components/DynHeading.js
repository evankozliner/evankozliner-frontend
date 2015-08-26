import React, { Component, PropTypes, createElement } from 'react'
import dynamic from './dynamic'
import { isPxOrEm, computeFontSize } from './DynUtility'

@dynamic
export default class DynHeading {
  static propTypes = {
    base: isPxOrEm,
    scale: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
    weight: PropTypes.oneOf(['bold', 'normal', '700', '600', '500', '400', '300']),
    sizeXsmall: PropTypes.number,
    sizeSmall: PropTypes.number,
    sizeMedium: PropTypes.number,
    sizeLarge: PropTypes.number,
    sizeXlarge: PropTypes.number,
    data: PropTypes.object // passed down from dynamic
  }
  render() {
    let styles = { transition: 'font-size 300ms' }
    let [ , base, baseUnit] = this.props.base.match(/^(\d+)(px|em)$/)
    styles.fontSize = computeFontSize(base, baseUnit, this.props.size, this.props.scale)
    if (this.props.weight) styles.fontWeight = this.props.weight
    if (this.props.data.sizeXsmall) styles.fontSize = computeFontSize(base, baseUnit, this.props.sizeXsmall, this.props.scale)
    if (this.props.data.sizeSmall) styles.fontSize = computeFontSize(base, baseUnit, this.props.sizeSmall, this.props.scale)
    if (this.props.data.sizeMedium) styles.fontSize = computeFontSize(base, baseUnit, this.props.sizeMedium, this.props.scale)
    if (this.props.data.sizeLarge) styles.fontSize = computeFontSize(base, baseUnit, this.props.sizeLarge, this.props.scale)
    if (this.props.data.sizeXlarge) styles.fontSize = computeFontSize(base, baseUnit, this.props.sizeXlarge, this.props.scale)
    return (
      createElement(this.props.tag, { style: styles }, this.props.children)
    )
  }
}

import React, { Component, PropTypes, createElement } from 'react'
import dynamic from './dynamic'

// check to see if the string is a px or em value
function isPxOrEm(props, propName, componentName) {
  if (!/\d+(em|px)$/.test(props[propName])) {
    return new Error('Validation failed!')
  }
}

@dynamic
export default class DynHeading {
  static propTypes = {
    base: isPxOrEm,
    scale: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
    weight: PropTypes.oneOf(['bold', 'normal', '700', '600', '500', '400', '300']),
    sizeSmall: PropTypes.number,
    sizeMedium: PropTypes.number,
    sizeLarge: PropTypes.number,
    sizeXlarge: PropTypes.number
  }
  computeFontSize(value, unit, size) {
    return (value * Math.pow(this.props.scale, size)).toString() + unit
  }
  render() {
    console.log(this.props)
    let styles = {}
    let [ , base, baseUnit] = this.props.base.match(/^(\d+)(px|em)$/)
    styles.fontSize = this.computeFontSize(base, baseUnit, this.props.size)
    if (this.props.weight) styles.fontWeight = this.props.weight
    if (this.props.state.sizeSmall) styles.fontSize = this.computeFontSize(base, baseUnit, this.props.sizeSmall)
    if (this.props.state.sizeMedium) styles.fontSize = this.computeFontSize(base, baseUnit, this.props.sizeMedium)
    if (this.props.state.sizeLarge) styles.fontSize = this.computeFontSize(base, baseUnit, this.props.sizeLarge)
    if (this.props.state.sizeXlarge) styles.fontSize = this.computeFontSize(base, baseUnit, this.props.sizeXlarge)
    return (
      createElement(this.props.tag, { style: styles }, this.props.children)
    )
  }
}

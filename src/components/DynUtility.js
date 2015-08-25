let utils = {
  computeFontSize: function(value, unit, size, scale) {
    return (value * Math.pow(scale, size)).toString() + unit
  },
  isPxOrEm: function(props, propName, componentName) {
    if (!/\d+(em|px)$/.test(props[propName])) {
      return new Error('Validation failed!')
    }
  }
}

export default utils

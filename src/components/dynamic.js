import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
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

let prevWindowWidth = 0

export default function dynamic(ComposedComponent) {
  return class Dynamic extends Component {
    static propTypes = ComposedComponent.propTypes
    static defaultProps = ComposedComponent.defaultProps
    constructor(props) {
      super(props)
      this.handleResize = this.handleResize.bind(this)
      let state = {}
      for (let key of this.getDynamicProps()) {
        state[key] = false
      }
      state.prevWindowWidth = 0
      this.state = state
    }
    getDynamicProps(split) {
      let propNames = []
      for (let prop in this.props) {
        let propParts = prop.match(/^(.*)(Xsmall|Small|Medium|Large|Xlarge)$/)
        if (propParts && propParts.length === 3) {
          if (split) {
            propNames.push([propParts[1], propParts[2]])
          } else {
            propNames.push(propParts[0])
          }
        }
      }
      return propNames
    }
    handleResize() {
      let windowWidth = window.innerWidth
      let props = this.getDynamicProps(true)
      let minWidth = 'order,size,flexGrow'
      let maxWidth = 'collapse'
      props.forEach((prop) => {
        let breakpoint = breakpointMap[prop[1].toLowerCase()]
        let propName = prop[0] + prop[1]
        if (minWidth.indexOf(prop[0]) > -1) {
          if (windowWidth >= breakpoint) {
            if (!this.state[propName]) this.setState({ [propName]: true })
          } else {
            if (this.state[propName]) this.setState({ [propName]: false })
          }
        } else if (maxWidth.indexOf(prop[0]) > -1) {
          if (windowWidth < breakpoint) {
            if (!this.state[propName]) this.setState({ [propName]: true })
          } else {
            if (this.state[propName]) this.setState({ [propName]: false })
          }
        }
      })
    }
    componentDidMount() {
      this.handleResize()
      window.addEventListener('resize', this.handleResize)
    }
    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize)
    }
    render() {
      return <ComposedComponent {...this.props} data={this.state} />
    }
  }
}

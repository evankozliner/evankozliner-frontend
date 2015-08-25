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
    getDynamicProps(match) {
      return Object.keys(this.props).filter((key) => {
        if (match) {
          if (typeof match === 'string') {
            if (match === key) return key
          } else if (typeof match === 'object') { // regex
            if (match.test(key)) return key
          }
        } else {
          if (/^.*(Xsmall|Small|Medium|Large|Xlarge)$/.test(key)
              || key === 'collapse') {
            return key
          }
        }
      })
    }
    shouldAdapt(key, width, breakpoint, type) {
      if (type === 'max') {
        if (width >= breakpoint && this.state[key]) {
          this.setState({ [key]: false })
        } else if (width < breakpoint && !this.state[key]) {
          this.setState({ [key]: true })
        }
      } else {
        if (width >= breakpoint && !this.state[key]) {
          this.setState({ [key]: true })
        } else if (width < breakpoint && this.state[key]) {
          this.setState({ [key]: false })
        }
      }
    }
    shouldComponentAdaptToBreakpoint(key, breakpoint, e) {
      let windowWidth = window.innerWidth
      let type = 'min'
      if (key === 'collapse') type = 'max'
      this.shouldAdapt(key, windowWidth, breakpoint, type)
    }
    handleResize(e) {
      let windowWidth = window.innerWidth
      let props = []
      let expanding = (windowWidth - this.state.prevWindowWidth) > 0 ? true : false
      if (windowWidth >= XLARGE_BREAKPOINT) {
        if (expanding) props = this.getDynamicProps(/^.*(Xsmall|Small|Medium|Large|Xlarge)$/)
      } else if (windowWidth < XLARGE_BREAKPOINT && windowWidth >= LARGE_BREAKPOINT) {
        if (expanding) {
          props = this.getDynamicProps(/^.*(Xsmall|Small|Medium|Large)$/)
          if (this.props.collapse === 'large') props.push('collapse')
        } else {
          props = this.getDynamicProps(/^.*(Xlarge)$/)
          if (this.props.collapse === 'xlarge') props.push('collapse')
        }
      } else if (windowWidth < LARGE_BREAKPOINT && windowWidth >= MEDIUM_BREAKPOINT) {
        if (expanding) {
          props = this.getDynamicProps(/^.*(Xsmall|Small|Medium)$/)
          if (this.props.collapse === 'medium') props.push('collapse')
        } else {
          props = this.getDynamicProps(/^.*(Large|Xlarge)$/)
          if (this.props.collapse === 'large') props.push('collapse')
        }
      } else if (windowWidth < MEDIUM_BREAKPOINT && windowWidth >= SMALL_BREAKPOINT) {
        if (expanding) {
          props = this.getDynamicProps(/^.*(Xsmall|Small)$/)
          if (this.props.collapse === 'small') props.push('collapse')
        } else {
          props = this.getDynamicProps(/^.*(Medium|Large|Xlarge)$/)
          if (this.props.collapse === 'medium') props.push('collapse')
        }
      } else if (windowWidth < SMALL_BREAKPOINT && windowWidth >= XSMALL_BREAKPOINT) {
        if (expanding) {
          props = this.getDynamicProps(/^.*(Xsmall)$/)
          if (this.props.collapse === 'xsmall') props.push('collapse')
        } else {
          props = this.getDynamicProps(/^.*(Small|Medium|Large|Xlarge)$/)
          if (this.props.collapse === 'small') props.push('collapse')
        }
      } else {
        if (expanding) {
        } else {
          props = this.getDynamicProps(/^.*(Xsmall|Small|Medium|Large|Xlarge)$/)
          if (this.props.collapse === 'xsmall') props.push('collapse')
        }
      }
      props.forEach((prop) => {
        if (prop === 'collapse') {
          if (expanding) {
            this.setState({ [prop]: false })
          } else {
            this.setState({ [prop]: true })
          }
        } else {
          if (this.state[prop] !== expanding) this.setState({ [prop]: expanding })
        }
      })
      this.setState({ prevWindowWidth: windowWidth })
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

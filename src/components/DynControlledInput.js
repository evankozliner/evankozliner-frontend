import React, { Component, PropTypes, findDOMNode } from 'react'
import Radium from 'radium'

@Radium
export default class DynControlledInput extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    inputCallback: PropTypes.func,
    style: PropTypes.object,
    styleHover: PropTypes.object,
    styleFocus: PropTypes.object
  }
  constructor(props) {
    super(props)
    this.state = {
      styleHover: false,
      styleFocus: false
    }
  }
  mouseenterHandler(e) {
    this.setState({ styleHover: true })
  }
  mouseleaveHandler(e) {
    this.setState({ styleHover: false })
  }
  focusHandler() {
    this.setState({ styleFocus: true })
  }
  blurHandler() {
    this.setState({ styleFocus: false })
  }
  componentDidMount() {
    let ele = findDOMNode(this)
    ele.addEventListener('mouseenter', this.mouseenterHandler.bind(this))
    ele.addEventListener('mouseleave', this.mouseleaveHandler.bind(this))
    ele.addEventListener('focus', this.focusHandler.bind(this))
    ele.addEventListener('blur', this.blurHandler.bind(this))
  }
  componentWillUnmount() {
    let ele = findDOMNode(this)
    ele.removeEventListener('mouseenter', this.mouseenterHandler.bind(this))
    ele.removeEventListener('mouseleave', this.mouseleaveHandler.bind(this))
    ele.removeEventListener('focus', this.focusHandler.bind(this))
    ele.removeEventListener('blur', this.blurHandler.bind(this))
  }
  handleInputChange(e) {
    this.props.inputCallback(e)
  }
  render() {
    return (
      <input type={this.props.type}
             value={this.props.value}
             placeholder={this.props.placeholder}
             onChange={this.props.inputCallback ? this.handleInputChange.bind(this) : null}
             style={[
               styles.base,
               this.props.style && this.props.style,
               this.state.styleHover && this.props.styleHover,
               this.state.styleFocus && this.props.styleFocus
             ]}
        />
    )
  }
}

const styles = {
  base: {

  }
}

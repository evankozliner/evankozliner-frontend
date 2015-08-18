import React, { Component, PropTypes } from 'react'
import { DynWrapper } from './'
import { MAX_WIDTH } from '../constants/style-constants'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired
  }
  render() {
    let maxWidth = { maxWidth: MAX_WIDTH }
    return (
      <DynWrapper maxWidthStyle={maxWidth} >
        {this.props.children}
      </DynWrapper>
    )
  }
}

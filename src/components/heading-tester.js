import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { DynFlexContainer as FlexContainer, DynFlexItem as FlexItem } from './'

@Radium
export default class HeadingTest extends Component {
  render() {
    return (
      <div data-component="heading-test" style={[styles.base]}>
        <FlexContainer>
          <FlexItem flexGrow={2}>
            <span>hey</span>
          </FlexItem>
          <FlexItem flexGrow={5}>
            <span>hey</span>
          </FlexItem>
        </FlexContainer>
      </div>
    )
  }
}

const styles = {
  base: {
    margin: '15px 0',
    boxShadow: '0 0 3px rgba(0,0,0,0.5)'
  }
}

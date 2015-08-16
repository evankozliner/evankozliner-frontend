import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ExampleButton, DynFlexContainer as FlexContainer, DynFlexItem as FlexItem, ExampleItem } from './'
import * as ExampleActions from '../actions/example-actions'

@connect(state => ({ example: state.example }))
export default class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    example: PropTypes.any
  }
  render() {
    let { dispatch } = this.props
    console.log(this.props.example)
    return (
      <div className="home">
        <h1>React Boilerplate</h1>
        <span>{this.props.example.toString()}</span>
        <ExampleButton {...bindActionCreators(ExampleActions, dispatch)} />
        <h3>Flex Container</h3>
        <FlexContainer flexDirection="row" flexWrap="wrap" justifyContent="spaceBetween" alignItems="center">
          <FlexItem width={31} stretchBreakpoint="small">
            <ExampleItem><span>Item 1</span></ExampleItem>
          </FlexItem>
          <FlexItem width={31} stretchBreakpoint="small">
            <ExampleItem><span>Item 2</span></ExampleItem>
          </FlexItem>
          <FlexItem width={31} stretchBreakpoint="small">
            <ExampleItem><span>Item 3</span></ExampleItem>
          </FlexItem>
          <FlexItem width={31} stretchBreakpoint="small">
            <ExampleItem><span>Item 4</span></ExampleItem>
          </FlexItem>
          <FlexItem width={31} stretchBreakpoint="small">
            <ExampleItem><span>Item 5</span></ExampleItem>
          </FlexItem>
          <FlexItem width={31} stretchBreakpoint="small">
            <ExampleItem><span>Item 6</span></ExampleItem>
          </FlexItem>
        </FlexContainer>
      </div>
    )
  }
}

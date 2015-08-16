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
    return (
      <div className="home">
        <h1>React Boilerplate</h1>
        <span>{this.props.example.toString()}</span>
        <ExampleButton {...bindActionCreators(ExampleActions, dispatch)} />
        <h3>Flex Container</h3>
        <FlexContainer flexDirection="row" flexWrap="wrap" gutter="1em" breakpoint="xsmall">
          <FlexItem flexGrow={1} flexGrowSmall={2} flexGrowMedium={1} flexGrowLarge={1} flexGrowXlarge={5}>
            <ExampleItem><span>Item 1</span></ExampleItem>
          </FlexItem>
          <FlexItem flexGrow={1} flexGrowSmall={1} flexGrowMedium={3} flexGrowLarge={1} flexGrowXlarge={1}>
            <ExampleItem><span>Item 2</span></ExampleItem>
          </FlexItem>
          <FlexItem flexGrow={1} flexGrowSmall={2} flexGrowMedium={1} flexGrowLarge={5} flexGrowXlarge={1}>
            <ExampleItem><span>Item 3</span></ExampleItem>
          </FlexItem>
        </FlexContainer>
        <FlexContainer flexDirection="row" flexWrap="wrap" breakpoint="small">
          <FlexItem>
            <ExampleItem><span>Item 1</span></ExampleItem>
          </FlexItem>
          <FlexItem flexGrow={2}>
            <ExampleItem><span>Item 2</span></ExampleItem>
          </FlexItem>
          <FlexItem>
            <ExampleItem><span>Item 3</span></ExampleItem>
          </FlexItem>
        </FlexContainer>
      </div>
    )
  }
}

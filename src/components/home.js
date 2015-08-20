import React, { PropTypes, Component } from 'react'
import Radium from 'radium'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ExampleButton,
         DynFlexContainer as FlexContainer,
         DynFlexItem as FlexItem,
         DynHeading as Heading,
         DynBody as Body,
         ExampleInput,
         HeadingTester,
         ExampleItem } from './'
import * as ExampleActions from '../actions/example-actions'
import { GOLDEN_RATIO, MAJOR_SECOND } from '../constants/style-constants'

@connect(state => ({ example: state.example }))
@Radium
export default class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    example: PropTypes.any
  }
  render() {
    let { dispatch } = this.props
    return (
      <div data-component="home">
        <Heading base="1em" tag="h1" scale={GOLDEN_RATIO} weight='300' size={1} sizeSmall={2} sizeLarge={3}>dynamic</Heading>
        <blockquote>React Dynamic[ally]...</blockquote>
        <Body base="1em" scale={MAJOR_SECOND} sizeSmall={1}>
          dynamic is a collection of <a href="https://facebook.github.io/react/" title="react" target="_blank">React</a> components that enables you to build highly responsive web apps.
        </Body>
        <ExampleInput {...bindActionCreators(ExampleActions, dispatch)} />
        <HeadingTester />
        <span>{this.props.example.toString()}</span>
        <ExampleButton {...bindActionCreators(ExampleActions, dispatch)} />
        <h2>Layout</h2>
        <h3>Dynamic Widths</h3>
        <FlexContainer breakpoint="xsmall">
          <FlexItem flexGrow={1} flexGrowSmall={2} flexGrowMedium={1} flexGrowLarge={1} flexGrowXlarge={5}>
            <ExampleItem red />
          </FlexItem>
          <FlexItem flexGrow={1} flexGrowSmall={1} flexGrowMedium={3} flexGrowLarge={1} flexGrowXlarge={1}>
            <ExampleItem green />
          </FlexItem>
          <FlexItem flexGrow={1} flexGrowSmall={2} flexGrowMedium={1} flexGrowLarge={5} flexGrowXlarge={1}>
            <ExampleItem purple />
          </FlexItem>
        </FlexContainer>
        <h3>Dynamic Order</h3>
        <FlexContainer breakpoint="xsmall">
          <FlexItem order={3} orderSmall={1} orderMedium={1} orderLarge={2}>
            <ExampleItem red />
          </FlexItem>
          <FlexItem order={2} orderSmall={2} orderMedium={3} orderLarge={1}>
            <ExampleItem green />
          </FlexItem>
          <FlexItem order={1} orderSmall={3} orderMedium={2} orderLarge={3}>
            <ExampleItem purple />
          </FlexItem>
        </FlexContainer>
        <h3>Dynamic Widths and Order</h3>
        <FlexContainer breakpoint="xsmall">
          <FlexItem flexGrow={1} flexGrowSmall={2} flexGrowMedium={1} flexGrowLarge={1} flexGrowXlarge={5}
            order={3} orderSmall={1} orderMedium={1} orderLarge={2}>
            <ExampleItem red />
          </FlexItem>
          <FlexItem flexGrow={1} flexGrowSmall={1} flexGrowMedium={3} flexGrowLarge={1} flexGrowXlarge={1}
            order={2} orderSmall={2} orderMedium={3} orderLarge={1}>
            <ExampleItem green />
          </FlexItem>
          <FlexItem flexGrow={1} flexGrowSmall={2} flexGrowMedium={1} flexGrowLarge={5} flexGrowXlarge={1}
            order={1} orderSmall={3} orderMedium={2} orderLarge={3}>
            <ExampleItem purple />
          </FlexItem>
        </FlexContainer>
      </div>
    )
  }
}

const styles = {

}

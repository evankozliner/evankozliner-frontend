import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ExampleButton, DynFlexContainer as FlexContainer, DynFlexItem as FlexItem } from './'
import * as ExampleActions from '../actions/example-actions'

@connect(state => ({ example: state.example }))
export default class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }
  render() {
    let { dispatch } = this.props
    return (
      <div className="home">
        <h1>React Boilerplate</h1>
        <ExampleButton {...bindActionCreators(ExampleActions, dispatch)} />
        <FlexContainer flexDirection="row" flexWrap="wrap" justifyContent="spaceAround" alignItems="center" alignContent="stretch">
          <FlexItem width={30} widthMedium={100} stretchBreakpoint="small">
            <span>item1</span>
            <br />
            <br />
          </FlexItem>
          <FlexItem width={30} widthMedium={100} stretchBreakpoint="small">
            <span>item2</span>
            <br />
            <br />
          </FlexItem>
          <FlexItem width={30} widthMedium={100}>
            <span>item3</span>
            <br />
            <br />
          </FlexItem>
          <FlexItem width={30} widthMedium={100}>
            <span>item4</span>
            <br />
            <br />
          </FlexItem>
          <FlexItem width={30} widthMedium={100}>
            <span>item5</span>
            <br />
            <br />
          </FlexItem>
        </FlexContainer>
      </div>
    )
  }
}

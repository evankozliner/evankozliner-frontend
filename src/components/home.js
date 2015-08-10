import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ExampleButton, DynGridRow, DynGridColumn } from './'
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
        <DynGridRow>
          <DynGridColumn>
            <span>This is an item</span>
          </DynGridColumn>
          <DynGridColumn>
            <span>This is an item</span>
          </DynGridColumn>
        </DynGridRow>
      </div>
    )
  }
}

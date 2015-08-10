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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum erat metus, eget varius odio commodo sed. Praesent sapien tortor, vulputate non viverra quis, cursus sed tortor. Etiam hendrerit enim non fringilla dictum. In tempor condimentum suscipit. Praesent feugiat est orci, sit amet euismod arcu congue sed. Cras blandit augue est, nec ultricies magna elementum in. Donec hendrerit accumsan urna maximus vulputate. Nunc dignissim urna nisi, pretium euismod felis semper vel. Quisque aliquet hendrerit nulla id consequat. Suspendisse pulvinar dolor at urna lobortis blandit nec vitae felis. Maecenas feugiat vehicula sollicitudin. Mauris ante neque, hendrerit id velit vel, dapibus luctus risus. Aliquam non mauris vitae dui ullamcorper sodales et quis mi. Ut at tincidunt enim, vel feugiat nunc. Sed vestibulum, elit vel iaculis tincidunt, dolor magna efficitur tortor, ac tincidunt quam mauris quis massa. Aliquam pharetra condimentum odio, at pretium justo convallis vel.
        </p>
        {this.props.children}
      </DynWrapper>
    )
  }
}

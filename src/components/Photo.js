/* eslint-disable no-undef */
import React from 'react'
import PropTypes from 'prop-types'

export default class Photo extends React.Component {
  render() {
    const { image } = this.props
    return (
      <div>
        <img
          src={require(`../../public/images/${image.display_src}`).default}
          alt={image.caption} />
      </div>
    )
  }
}

Photo.propTypes = {
  image: PropTypes.object,
}

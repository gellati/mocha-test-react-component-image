import React from 'react'
import TestRenderer from 'react-test-renderer'
import expect from 'expect'
import Photo from '../../src/components/Photo'

// grab some data to use
import images from '../../data/images'

describe('Photo Component', function () {
  it('should return a figure element', () => {
    const props = {
      image: images[0],
    }

    const result = TestRenderer.create(<Photo {...props} />)
    console.log(result)
    expect(result.type).toEqual('figure')
  })
})

import React from 'react'
import renderer from 'react-test-renderer'
import ExperienceButton from "./experience-button"

// Read this: https://github.com/Popmotion/popmotion/issues/736
// And this: https://github.com/facebook/react/issues/7740#issuecomment-247335106

describe('experience-button', () => {
  it('Changes when selected', () => {
    const tree = renderer
      .create(<ExperienceButton text="Button" onClick={() => {}} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})

import React from 'react'
import ExperienceButton from './experience-button'
import { render } from 'react-testing-library'


describe('experience-button', () => {
  it('renders correctly while selected', () => {

    const { container } = render(
      <ExperienceButton text="Button" selected onClick={() => {}} />
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders correctly while not selected', () => {

    const { container } = render(
      <ExperienceButton text="Button" onClick={() => {}} />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})

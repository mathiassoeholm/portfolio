import React from 'react'
import { cleanup, render, wait } from "react-testing-library"
import ExperienceDescriptionText from "./experience-description-text"
import { ExperienceDescription } from "./experience_descriptions"

describe('experience-description-text', () => {

  it('renders the text set by setText', async () => {
    let setText: (experienceDescription: ExperienceDescription) => void = () => {}

    const { container } = render(
      <ExperienceDescriptionText
        setSetText={(s) => setText = s}
        delayOverride={jest.fn()}
      />
    )

    setText({
      title: 'Founder/Software Engineer',
      fullName: 'Mindfox Studios',
      period: 'Jun. 2018 - Present',
      description: [
        'Shipped two original mobile games, Space Loops and Sausage Throw.',
        'Worked with React Native to implement Odin ICE-Pro, from design to release in just three weeks.\n',
        'Mobile development consultancy for LEGO.',
        'Other clients include Stibo, Kamstrup, AKQA, Novo Nordisk and Destination Aarhus.',
      ],
    })

    // This will allow setText to finish
    await wait()

    expect(container.firstChild).toMatchSnapshot()

    cleanup()
  })
})

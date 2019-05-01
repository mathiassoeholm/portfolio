import React from 'react'
import { cleanup, render } from "react-testing-library"
import SkillMeter from "./skill-meter"
import { delay } from '@mathiassoeholm/js-utils/async'


describe('skill-meter', () => {
  it('cancels the animation frame when un-mounting', async () => {

    let startAnimation = () => {}

    render(
      <SkillMeter
        skill={'Java'}
        value={0.5}
        setStartAnimation={s => startAnimation = s}
      />
    )

    startAnimation()

    cleanup()

    const errorSpy = jest.spyOn(console, 'error')

    // If SkillMeter does not cancel the animation frame,
    // then delaying here will cause a frame to be run after the
    // component unmounted, which will log an error.
    await delay(50)

    expect(errorSpy).toBeCalledTimes(0)
  })
})

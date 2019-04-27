import React from 'react'
import { cleanup, render, wait } from "react-testing-library"
import SkillMeter from "./skill-meter"
import { sleep } from "../../utility/time-util"


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
    // then sleeping here will cause a frame to be run after the
    // component unmounted, which will log an error.
    await sleep(50)

    expect(errorSpy).toBeCalledTimes(0)
  })
})

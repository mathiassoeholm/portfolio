import { useEffect, useState } from "react"

interface AnimationConfig {
  updateFunc: UpdateFunc,
  duration: number,
  easing?: Easing,
  autoStart?: boolean,
}

type UpdateFunc = (t: number) => void
type Easing = (t: number) => number

export function useAnimation(config: AnimationConfig) {
  let autoStart = config.autoStart == undefined ? true : config.autoStart

  const [startedAnimation, setStartedAnimation] = useState(autoStart)

  useEffect(() => {
    if (!startedAnimation) {
      return
    }

    const startTime = Date.now()
    let currentFrame: number|undefined = undefined

    const update = () => {
      const elapsed = Date.now() - startTime
      let t = Math.min(1, elapsed/config.duration)

      if (config.easing) {
        t = config.easing(t)
      }

      config.updateFunc(t)

      if (elapsed < config.duration) {
        currentFrame = requestAnimationFrame(update)
      }
    }

    currentFrame = requestAnimationFrame(update)

    return () => {
      if (currentFrame != undefined) {
        cancelAnimationFrame(currentFrame)
      }
    }
  }, [startedAnimation])

  const startAnimation = () => {
    setStartedAnimation(true)
  }

  return { startAnimation }
}

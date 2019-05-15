import React, { useContext, useEffect, useState } from "react"
import posed from "react-pose"
import Spinner from "./spinner"
import classNames from 'classnames'

/*
 * Using a constant load duration.
 * Kind of a hacky way to make sure layout delays and
 * font flickering isn't visible.
 */
const LOAD_DURATION = 2000

const PosedDiv = posed.div();

export interface LoadingContextProps {
  isLoading: boolean
}

export const LoadingContext = React.createContext<LoadingContextProps>({ isLoading: true })

export const LoadingOverlay: React.FC = (props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [pose, setPose] = useState('hidden')

  useEffect(() => {
    const body = document.querySelector('body')!
    body.style.overflow = 'hidden'

    setTimeout(() => {
      body.style.overflow = 'visible'

      setIsLoading(false)
      setPose('visible')
    }, LOAD_DURATION)
  }, [])

  return (
      <LoadingContext.Provider value={{ isLoading }}>
        <Overlay />
        <PosedDiv pose={pose}>
          {props.children}
        </PosedDiv>
      </LoadingContext.Provider>
  )
}

const Overlay: React.FC = () => {
  const { isLoading } = useContext(LoadingContext)

  return (
    <div className={classNames(
      'loading-overlay',
      !isLoading && 'loading-overlay--hidden'
    )}>
      <Spinner />
    </div>
  )
}

export default LoadingOverlay

import React, { useEffect, useState } from "react"
import posed from "react-pose"

const LOAD_DURATION = 3000

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
    <>
      {isLoading && <Overlay />}
      <LoadingContext.Provider value={{ isLoading }}>
        <PosedDiv pose={pose}>
          {props.children}
        </PosedDiv>
      </LoadingContext.Provider>
    </>
  )
}

const Overlay: React.FC = () => {
  return (
    <div className="loading-overlay">
      <div>Loading...</div>
    </div>
  )
}

export default LoadingOverlay

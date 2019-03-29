import * as React from "react"
import Line from "./line"

const LandingPage: React.FC = () => {
  return (
    <div className={'pf-landing-page'}>
      <Line left={'10%'} height={'50%'} />
      <Line left={'60%'} height={'20%'} />
    </div>
  )
}

export default LandingPage;

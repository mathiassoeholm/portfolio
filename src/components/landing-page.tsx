import React, { useEffect, useState } from "react"
import Line from "./line"

const LandingPage: React.FC = () => {

  return (
    <div className={'pf-landing-page'}  >
      <Line left={'10%'} heightInRem={50} />
      <Line left={'60%'} heightInRem={20} />
    </div>
  )
}

export default LandingPage;

import React, { useEffect, useState } from "react"
import Line from "./line"
import posed from "react-pose"

const PosedDiv = posed.div({
  visible: {
    staggerChildren: 500,
  }
});

const LandingPage: React.FC = () => {

  const [pose, setPose] = useState('hidden');

  useEffect(() => {
    setPose('visible');
  });

  return (
    <PosedDiv className={'pf-landing-page'} pose={pose} >
      <Line left={'10%'} height={'50%'} />
      <Line left={'60%'} height={'20%'} />
    </PosedDiv>
  )
}

export default LandingPage;

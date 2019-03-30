import React, { useEffect, useState } from "react"
import Line from "./line"
import posed from "react-pose"
import JsonBio from "./json-bio"

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
      <Line left={'2.5%'} height={'50%'} />
      <Line left={'5%'} height={'40%'} />
      <JsonBio />
    </PosedDiv>
  )
}

export default LandingPage;

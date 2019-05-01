import React, { useEffect, useState } from "react"
import { Hidden } from "@material-ui/core"
import Easing from '../../utility/easing';
import posed from "react-pose"
import { useAnimation } from "../../hooks/use-animation"

const PosedP = posed.p({
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 300,
    },
  }
});

interface Props {
  skill: string,
  value: number,
  setStartAnimation: (startAnimation: () => void) => void,
}

const meterSize = 36;

const SkillMeter: React.FC<Props> = (props: Props) => {
  const [currentValue, setCurrentValue] = useState(0)

  const { startAnimation } = useAnimation({
    duration: 600,
    updateFunc: (t) => {
      setCurrentValue(props.value*t)
    },
    easing: Easing.easeOutQuad,
    autoStart: false,
  })

  useEffect(() => {
    props.setStartAnimation(startAnimation)
  }, [])

  const numSpaces = Math.max(0, Math.round(currentValue*meterSize)-1);
  const meterString = '='.repeat(numSpaces)+ '>' + ` `.repeat(meterSize-(numSpaces+1));

  return (
    <PosedP className={"pf-skill-meter"}>
      <span className={'pf-skill-meter-prefix'}>{props.skill}:&nbsp;</span>
      <Hidden only={['xl', 'lg', 'sm']}>
        <br/>
      </Hidden>
      <span>[{meterString}]</span>
    </PosedP>
  )
}

export default SkillMeter;

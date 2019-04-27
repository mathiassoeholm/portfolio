import React, { Component } from "react"
import { Hidden } from "@material-ui/core"
import Easing from '../../utility/easing';
import posed from "react-pose"

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

interface State {
  currentValue: number,
}

const meterSize = 36;
const animDuration = 600; // ms

class SkillMeter extends Component<Props> {

  state: State = {
    currentValue: 0,
  }

  animStart: number|undefined
  animFrame: number|undefined

  animationLoop = (time: number) => {
    if (!this.animStart) {
      this.animStart = time
    }

    const elapsedTime = time - this.animStart
    const t = elapsedTime/animDuration
    const eased = Math.min(1, Easing.easeOutQuad(t));

    this.setState({
      currentValue: Math.min(eased*this.props.value),
    });

    if (t < 1) {
      this.animFrame = requestAnimationFrame(this.animationLoop)
    }
  }

  componentDidMount(): void {
    this.props.setStartAnimation(this.startAnimation);
  }

  componentWillUnmount(): void {
    if (this.animFrame) {
      cancelAnimationFrame(this.animFrame)
    }
  }

  startAnimation = async () => {
    this.animFrame = requestAnimationFrame(this.animationLoop)
  }

  render() {
    const numSpaces = Math.max(0, Math.round(this.state.currentValue*meterSize)-1);
    const meterString = '='.repeat(numSpaces)+ '>' + ` `.repeat(meterSize-(numSpaces+1));

    return (
      <PosedP className={"pf-skill-meter"}>
        <span className={'pf-skill-meter-prefix'}>{this.props.skill}:&nbsp;</span>
        <Hidden only={['xl', 'lg', 'sm']}>
          <br/>
        </Hidden>
        <span>[{meterString}]</span>
      </PosedP>
    )
  }
}

export default SkillMeter;

import React, { Component } from "react"
import { Hidden } from "@material-ui/core"
import { sleep } from "../../utility/time-util"
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
const timeStep = 20; // ms

class SkillMeter extends Component<Props> {

  state: State = {
    currentValue: 0,
  }

  componentDidMount(): void {
    this.props.setStartAnimation(this.startAnimation);
  }

  startAnimation = async () => {
    await sleep(200);

    for (let t = 0; t < 1; t += timeStep / animDuration) {
      const eased = Math.min(1, Easing.easeOutQuad(t));
      this.setState({
        currentValue: Math.min(eased*this.props.value),
      });

      await sleep(timeStep);
    }

    this.setState({
      currentValue: this.props.value,
    });
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

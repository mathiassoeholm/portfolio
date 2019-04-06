import React, { Component } from "react"
import { Hidden } from "@material-ui/core"
import { sleep } from "../utility/time-util"
import Easing from '../utility/easing';

interface Props {
  skill: string,
  value: number,
  setStartAnimation: (startAnimation: () => void) => void,
}

interface State {
  currentValue: number,
}

const meterSize = 36;
const maxAnimDuration = 1000; // ms
const timeStep = 20; // ms

class SkillMeter extends Component<Props> {

  state: State = {
    currentValue: 0,
  }

  componentDidMount(): void {
    this.props.setStartAnimation(this.startAnimation);
  }

  startAnimation = async () => {
    for (let t = 0; t < 1; t += timeStep / maxAnimDuration) {
      const eased = Math.min(1, Easing.easeInQuad(t));
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
      <p className={"pf-skill-meter"}>
        <span className={'pf-skill-meter-prefix'}>{this.props.skill}:&nbsp;</span>
        <Hidden smUp>
          <br/>
        </Hidden>
        <span>[{meterString}]</span>
      </p>
    )
  }
}

export default SkillMeter;

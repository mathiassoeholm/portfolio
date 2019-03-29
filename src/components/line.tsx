import React, { Component, useEffect, useState } from "react"
import posed from "react-pose"
import { CurrentPose } from "react-pose/lib/components/PoseElement/types"

interface Props {
  left: string,
  heightInRem: number,
}

interface State {
  pose: string,
}

class Line extends Component<Props, State> {
  state: State = {
    pose: 'hidden',
  };

  PosedLine = posed.div({
    hidden: { height: '0%' },
    visible: {
      height: `${this.props.heightInRem}%`,
    },
    short: {
      height: `${this.props.heightInRem}%`,
      transition: {
        duration: 2000,
      },
    },
    long: {
      height: `${this.props.heightInRem+1}%`,
      transition: {
        duration: 2000,
      },
    }
  });

  PosedLineHead = posed.div({
    passive: {
      // Set opacity based on parents height
      opacity: [
        'height',
        (h: string) => h === '0%' ? 0 : 1,
        true, // Listen to parent
      ]
    },
  });

  constructor(props) {
    super(props);

    this.onPoseComplete = this.onPoseComplete.bind(this);
  }

  componentDidMount() {
    this.setState({ pose: 'visible' });
  }

  onPoseComplete(currentPose: CurrentPose) {
    switch (currentPose) {
      case 'visible':
        this.setState({ pose: 'long' })
        break;
      case 'short':
        this.setState({ pose: 'long' })
        break;
      case 'long':
        this.setState({ pose: 'short' })
        break;
    }
  }

  render() {
    return (
      <this.PosedLine
        className={'pf-line'}
        style={{ left: this.props.left }}
        pose={this.state.pose}
        onPoseComplete={this.onPoseComplete}
      >
        <this.PosedLineHead className={'pf-line-head'}/>
      </this.PosedLine>
    )
  }
}

export default Line;

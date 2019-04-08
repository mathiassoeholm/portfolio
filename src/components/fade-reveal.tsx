import React, { Component, ReactElement, useState } from "react"
import VisibilitySensor from 'react-visibility-sensor';
import posed from "react-pose"

interface Props {
  children: React.ReactNode,
  staggerChildren?: number | undefined,
  onBecomeVisible?: () => void,
  className?: string | undefined,
  duration?: number | undefined,
  delay?: number | undefined,
  yOffset: number | undefined,
  xOffset: number | undefined,
}

interface State {
  pose: string,
  wasVisibleBefore: boolean,
}

class FadeReveal extends Component<Props, State> {

  public static defaultProps = {
    yOffset: 80,
    xOffset: undefined,
  };

  state: State = {
    pose: 'hidden',
    wasVisibleBefore: false,
  }

  onChangeVisibility = (isVisible: boolean) => {
    if (isVisible && !this.state.wasVisibleBefore) {
      this.setState({
        pose: 'visible',
        wasVisibleBefore: true,
      })

      if (this.props.onBecomeVisible) {
        this.props.onBecomeVisible()
      }
    }
  }

  PosedDiv = posed.div({
    hidden: {
      opacity: 0,
      y: this.props.yOffset,
      x: this.props.xOffset,
    },
    visible: {
      opacity: 1,
      staggerChildren: this.props.staggerChildren,
      y: this.props.yOffset && 0,
      x: this.props.xOffset && 0,
      transition: {
        duration: this.props.duration || 500,
        delay: this.props.delay,
        ease: 'backOut',
      },
    },
  });

  render() {
    return (
      <VisibilitySensor onChange={this.onChangeVisibility} partialVisibility minTopValue={50}>
        <this.PosedDiv pose={this.state.pose} className={`${this.props.className} pf-fade-reveal`}>
          {this.props.children}
        </this.PosedDiv>
      </VisibilitySensor>
    )
  }
}

export default FadeReveal;

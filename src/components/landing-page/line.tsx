import React, { Component } from "react"
import posed from "react-pose"

interface Props {
  left: string,
  height: string,
  transform?: string | undefined
}

class Line extends Component<Props> {
  PosedLine = posed.div({
    hidden: {
      transform: `translateY(-105%) ${this.props.transform || ''}`,
    },
    visible: {
      transform: `translateY(0%) ${this.props.transform || ''}`,
      transition: {
        duration: 2000,
      },
    },
  });


  render() {
    return (
      <this.PosedLine
        className={'pf-line'}
        style={{ left: this.props.left, height: this.props.height }}
      >
        <div className={'pf-line-head'}/>
      </this.PosedLine>
    )
  }
}

export default Line;

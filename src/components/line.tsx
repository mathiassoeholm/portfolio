import React, { Component } from "react"
import posed from "react-pose"

interface Props {
  left: string,
  height: string,
}

class Line extends Component<Props> {
  PosedLine = posed.div({
    hidden: {
      height: '0%'
    },
    visible: {
      height: this.props.height,
      transition: {
        duration: 2000,
      },
    },
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


  render() {
    return (
      <this.PosedLine
        className={'pf-line'}
        style={{ left: this.props.left }}
      >
        <this.PosedLineHead className={'pf-line-head'}/>
      </this.PosedLine>
    )
  }
}

export default Line;

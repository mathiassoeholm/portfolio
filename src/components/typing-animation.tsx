import React, { Component } from "react"

interface Props {
  setSetText: (setText: (text: string) => void) => void,
}

class TypingAnimation extends Component<Props> {

  componentDidMount(): void {
    this.props.setSetText(this.setText);
  }

  setText = (text: string) => {
    console.log(`Setting text to ${text}`)
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default TypingAnimation;

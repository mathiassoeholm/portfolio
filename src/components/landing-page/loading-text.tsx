import React, { Component, ReactNode } from "react"
import { delay } from '@mathiassoeholm/js-utils/async'

interface Props {
  finalText: string,
  loadIterations: number,
  children?: ReactNode | undefined
  dontShowDots?: boolean | undefined
  extraDelay?: number | undefined
}

interface State {
  currentText: string,
  isDone: boolean,
}

class LoadingText extends Component<Props, State> {

  state: State = {
    currentText: '',
    isDone: false,
  }

  constructor(props: Props) {
    super(props);
    this.animate = this.animate.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount(): void {
    // noinspection JSIgnoredPromiseFromCall
    this.animate();
  }

  async animate() {
    for (let i = 0; i < this.props.loadIterations; i++) {
      for (let i = 0; i <= 3; i++) {
        if (!this.props.dontShowDots) {
          this.setState({currentText: '.'.repeat(i)});
        }

        await delay(150);
      }
    }

    if (this.props.extraDelay) {
      await delay(this.props.extraDelay);
    }

    for (let i = 0; i < this.props.finalText.length; i++) {
      this.setState({currentText: this.props.finalText.slice(0, i+1)});
      await delay(600/this.props.finalText.length);
    }

    this.setState({isDone: true});
  }

  render() {
    return (
      <span className={'pf-accent-text'}>
      {this.state.currentText}
      {this.state.isDone && this.props.children}
      </span>
    )
  }
}

export default LoadingText;

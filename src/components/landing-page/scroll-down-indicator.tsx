import React, { Component } from "react"
import ChevronIcon from "../../assets/icons/chevron-down-solid.svg"
import FadeReveal from "../fade-reveal"

class ScrollDownIndicator extends Component {

  onScroll = () => {
    const indicator = document.querySelector('.pf-scroll-down-indicator');
    if (indicator) {
      indicator.classList.add('pf-scroll-down-indicator--hidden');
    }
  }

  componentDidMount(): void {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillMount(): void {
    window.removeEventListener('scroll', this.onScroll);
  }

  render() {
    return (
      <FadeReveal delay={4600} ease={'easeOut'} noMovement >
        <ChevronIcon className={"pf-scroll-down-indicator"}/>
      </FadeReveal>
    );
  }
}

export default ScrollDownIndicator;

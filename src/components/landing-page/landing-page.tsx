import React, { Component, RefObject } from "react"
import Line from "./line"
import posed from "react-pose"
import JsonBio from "./json-bio"
import { Hidden } from "@material-ui/core"
import ResumeButton from "./resume-button"
import IconSection from "./icon-section"
import ScrollDownIndicator from "./scroll-down-indicator"

interface State {
  pose: string,
}

const PosedDiv = posed.div({
  visible: {
    staggerChildren: 250,
  }
});

class LandingPage extends Component<{}, State> {

  state: State = {
    pose: 'hidden',
  }

  scrollTargetRef: RefObject<HTMLDivElement> = React.createRef();

  componentDidMount(): void {
    // Use setTimeout with 0 because if we set pose to visible in this frame
    // the animation won't run, because the Hidden component hides the elements in the first frame.
    setTimeout(() => {
      this.setState({ pose: 'visible' });
    }, 0);
  }

  scrollToRef = () => {
    if ( this.scrollTargetRef.current != null) {
      window.scrollTo({
        top: this.scrollTargetRef.current.offsetTop,
        left: 0,
        behavior: 'smooth'
      });
    }
  }

  render() {
    return (
      <>
        <PosedDiv className={"pf-landing-page"} pose={this.state.pose}>
          <ResumeButton />
          <JsonBio/>
          <IconSection />
          <ScrollDownIndicator onClick={this.scrollToRef}/>
            <Hidden smDown>
            <Line left={"2.5%"} height={"50%"}/>
            <Line left={"5%"} height={"40%"}/>
            <Line left={"50%"} transform={"translate(-16em, 0)"} height={"50%"}/>
            <Line left={"50%"} transform={"translate(-13em, 0)"} height={"60%"}/>
            <Line left={"50%"} transform={"translate(-11.7em, 0)"} height={"17%"}/>
            <Line left={"100%"} transform={"translate(-18em, 0)"} height={"30%"}/>
            <Line left={"100%"} transform={"translate(-15em, 0)"} height={"40%"}/>
            <Line left={"100%"} transform={"translate(-13.4em, 0)"} height={"10%"}/>
          </Hidden>
          <Hidden mdUp>
            <Line left={"5%"} height={"10%"}/>
            <Line left={"100%"} transform={"translate(-12em, 0)"} height={"17%"}/>
            <Line left={"100%"} transform={"translate(-14em, 0)"} height={"8%"}/>
          </Hidden>
        </PosedDiv>
        <div ref={this.scrollTargetRef}/>
      </>
    );
  }
}

export default LandingPage;

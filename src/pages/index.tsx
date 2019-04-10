import React, { Component, useState } from "react"

import SEO from "../components/seo"
import { Helmet } from "react-helmet"
import GridLayout from "../components/grid-layout"
import ProjectGreenSection from "../components/project-green/project-green-section"
import EtherWalletSection from "../components/ether-wallet/ether-wallet-section"

interface State {
  didLoad: boolean
}

class IndexPage extends Component<{}, State> {

  state: State = {
    didLoad: false,
  }

  componentDidMount(): void {
    const loader = document.querySelector('.pf-page-loader-container');
    setTimeout(() => {
      if (!loader) {
        return;
      }

      loader.classList.add('pf-page-loader-container--hide');

      this.setState({ didLoad: true });

      setTimeout(() => {
        loader.parentNode.removeChild(loader);
      }, 300)
    }, 1000);
  }

  render() {
    if (this.state.didLoad) {
      return (
        <div>
          <Helmet>
            <link
              href="https://fonts.googleapis.com/css?family=Source+Code+Pro"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Montserrat"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Roboto:300,400"
              rel="stylesheet"
            />
          </Helmet>
          <SEO title={"Hire Mathias"}/>
          <GridLayout/>
          <ProjectGreenSection/>
          <EtherWalletSection/>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default IndexPage

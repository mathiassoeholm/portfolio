import React, { Component } from "react"

import SEO from "../components/seo"
import { Helmet } from "react-helmet"
import GridLayout from "../components/grid-layout"
import ProjectGreenSection from "../components/project-green/project-green-section"
import EtherWalletSection from "../components/ether-wallet/ether-wallet-section"
import SpaceLoopsSection from "../components/space-loops/space-loops-section"
import smoothscroll from 'smoothscroll-polyfill';
import LoadingOverlay from "../components/loading-overlay"

if (typeof window !== 'undefined') {
  smoothscroll.polyfill();
}

class IndexPage extends Component {
  render() {
    return (
      <LoadingOverlay>
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
        <SpaceLoopsSection />
      </LoadingOverlay>
    );
  }
}

export default IndexPage

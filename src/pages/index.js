import React from "react"

import LandingPage from "../components/landing-page"
import Section2 from "../components/section-2"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"

const IndexPage = () => (
  <div>
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro" rel="stylesheet" />
    </Helmet>
    <SEO title={'Landing Page'} />
    <LandingPage />
    <Section2 />
  </div>
);

export default IndexPage

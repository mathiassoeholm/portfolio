import React, { useState } from "react"

import LandingPage from "../components/landing-page"
import AboutSection from "../components/about-section"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"
import GridLayout from "../components/grid-layout"

const IndexPage = () => {
  const canCheckFonts = typeof document !== "undefined" && document.fonts
  const [didLoadFonts, setDidLoadFonts] = useState(false)

  if (!didLoadFonts && canCheckFonts) {
    document.fonts.ready.then(() => {
      setDidLoadFonts(true)
    })

    return <div className={"pf-landing-page"} />
  } else {
    return (
      <div>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Source+Code+Pro"
            rel="stylesheet"
          />
        </Helmet>
        <SEO title={"Landing Page"} />
        <GridLayout />
      </div>
    )
  }
}

export default IndexPage

import React, { useState } from "react"

import LandingPage from "../components/landing-page"
import Section2 from "../components/section-2"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"

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
        <LandingPage />
        <Section2 />
      </div>
    )
  }
}

export default IndexPage

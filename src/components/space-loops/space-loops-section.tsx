import React from 'react';
import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image';

const SpaceLoopsSection: React.FC = () => {
  const data = useStaticQuery(
    graphql`
      query {
        starsBackground: file(relativePath: { eq: "stars-tiling-background.png" }) {
          childImageSharp {
            fluid(maxWidth: 512) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        spaceLoopsLogo: file(relativePath: { eq: "space-loops-logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 636) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        spaceLoopsSplash: file(relativePath: { eq: "space-loops-splash.png" }) {
          childImageSharp {
            fluid(maxWidth: 1080) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  return (
    <div className={'pf-space-loops-gradient-background'}>
      <div
        className={'pf-space-loops-tiling-background'}
        style={{ backgroundImage: `url(${data.starsBackground.childImageSharp.fluid.src})`}}
      >
        <Img fluid={data.spaceLoopsLogo.childImageSharp.fluid} className={'pf-space-loops-logo'}/>
        <Img fluid={data.spaceLoopsSplash.childImageSharp.fluid} className={'pf-space-loops-splash'}/>
      </div>
    </div>
  );
}

export default SpaceLoopsSection;

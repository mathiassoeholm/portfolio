import React from 'react';
import { graphql, useStaticQuery } from "gatsby"

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
      }
    `
  );

  return (
    <div className={'pf-space-loops-gradient-background'}>
      <div
        className={'pf-space-loops-tiling-background'}
        style={{ backgroundImage: `url(${data.starsBackground.childImageSharp.fluid.src})`}}
      >

      </div>
    </div>
  );
}

export default SpaceLoopsSection;

import React from 'react';
import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image';
import { Grid } from "@material-ui/core"
import ImageRow from "../image-row"

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
      />
      <Img fluid={data.spaceLoopsLogo.childImageSharp.fluid} className={'pf-space-loops-logo'}/>
      <Img fluid={data.spaceLoopsSplash.childImageSharp.fluid} className={'pf-space-loops-splash'}/>
      <Grid container>
        <Grid item md={12} xs={12}>
          <ImageRow images={['spaceLoops01', 'spaceLoops02', 'spaceLoops03']} />
        </Grid>
        <Grid item md={12} xs={12}>

        </Grid>
      </Grid>
    </div>
  );
}

export default SpaceLoopsSection;

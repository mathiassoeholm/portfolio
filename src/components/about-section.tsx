import React from "react"
import SectionHeader, { SectionHeaderType } from "./section-header"
import { Grid } from "@material-ui/core"
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from "gatsby"

const AboutSection: React.FC = () => {

  const data = useStaticQuery(
    graphql`
      query {
        aboutImage: file(relativePath: { eq: "about-image.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  return (
    <div className={'pf-about-section'}>
      <SectionHeader type={SectionHeaderType.About} />
      <Grid container className={'pf-about-grid'}>
        <Grid item xs={12} sm={4}>
          <div className={'pf-about-image-container'}>
            <div className={'pf-about-image-background'}/>
            <Img fluid={data.aboutImage.childImageSharp.fluid} className={'pf-about-image'}/>
          </div>
        </Grid>
        <Grid item xs={12} sm={8}>
          <div className={'pf-about-text'}>
          <p>
            Hey there, I’m Mathias! I like building digital things that animate,
            look good and challenges me as a programmer. I have almost 10 years
            experience with developing highly polished mobile games and have
            shipped several titles in small and large teams.
          </p>
          <p>
            While completing my bachelors degree in Computer Science, I discovered
            that JavaScript was not all that bad and that building things in
            React is seriously awesome!
          </p>
          <p>
            React, TypeScript, Redux and WebStorm is now my favorite cocktail.
          </p>
          </div>
        </Grid>
      </Grid>
    </div>
  )
};

export default AboutSection;

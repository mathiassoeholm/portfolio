import React from "react"
import SectionHeader, { SectionHeaderType } from "./section-header"
import { Grid } from "@material-ui/core"


const AboutSection: React.FC = () => {
  return (
    <div className={'pf-about-section'}>
      <SectionHeader type={SectionHeaderType.About} />
      <Grid container className={'pf-about-grid'}>
        <Grid item xs={12} sm={5} className={'pf-about-image'}>

        </Grid>
        <Grid item xs={12} sm={7}>
          <div className={'pf-about-text'}>
          <p>
            Hey there, I’m Mathias! I like building digital things that animate,
            look good and challenges me as a programmer. I have almost 10 years
            experience with developing highly polished mobile games and have
            shipped several titles in small and large teams.
          </p>
          <p>
            While completing my bachelors degree in Computer Sciene, I discovered
            that JavaScript was not all that bad and that building things in
            React is seriously awesome!
          </p>
          <p>
            React, TypeScript, Redux and Webstorm is now my favorite cocktail.
          </p>
          </div>
        </Grid>
      </Grid>
    </div>
  )
};

export default AboutSection;

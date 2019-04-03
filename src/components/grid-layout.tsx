import React from 'react';
import { Grid } from "@material-ui/core"
import LandingPage from "./landing-page"
import AboutSection from "./about-section"
import SkillsSection from "./skills-section"
import ExperienceSection from "./experience-section"

const GridLayout: React.FC = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <LandingPage />
      </Grid>
      <Grid item xs={12}>
        <AboutSection />
      </Grid>
      <Grid item xs={12} md={6}>
        <SkillsSection />
      </Grid>
      <Grid item xs={12} md={6}>
        <ExperienceSection />
      </Grid>
    </Grid >
  );
}

export default GridLayout;

import React from 'react';
import { Grid } from "@material-ui/core"
import LandingPage from "./landing-page/landing-page"
import AboutSection from "./about-section"
import SkillsSection from "./skill-section/skills-section"
import ExperienceSection from "./experience-section/experience-section"
import ProjectGreenSection from "./project-green/project-green-section"

const GridLayout: React.FC = () => {
  return (
    <div className={'pf-grid-layout-container'}>
      <Grid container className={'pf-grid-layout'}>
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
    </div>
  );
}

export default GridLayout;

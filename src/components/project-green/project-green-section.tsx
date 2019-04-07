import React from 'react';
import ProjectGreenLogo from '../../assets/project-green.svg'
import ProjectGreenDescription from "./project-green-description"
import { Hidden } from "@material-ui/core"
import GithubButton from "../github-button"

const ProjectGreenSection: React.FC = () => {
  return (
    <div className={'pf-project-green-background'}>
      <div className={'pf-project-green-content'}>
        <div className={'pf-project-green-top-row '}>
          <div className={'pf-project-green-logo-container'} >
            <ProjectGreenLogo className={'pf-project-green-logo'} />
            <GithubButton repoIdentifier={'project-green'} color={'#1FB74A'}/>
          </div>
          <Hidden smDown>
            <ProjectGreenDescription />
          </Hidden>
        </div>
        <div className={'pf-project-green-images-row '}>

        </div>
        <Hidden mdUp>
          <ProjectGreenDescription />
        </Hidden>
      </div>
    </div>
  );
}

export default ProjectGreenSection;

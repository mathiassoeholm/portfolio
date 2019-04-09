import React from 'react';
import ProjectGreenLogo from '../../assets/project-green.svg'
import ProjectGreenDescription from "./project-green-description"
import { Hidden } from "@material-ui/core"
import GithubButton from "../github-button"
import ProjectGreenImageRow from "./project-green-image-row"
import ClippedSectionPart from "../clipped-section-part"

const ProjectGreenSection: React.FC = () => {
  return (
    <div>
      <ClippedSectionPart topRight={6}/>
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
          <ProjectGreenImageRow />
          <Hidden mdUp>
            <ProjectGreenDescription />
          </Hidden>
        </div>
      </div>
    </div>
  );
}

export default ProjectGreenSection;

import React from 'react';
import ProjectGreenLogo from '../../assets/project-green.svg'
import ProjectGreenDescription from "./project-green-description"
import { Hidden } from "@material-ui/core"
import GithubButton from "../github-button"
import ClippedSectionPart from "../clipped-section-part"
import ImageRow from "../image-row"

const ProjectGreenSection: React.FC = () => {
  return (
    <>
      <ClippedSectionPart topRight={6} className={'pf-project-green-clip-part'} color={'#1FB74A'}/>
      <div className={'pf-project-green-background'}>
        <div className={'pf-project-green-content'}>
          <div className={'pf-project-green-top-row '}>
            <div className={'pf-project-green-logo-container'} >
              <ProjectGreenLogo className={'pf-project-green-logo'} />
              <GithubButton repoIdentifier={'project-green'} />
            </div>
            <Hidden smDown>
              <ProjectGreenDescription />
            </Hidden>
          </div>
          <ImageRow
            images={['projectGreen01', 'projectGreen02', 'projectGreen03', 'projectGreen04']}
            imageClassName={'pf-scale-up-on-hover'}
          />
          <Hidden mdUp>
            <ProjectGreenDescription />
          </Hidden>
        </div>
      </div>
    </>
  );
}

export default ProjectGreenSection;

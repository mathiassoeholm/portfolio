import React from 'react';
import ProjectLogos from "../project-logos"
import FadeReveal from "../fade-reveal"

const SpaceLoopsDescription: React.FC = () => {
  return (
    <div className={'pf-project-text'}>
      <FadeReveal>
        <h2>Casual mobile game developed in just two months</h2>
        <p>
          This is the first game made by Mindfox Studios. The code was done by Erik Høj Petersen and myself.
          The primary focus was to create a game that felt good. We didn’t spare the juiciness factor, even though the development time was short.
        </p>
        <h2>Technology</h2>
        <p>
          Space Loops was built with <a href={'https://unity.com'} target={'_blank'}>Unity</a>. For cloud save, we used <a href={'https://firebase.google.com/products/realtime-database'} target={'_blank'}>Firebase' realtime database</a> and
          Facebook for authentication. A continuos integration pipeline was set up with <a href={'https://fastlane.tools'} target={'_blank'}>Fastlane</a> and GitLab.
        </p>
      </FadeReveal>
      <ProjectLogos logos={['unity', 'firebase', 'fastlane']}/>
    </div>
  );
}

export default SpaceLoopsDescription;

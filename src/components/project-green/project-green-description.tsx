import React from 'react';
import ProjectLogos from "../project-logos"
import FadeReveal from "../fade-reveal"

const ProjectGreenDescription: React.FC = () => {
  return (
    <div className={'pf-project-text'}>
      <FadeReveal>
        <h2>Making the world a better place with Flutter</h2>
        <p>
          An app that motivates the user to avoid actions that are harmful for the planet.
          The app is still just a front-end with minimal state, but it demonstrates that I can design and implement a UI for Android and iOS in my spare-time in just a few weeks.
        </p>
        <h2>Technology</h2>
        <p>
          I designed the UI in <a href={'https://www.figma.com'} target={'_blank'}>Figma</a>,
          then built the app with <a href={'https://flutter.dev'} target={'_blank'}>Flutter</a> and
          used the Dart version of <a href={'https://redux.js.org'} target={'_blank'}>Redux</a> to keep a clean and testable architecture.
          During development I used <a href={'https://fastlane.tools'} target={'_blank'}>Fastlane</a> to deploy on AppCenter after every push.
        </p>
      </FadeReveal>
      <ProjectLogos logos={['flutter', 'fastlane', 'figma']}/>
    </div>
  );
}

export default ProjectGreenDescription;

import React, { useState } from "react"
import SectionHeader, { SectionHeaderType } from "./section-header"
import ExperienceButton from "./experience-button"
import posed from "react-pose"
import TypingAnimation from "./typing-animation"
import experienceDescriptions from './experience_descriptions';

const numberOfButtons = 6;

const PosedDiv = posed.div({
  _0: { top: `${0/numberOfButtons*100}%`},
  _1: { top: `${1/numberOfButtons*100}%`},
  _2: { top: `${2/numberOfButtons*100}%`},
  _3: { top: `${3/numberOfButtons*100}%`},
  _4: { top: `${4/numberOfButtons*100}%`},
  _5: { top: `${5/numberOfButtons*100}%`},
});

let setText: (text: string) => void;

const ExperienceSection: React.FC = () => {

  const [pose, setPose] = useState('_0');

  const createExperienceButton = (text: string, index: number) => (
    <ExperienceButton
      key={index}
      text={text}
      onClick={() => {
        setText(experienceDescriptions[text] || 'sdf');
        setPose(`_${index}`);
      }}
      selected={pose === `_${index}`}
    />
  );

  return (
    <div className={'pf-experience-section'}>
      <SectionHeader type={SectionHeaderType.Experience} />
      <div className={'pf-experience-container'}>
        <div className={'pf-experience-left-border-line'}/>
        <div className={'pf-experience-button-column'}>
          {
            [
              'Mindfox',
              'LEGO',
              'BitBreak',
              'Kiloo',
              'Campus Dj.',
              'ClearCut',
            ].map(createExperienceButton)
          }
          <PosedDiv className={'pf-experience-marker'} pose={pose}/>
        </div>
        <div className={'pf-experience-text'}>
          <p className={'pf-title'}>Founder and Sofware Engineer</p>
          <p className={'pf-period'}>June 2018 - Present</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <TypingAnimation setSetText={childFunc => setText = childFunc} />
        </div>
      </div>
    </div>
  )
};

export default ExperienceSection;

import React, { useState } from "react"
import SectionHeader, { SectionHeaderType } from "./section-header"
import ExperienceButton from "./experience-button"
import posed from "react-pose"

const numberOfButtons = 6;

const PosedDiv = posed.div({
  _1: { top: `${0/numberOfButtons*100}%`},
  _2: { top: `${1/numberOfButtons*100}%`},
  _3: { top: `${2/numberOfButtons*100}%`},
  _4: { top: `${3/numberOfButtons*100}%`},
  _5: { top: `${4/numberOfButtons*100}%`},
  _6: { top: `${5/numberOfButtons*100}%`},
});

const ExperienceSection: React.FC = () => {

  const [pose, setPose] = useState('_1');

  const createExperienceButton = (text: string, index: number) => (
    <ExperienceButton
      key={index}
      text={text}
      onClick={() => setPose(`_${index+1}`)}
      selected={pose === `_${index+1}`}
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
        <div className={'pf-experience-text'}/>
      </div>
    </div>
  )
};

export default ExperienceSection;

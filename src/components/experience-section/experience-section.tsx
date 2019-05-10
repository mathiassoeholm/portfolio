import React, { useState } from "react"
import VisibilitySensor from 'react-visibility-sensor';
import SectionHeader, { SectionHeaderType } from "../section-header"
import ExperienceButton from "./experience-button"
import posed from "react-pose"
import ExperienceDescriptionText from "./experience-description-text"
import experienceDescriptions, { ExperienceDescription } from './experience-descriptions';

const numberOfButtons = 7;

const PosedDiv = posed.div({
  _0: { top: `${0/numberOfButtons*100}%`},
  _1: { top: `${1/numberOfButtons*100}%`},
  _2: { top: `${2/numberOfButtons*100}%`},
  _3: { top: `${3/numberOfButtons*100}%`},
  _4: { top: `${4/numberOfButtons*100}%`},
  _5: { top: `${5/numberOfButtons*100}%`},
  _6: { top: `${6/numberOfButtons*100}%`},
});

let setText: (experienceDescription: ExperienceDescription) => void;

const ExperienceSection: React.FC = () => {
  const [pose, setPose] = useState('_0');
  const [didShowInitialText, setDidShowInitialText] = useState(false);

  const createExperienceButton = (text: string, index: number) => (
    <ExperienceButton
      key={index}
      text={text}
      onClick={() => {
        setText(experienceDescriptions[text]);
        setPose(`_${index}`);
      }}
      selected={pose === `_${index}`}
    />
  );

  const onTextChangeVisibility = (isVisible: boolean) => {
    if (!didShowInitialText && isVisible) {
      setText(experienceDescriptions['Trifork']);
      setDidShowInitialText(true);
    }
  }

  return (
    <div className={'pf-experience-section'}>
      <SectionHeader type={SectionHeaderType.Experience} />
      <div className={'pf-experience-container'}>
        <div className={'pf-experience-left-border-line'}/>
        <div className={'pf-experience-button-column'}>
          {
            [
              'Trifork',
              'Mindfox',
              'LEGO',
              'BitBreak',
              'Kiloo',
              'Game IT',
              'ClearCut',
            ].map(createExperienceButton)
          }
          <PosedDiv className={'pf-experience-marker'} pose={pose}/>
        </div>
        <VisibilitySensor onChange={onTextChangeVisibility} partialVisibility >
          <ExperienceDescriptionText setSetText={childFunc => setText = childFunc} />
        </VisibilitySensor>
      </div>
    </div>
  )
};

export default ExperienceSection;

import React, { useState } from "react"
import VisibilitySensor from 'react-visibility-sensor';
import SectionHeader, { SectionHeaderType } from "./section-header"
import SkillMeter from "./skill-meter"
import { sleep } from "../utility/time-util"
import posed from "react-pose"

const PosedDiv = posed.div({
  visible: {
    staggerChildren: 200,
  }
});

interface SkillDescription {
  name: string,
  value: number
}

let animationStarters: (() => void)[] = [];

const SkillsSection: React.FC = () => {
  const [didStartAnimation, setDidStartAnimation] = useState(false);
  const [pose, setPose] = useState('hidden');

  const startAnimation = async (isVisible: boolean) => {
    if (isVisible && !didStartAnimation)
    {
      setDidStartAnimation(true);
      setPose('visible');

      for (let i = 0; i < animationStarters.length; i++) {
        animationStarters[i]();

        // Stagger animation
        await sleep(200);
      }
    }
  }

  const renderSkillMeter = ({ name, value }: SkillDescription, index: number) => {
    return (
      <SkillMeter
        key={index}
        skill={name}
        value={value}
        setStartAnimation={childFunc => animationStarters.push(childFunc)}
      />
    )
  }

  return (
    <div className={'pf-skills-section'} >
      <SectionHeader type={SectionHeaderType.Skills}/>
      <div className={'pf-skill-container-parent'}>
        <VisibilitySensor onChange={startAnimation} partialVisibility>
          <PosedDiv className={'pf-skill-container'} pose={pose}>
            {
              [
                {name: 'Unity', value: 0.95},
                {name: 'React', value: 0.8},
                {name: 'JavaScript (ES6)', value: 0.8},
                {name: 'Flutter', value: 0.75},
                {name: 'React Native', value: 0.7},
                {name: 'C#', value: 0.7},
                {name: 'TypeScript', value: 0.65},
                {name: 'Swift', value: 0.65},
                {name: 'Kotlin', value: 0.6},
                {name: 'Java', value: 0.6},
                {name: 'Sass', value: 0.5},
                {name: 'Figma', value: 0.4},
                {name: 'Photoshop', value: 0.3},
              ].map(renderSkillMeter)
            }
          </PosedDiv>
        </VisibilitySensor>
      </div>
    </div>
  );
}

export default SkillsSection;

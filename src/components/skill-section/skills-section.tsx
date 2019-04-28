import React, { useState } from "react"
import SectionHeader, { SectionHeaderType } from "../section-header"
import SkillMeter from "./skill-meter"
import { sleep } from "../../utility/time-util"
import FadeReveal from "../fade-reveal"

interface SkillDescription {
  name: string,
  value: number
}

let animationStarters: (() => void)[] = [];

const SkillsSection: React.FC = () => {

  const startAnimation = async () => {
    await sleep(200);

    for (let animStarter of animationStarters) {
      animStarter();

      // Stagger animation
      await sleep(100);
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
        <FadeReveal onBecomeVisible={startAnimation} staggerChildren={100} className={'pf-skill-container'} >
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
        </FadeReveal>
      </div>
    </div>
  );
}

export default SkillsSection;

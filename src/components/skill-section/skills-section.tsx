import React, { useState } from "react"
import SectionHeader, { SectionHeaderType } from "../section-header"
import SkillMeter from "./skill-meter"
import FadeReveal from "../fade-reveal"
import { AnimationGroup } from 'use-anim'

interface SkillDescription {
  name: string,
  value: number
}

const SkillsSection: React.FC = () => {
  const [startedAnimation, setStartedAnimation] = useState(false)

  const onBecomeVisible = () => {
    setStartedAnimation(true)
  }

  const renderSkillMeter = ({ name, value }: SkillDescription, index: number) => {
    return (
      <SkillMeter
        key={index}
        skill={name}
        value={value}
      />
    )
  }

  return (
    <div className={'pf-skills-section'} >
      <SectionHeader type={SectionHeaderType.Skills}/>
      <div className={'pf-skill-container-parent'}>
        <FadeReveal onBecomeVisible={onBecomeVisible} staggerChildren={100} className={'pf-skill-container'} >
          <AnimationGroup stagger={100} started={startedAnimation}>
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
          </AnimationGroup>
        </FadeReveal>
      </div>
    </div>
  );
}

export default SkillsSection;

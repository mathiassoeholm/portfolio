import React, { useState } from "react"
import VisibilitySensor from 'react-visibility-sensor';
import SectionHeader, { SectionHeaderType } from "./section-header"
import SkillMeter from "./skill-meter"
import { sleep } from "../utility/time-util"

let animationStarters: (() => void)[] = [];

const SkillsSection: React.FC = () => {
  const [didStartAnimation, setDidStartAnimation] = useState(false);

  const startAnimation = async (isVisible: boolean) => {
    if (isVisible && !didStartAnimation)
    {
      setDidStartAnimation(true);

      for (let i = 0; i < animationStarters.length; i++) {
        animationStarters[i]();

        // Stagger animation
        await sleep(300);
      }
    }
  }

  return (
    <div className={'pf-skills-section'} >
      <SectionHeader type={SectionHeaderType.Skills}/>
      <div className={'pf-skill-container-parent'}>
        <VisibilitySensor onChange={startAnimation} partialVisibility>
          <div className={'pf-skill-container'}>
            <SkillMeter skill={'React'} value={0.9} setStartAnimation={childFunc => animationStarters.push(childFunc)} />
            <SkillMeter skill={'TypeScript'} value={0.3} setStartAnimation={childFunc => animationStarters.push(childFunc)} />
            <SkillMeter skill={'React Native'} value={0.6} setStartAnimation={childFunc => animationStarters.push(childFunc)} />
            <SkillMeter skill={'React Native'} value={1.0} setStartAnimation={childFunc => animationStarters.push(childFunc)} />
          </div>
        </VisibilitySensor>
      </div>
    </div>
  );
}

export default SkillsSection;

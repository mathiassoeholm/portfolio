import React from "react"
import SectionHeader, { SectionHeaderType } from "./section-header"

const SkillsSection: React.FC = () => {
  return (
    <div className={'pf-skills-section'} >
      <SectionHeader type={SectionHeaderType.Skills}/>
    </div>
  );
}

export default SkillsSection;

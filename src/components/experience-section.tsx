import React from 'react';
import SectionHeader, { SectionHeaderType } from "./section-header"

const ExperienceSection: React.FC = () => {
  return (
    <div className={'pf-experience-section'}>
      <SectionHeader type={SectionHeaderType.Experience} />
    </div>
  )
};

export default ExperienceSection;

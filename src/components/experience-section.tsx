import React from 'react';
import SectionHeader, { SectionHeaderType } from "./section-header"
import ExperienceButton from "./experience-button"

const ExperienceSection: React.FC = () => {
  return (
    <div className={'pf-experience-section'}>
      <SectionHeader type={SectionHeaderType.Experience} />
      <div className={'pf-experience-container'}>
        <div className={'pf-experience-button-column'}>
          <ExperienceButton text={'Mindfox Studios'} />
        </div>
        <div className={'pf-experience-text'}/>
      </div>
    </div>
  )
};

export default ExperienceSection;

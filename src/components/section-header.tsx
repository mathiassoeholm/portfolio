import React, { ReactNode } from "react"
import AboutIcon from '../assets/icons/about.svg';
import SkillsIcon from '../assets/icons/skills.svg';
import ExperienceIcon from '../assets/icons/experience.svg';

export enum SectionHeaderType {
  About,
  Skills,
  Experience,
}

interface Props {
  type: SectionHeaderType,
}

const SectionHeader: React.FC<Props> = (props: Props) => {
  return (
    <div className={'pf-section-header'}>
      <div className={'pf-section-header-line'}/>
      {
           (props.type == SectionHeaderType.About && <AboutIcon className={'pf-section-header-icon'} />)
        || (props.type == SectionHeaderType.Skills && <SkillsIcon className={'pf-section-header-icon'} />)
        || (props.type == SectionHeaderType.Experience && <ExperienceIcon className={'pf-section-header-icon'} />)
      }
      <div className={'pf-section-header-line'}/>
    </div>
  );
}

export default SectionHeader;

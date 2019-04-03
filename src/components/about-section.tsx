import React from "react"
import SectionHeader, { SectionHeaderType } from "./section-header"


const AboutSection: React.FC = () => {
  return (
    <div className={'pf-about-section'}>
      <SectionHeader type={SectionHeaderType.About} />
    </div>
  )
};

export default AboutSection;

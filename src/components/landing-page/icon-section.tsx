import React from 'react';
import GithubIcon from '../../assets/icons/github.svg'
import LinkedInIcon from '../../assets/icons/linkedin.svg'
import EnvelopeIcon from '../../assets/icons/envelope.svg'
import FadeReveal from "../fade-reveal"

const IconSection : React.FC = () => {
  return (
    <div className={'pf-icon-section'}>
      <FadeReveal delay={4100}>
        <a href={'https://www.linkedin.com/in/mathias-soeholm-1887a438/'} target="_blank">
          <LinkedInIcon className={'pf-icon-section-child'}/>
        </a>
      </FadeReveal>
      <FadeReveal delay={4200}>
        <a href={'https://github.com/mathiassoeholm'} target="_blank">
          <GithubIcon className={'pf-icon-section-child'}/>
        </a>
      </FadeReveal>
      <FadeReveal delay={4300}>
        <a href={'mailto:mathiassoeholm@gmail.com'} target="_blank">
          <EnvelopeIcon className={'pf-icon-section-child'}/>
        </a>
      </FadeReveal>
    </div>
  );
}

export default IconSection;

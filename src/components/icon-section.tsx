import React from 'react';
import GithubIcon from '../assets/icons/github.svg'
import LinkedInIcon from '../assets/icons/linkedin.svg'
import EnvelopeIcon from '../assets/icons/envelope.svg'

const IconSection : React.FC = () => {
  return (
    <div className={'pf-icon-section'}>
      <a href={'https://www.linkedin.com/in/mathias-soeholm-1887a438/'}>
        <LinkedInIcon className={'pf-icon-section-child'}/>
      </a>
      <a href={'https://github.com/mathiassoeholm'}>
        <GithubIcon className={'pf-icon-section-child'}/>
      </a>
      <a href={'mailto:mathiassoeholm@gmail.com'}>
        <EnvelopeIcon className={'pf-icon-section-child'}/>
      </a>
    </div>
  );
}

export default IconSection;

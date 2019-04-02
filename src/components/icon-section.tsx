import React from 'react';
import GithubIcon from '../assets/icons/github.svg'

const IconSection : React.FC = () => {
  return (
    <div className={'pf-icon-section'}>
      <GithubIcon className={'pf-icon-section-child'}/>
      <GithubIcon className={'pf-icon-section-child'}/>
      <GithubIcon className={'pf-icon-section-child'}/>
    </div>
  );
}

export default IconSection;

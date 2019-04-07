import React from 'react';
import GithubIcon from '../assets/icons/github.svg'

interface Props {
  repoIdentifier: string,
  color: string,
}

const GithubButton : React.FC<Props> = (props: Props) => {
  return (
    <button
      className={'pf-github-button'}
      onClick={() => {window.open(`https://github.com/mathiassoeholm/${props.repoIdentifier}`)}}
    >
      <GithubIcon className={'pf-github-button-icon'} style={{ color: props.color }} />
      <p style={{ color: props.color }}>
      View on Github
      </p>
    </button>
  );
};

export default GithubButton;

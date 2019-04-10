import React from 'react';
import GithubButtonSvg from '../assets/github-button.svg';

interface Props {
  repoIdentifier: string,
}

const GithubButton : React.FC<Props> = (props: Props) => {
  return (
    <button
      className={'pf-github-button'}
      onClick={() => {window.open(`https://github.com/mathiassoeholm/${props.repoIdentifier}`)}}
    >
      <GithubButtonSvg />
    </button>
  );
};

export default GithubButton;

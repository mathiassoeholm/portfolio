import React from 'react';
import GithubButtonSvg from '../assets/github-button.svg';
import FadeReveal from "./fade-reveal"

interface Props {
  repoIdentifier: string,
}

const GithubButton : React.FC<Props> = (props: Props) => {
  return (
    <FadeReveal>
      <button
        className={'pf-github-button'}
        onClick={() => {window.open(`https://github.com/mathiassoeholm/${props.repoIdentifier}`)}}
      >
        <GithubButtonSvg />
      </button>
    </FadeReveal>
  );
};

export default GithubButton;

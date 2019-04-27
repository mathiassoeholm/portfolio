import React from 'react';
import posed from "react-pose"

interface Props {
  text: string,
  onClick: () => void,
  selected?: boolean | undefined,
}

const PosedButton = posed.button({
  selected: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingLeft: '1em',
  },
  unselected: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    paddingLeft: '0.2em',
  }
});

const ExperienceButton: React.FC<Props> = (props: Props) => {
  return (
    <PosedButton
      className={'pf-experience-button'}
      onClick={props.onClick}
      pose={props.selected ? 'selected' : 'unselected'}
    >
      {props.text}
    </PosedButton>
  );
}

export default ExperienceButton;

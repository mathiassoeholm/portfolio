import React from 'react';

interface Props {
  text: string,
}

const ExperienceButton: React.FC<Props> = (props: Props) => {
  return (
    <div className={'pf-experience-button'}>
      {props.text}
    </div>
  );
}

export default ExperienceButton;

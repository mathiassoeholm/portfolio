import React from 'react';
import Button from "./button"


const ResumeButton : React.FC = () => {
  return (
    <Button
      onClick={() => {console.log('click')}}
      className={'pf-resume-button'}
      text={'RESUMÉ'}
    />
  );
};

export default ResumeButton;

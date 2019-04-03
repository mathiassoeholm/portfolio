import React from 'react';
import Button from "./button"


const ResumeButton : React.FC = () => {
  return (
    <Button
      onClick={() => {window.open('/resume.pdf')}}
      className={'pf-resume-button'}
      text={'RESUMÉ'}
    />
  );
};

export default ResumeButton;

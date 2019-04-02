import React from 'react';

interface Props {
  onClick: () => void
  className: string
}

const Button : React.FC<Props> = (props: Props) => {
  return (
    <div className={props.className}>

    </div>
  );
};

export default Button;

import React from 'react';

interface Props {
  onClick: () => void
  className: string
  text: string
}

const Button : React.FC<Props> = (props: Props) => {
  return (
    <button className={props.className} onClick={props.onClick}>
        {props.text}
    </button>
  );
};

export default Button;

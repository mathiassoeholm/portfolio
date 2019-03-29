import React from 'react';

interface Props {
  left: string,
  height: string,
}

const Line: React.FC<Props> = (props: Props) => (
  <div className={'pf-line'} style={{ left: props.left, height: props.height }}>
    <div className={'pf-line-head'} />
  </div>
);

export default Line;

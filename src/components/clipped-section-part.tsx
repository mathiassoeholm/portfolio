import React from 'react';

interface Props {
  topLeft?: number
  topRight?: number
  bottomRight?: number
  bottomLeft?: number
}

const ClippedSectionPart: React.FC<Props> = ({
  topLeft = 0,
  topRight = 0,
  bottomRight = 0,
  bottomLeft = 0,
}: Props) => {
  const height = Math.max(
    topLeft,
    topRight,
    bottomRight,
    bottomLeft,
  );

  const clipPolygon = `
    polygon(
      0 ${topLeft}em,
      100% ${topRight}em,
      100% ${height-bottomRight}em,
      0 ${height-bottomLeft}em
    )
  `

  const style = {
    WebkitClipPath: clipPolygon,
    clipPath: clipPolygon,
    height: `${height}em`,
    left: 0,
    right: 0,
    top: (topLeft || topRight) && `${-height}em`,
    bottom: (bottomLeft || bottomRight) && `${-height}em`,
    background: 'red',
    position: 'absolute',
  }

  return (
    <div className={'clipped-section-part-container'}>
      <div style={style}/>
    </div>
  );
}

export default ClippedSectionPart;

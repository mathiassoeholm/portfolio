import React from 'react';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

interface Props {
  topLeft?: number
  topRight?: number
  bottomRight?: number
  bottomLeft?: number
  className?: string
}

const ClippedSectionPart: React.FC<Props> = ({
  topLeft = 0,
  topRight = 0,
  bottomRight = 0,
  bottomLeft = 0,
  className,
}: Props) => {

  const md = '960px';
  const matches = useMediaQuery(`(max-width:${md})`);
  if (matches) {
    topLeft *= 0.4;
    topRight *= 0.4;
    bottomRight *= 0.4;
    bottomLeft *= 0.4;
  }

  const height = Math.max(
    topLeft,
    topRight,
    bottomRight,
    bottomLeft,
  ) +(2/16); // Compensate for 2-pixel offset

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
    left: 0,
    right: 0,
    top: (topLeft || topRight) && `${-height}em`,
    bottom: (bottomLeft || bottomRight) && `${-height}em`,
    position: 'absolute',
  }

  return (
    <div className={'clipped-section-part-container'} >
      <div style={style} className={className}/>
    </div>
  );
}

export default ClippedSectionPart;

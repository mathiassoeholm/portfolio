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
  );

  const isTop = bottomRight !== 0 || bottomLeft !== 0;

  // Complicated logic, to remove pixel seam.
  // The idea is that if it is a top component, the clipping in the top
  // moves up with 2 pixels.
  const topLeftDescription = (isTop && `calc(${topLeft}em - 2px)`) || `${topLeft}em`;
  const topRightDescription = (isTop  && `calc(${topRight}em - 2px)`) || `${topRight}em`;
  const bottomRightDescription = (!isTop && `calc(${height - bottomRight}em + 2px)`) || `${height - bottomRight}em`;
  const bottomLeftDescription = (!isTop && `calc(${height - bottomLeft}em + 2px)`) || `${height - bottomLeft}em`;

  const clipPolygon = `
    polygon(
      0 ${topLeftDescription},
      100% ${topRightDescription},
      100% ${bottomRightDescription},
      0 ${bottomLeftDescription}
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
    zIndex: 1,
  }

  return (
    <div className={'clipped-section-part-container'} >
      <div style={style} className={className}/>
    </div>
  );
}

export default ClippedSectionPart;

import React from 'react';
import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image';
import FadeReveal from "./fade-reveal"

interface Props {
  images: string[]
}

const ImageRow: React.FC<Props> = (props: Props) => {
  const data = useStaticQuery(
    graphql`
      query {
        projectGreen01: file(relativePath: { eq: "project-green-01.jpg" }) {
          ...fileData
        }
        projectGreen02: file(relativePath: { eq: "project-green-02.jpg" }) {
          ...fileData
        }
        projectGreen03: file(relativePath: { eq: "project-green-03.jpg" }) {
          ...fileData
        }
        projectGreen04: file(relativePath: { eq: "project-green-04.jpg" }) {
          ...fileData
        }
        spaceLoops01: file(relativePath: { eq: "space-loops-01.png" }) {
          ...fileData
        }
        spaceLoops02: file(relativePath: { eq: "space-loops-02.png" }) {
          ...fileData
        }
        spaceLoops03: file(relativePath: { eq: "space-loops-03.png" }) {
          ...fileData
        }
      }
      fragment fileData on File {
        childImageSharp {
            sizes(quality: 100) {
              ...GatsbyImageSharpSizes
            }
          }
      }
    `
  );

  return (
    <div className={'pf-image-row'}>
      {
        props.images.map((image, index) =>
          <FadeReveal delay={index * 200} key={index}>
            <Img sizes={data[image].childImageSharp.sizes} className={'pf-image-row-child'} />
          </FadeReveal>
        )
      }
    </div>
  );
}

export default ImageRow;

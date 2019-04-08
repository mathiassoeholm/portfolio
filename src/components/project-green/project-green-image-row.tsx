import React from 'react';
import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image';

const ProjectGreenImageRow: React.FC = () => {
  const data = useStaticQuery(
    graphql`
      query {
        image01: file(relativePath: { eq: "project-green-01.jpg" }) {
          ...fileData
        }
        image02: file(relativePath: { eq: "project-green-02.jpg" }) {
          ...fileData
        }
        image03: file(relativePath: { eq: "project-green-03.jpg" }) {
          ...fileData
        }
        image04: file(relativePath: { eq: "project-green-04.jpg" }) {
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
    <div className={'pf-project-green-image-row'}>
      <Img sizes={data.image01.childImageSharp.sizes} className={'pf-project-green-image'} />
      <Img sizes={data.image02.childImageSharp.sizes} className={'pf-project-green-image'} />
      <Img sizes={data.image03.childImageSharp.sizes} className={'pf-project-green-image'} />
      <Img sizes={data.image04.childImageSharp.sizes} className={'pf-project-green-image'} />
    </div>
  );
}

export default ProjectGreenImageRow;

import { graphql, useStaticQuery } from "gatsby"
import React from 'react';
import Img from 'gatsby-image';

interface Props {
  logos: string[],
}

const ProjectLogos: React.FC<Props> = (props: Props) => {
  const data = useStaticQuery(
    graphql`
      query {
        flutter: file(relativePath: { eq: "logo-flutter.png" }) {
          ...logoData
        }
        fastlane: file(relativePath: { eq: "logo-fastlane.png" }) {
          ...logoData
        }
        figma: file(relativePath: { eq: "logo-figma.png" }) {
          ...logoData
        }
      }
      fragment logoData on File {
        childImageSharp {
          fluid(maxWidth: 140) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    `
  );

  return (
    <div className={'pf-project-logos-container'}>
      {props.logos.map(logo =>
        <Img
          key={logo}
          fluid={data[logo].childImageSharp.fluid}
          className={'pf-project-logo'}
          imgStyle={{ objectFit: 'contain' }}
        />
      )}
    </div>
  );
}

export default ProjectLogos;

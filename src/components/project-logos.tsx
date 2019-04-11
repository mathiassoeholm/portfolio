import { graphql, useStaticQuery } from "gatsby"
import React from 'react';
import Img from 'gatsby-image';
import FadeReveal from "./fade-reveal"

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
        firebase: file(relativePath: { eq: "logo-firebase.png" }) {
          ...logoData
        }
        jest: file(relativePath: { eq: "logo-jest.png" }) {
          ...logoData
        }
        node: file(relativePath: { eq: "logo-node.png" }) {
          ...logoData
        }
        react: file(relativePath: { eq: "logo-react.png" }) {
          ...logoData
        }
        unity: file(relativePath: { eq: "logo-unity.png" }) {
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
      {props.logos.map((logo, index) =>
        <FadeReveal key={logo} delay={index*150}>
          <Img
            fluid={data[logo].childImageSharp.fluid}
            className={'pf-project-logo'}
            imgStyle={{ objectFit: 'contain' }}
          />
        </FadeReveal>
      )}
    </div>
  );
}

export default ProjectLogos;

import React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from "gatsby"
import FadeReveal from "../fade-reveal"

const EtherWalletImage: React.FC = () => {
  const data = useStaticQuery(
    graphql`
      query {
        etherWallet: file(relativePath: { eq: "ether-wallet.png" }) {
          childImageSharp {
            fluid(maxWidth: 1030) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  return (
    <FadeReveal className={'pf-ether-wallet-image-container'}>
      <Img fluid={data.etherWallet.childImageSharp.fluid} className={'pf-ether-wallet-image'} />
    </FadeReveal>
  );
}

export default EtherWalletImage;

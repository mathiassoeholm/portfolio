import React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from "gatsby"

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
    <div className={'pf-ether-wallet-image-container'}>
      <Img fluid={data.etherWallet.childImageSharp.fluid} className={'pf-ether-wallet-image'} />
    </div>
  );
}

export default EtherWalletImage;

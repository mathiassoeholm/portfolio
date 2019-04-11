import React from 'react';
import ClippedSectionPart from "../clipped-section-part"
import { Grid } from "@material-ui/core"
import EtherLogo from '../../assets/ether-logo.svg';
import EtherWalletDescription from "./ether-wallet-description"
import EtherWalletImage from "./ether-wallet-image"
import ProjectLogos from "../project-logos"
import GithubButton from "../github-button"

const EtherWalletSection: React.FC = () => {
  return (
    <>
      <ClippedSectionPart topLeft={8} className={'pf-ether-wallet-clip-part'} color={'#3B5998'}/>
      <div className={'pf-ether-wallet-background'}>
        <div className={'pf-ether-wallet-content'}>
          <div className={'pf-ether-wallet-title-container'}>
            <EtherLogo className={'pf-ether-logo'}/>
            <h1>
              trustless ether wallet
            </h1>
          </div>
          <Grid container>
            <Grid item xs={12} md={6}>
              <EtherWalletDescription />
              <ProjectLogos logos={['react', 'node', 'firebase', 'jest']}/>
            </Grid>
            <Grid item xs={12} md={6}>
              <EtherWalletImage />
            </Grid>
          </Grid>
          <GithubButton repoIdentifier={'trustless-ether-wallet'}/>
        </div>
      </div>
      <ClippedSectionPart bottomLeft={8} className={'pf-ether-wallet-clip-part'}/>
    </>
  );
}

export default EtherWalletSection;

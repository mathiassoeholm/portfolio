import React from 'react';
import ClippedSectionPart from "../clipped-section-part"
import { Grid } from "@material-ui/core"
import EtherLogo from '../../assets/ether-logo.svg';
import EtherWalletDescription from "./ether-wallet-description"
import EtherWalletImage from "./ether-wallet-image"
import ProjectLogos from "../project-logos"

const EtherWalletSection: React.FC = () => {
  return (
    <div>
      <ClippedSectionPart topLeft={8} className={'pf-ether-wallet-clip-part'}/>
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
        </div>
      </div>
    </div>
  );
}

export default EtherWalletSection;

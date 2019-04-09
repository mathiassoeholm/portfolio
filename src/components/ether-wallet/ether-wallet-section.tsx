import React from 'react';
import ClippedSectionPart from "../clipped-section-part"
import { Grid } from "@material-ui/core"

const EtherWalletSection: React.FC = () => {
  return (
    <div>
      <ClippedSectionPart topLeft={8} className={'pf-ether-wallet-clip-part'}/>
      <div className={'pf-ether-wallet-background'}>
        <Grid container className={'pf-ether-wallet-content'}>
          <Grid item xs={6} md={12}>
            Ether Icon goes here
          </Grid>
          <Grid item xs={6} md={12}>
            Title goes here
          </Grid>
          <Grid item xs={6} md={12}>
            Description goes here
          </Grid>
          <Grid item xs={6} md={12}>
            Screenshot goes here
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default EtherWalletSection;

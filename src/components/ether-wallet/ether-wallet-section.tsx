import React from 'react';
import ClippedSectionPart from "../clipped-section-part"

const EtherWalletSection: React.FC = () => {
  return (
    <div>
      <ClippedSectionPart topLeft={8} className={'pf-ether-wallet-clip-part'}/>
      <div className={'pf-ether-wallet-background'}>
        <div style={{height: '300px'}}></div>
      </div>
    </div>
  );
}

export default EtherWalletSection;

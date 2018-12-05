import React from 'react';

const LineOfCredit = () => (
  <div className="styled-card">
    <div className="styled-card-icon">
      <img alt="" src="https://dxkdvuv3hanyu.cloudfront.net/design-assets/icons/identity.svg" className="line-credit-icon"></img>
    </div>
    <h1 className="header">Verify your identity</h1>
    <p className="copy">You'll need to verify your identity first to see your options</p>
    <a href="https://app.nav.com/login?referer=app.nav.com%2Fid-verification%3Fnext%3D%2Freports%2Flending-health">
      <span className="plus"></span>  Verify
    </a>
  </div>
);

export default LineOfCredit;

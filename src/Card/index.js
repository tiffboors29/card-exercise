import React, { Component } from 'react';

import './index.css';
import CreditCard from './CreditCard';
import TermLoan from './TermLoan';
import LineOfCredit from './LineOfCredit';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = { activeTab: 0 };
  }

  selectTab = activeTab => () => this.setState({ activeTab });

  render() {
    const { activeTab } = this.state;

    return (
      <div className="card">
        <div className="card-body">
          <section>
            <div className="tab-group">
              <div className={`styled-tab ${activeTab === 0 ? 'active-tab' : ''}`} onClick={this.selectTab(0)}>
                <img alt="" src="https://dxkdvuv3hanyu.cloudfront.net/design-assets/icons/pbr/credit-card-dark.svg" className="tab-icon" />
                <span className="tab-text">Credit card</span>
              </div>
              <div className={`styled-tab ${activeTab === 1 ? 'active-tab' : ''}`} onClick={this.selectTab(1)}>
                <img alt="" src="https://dxkdvuv3hanyu.cloudfront.net/design-assets/icons/pbr/loan-light.svg" className="tab-icon" />
                <span className="tab-text">Term loan</span>
              </div>
              <div className={`styled-tab ${activeTab === 2 ? 'active-tab' : ''}`} onClick={this.selectTab(2)}>
                <img alt="" src="https://dxkdvuv3hanyu.cloudfront.net/design-assets/icons/pbr/line-of-credit-light.svg" className="tab-icon" />
                <span className="tab-text">Line of credit</span>
              </div>
            </div>

            {activeTab === 0 && <CreditCard />}
            {activeTab === 1 && <TermLoan />}
            {activeTab === 2 && <LineOfCredit />}
          </section>
        </div>
      </div>
    );
  }
}

export default Card;

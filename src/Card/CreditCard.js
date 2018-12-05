import React, { Component } from 'react';
import { connect } from 'react-redux';

const monetary = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0
});

const RowData = ({ label, value, qualified }) => (
  <div className="credit-data-wrapper">
    <div className="credit-data-header">
      <p className="label">{label}</p>
      <p className="value">{value}</p>
      <div className="indicator" />
    </div>
  </div>
);

class CreditCard extends Component {
  render() {
    const { userStatus, issuerNeeds } = this.props;
    const { qualified } = userStatus;
    const header = qualified ? 'Yay! You qualify for a credit card 🎉' : 'Sorry, You do not qualify for a credit card';

    return (
      <div className="credit-card">
        <div className="section status">
          <h1 className="header">{header}</h1>
          {qualified && <p>A credit card is a great option for you right now.</p>}
        </div>
        <h3>Here's what issuers are looking for</h3>
        <RowData label="Personal credit score" value={issuerNeeds.creditScore} qualified={qualified} />
        <RowData label="Personal credit age" value={`${issuerNeeds.creditAge}yr.`} qualified={qualified} />
        <RowData label="Personal inquiries" value={issuerNeeds.inquiries} qualified={qualified} />
        <RowData label="Personal bankruptcies" value={issuerNeeds.bankruptcies} qualified={qualified} />
        <RowData label="Personal credit utilization" value={`${issuerNeeds.creditUtilization}%`} qualified={qualified} />
        <RowData label="Personal credit limit" value={monetary.format(issuerNeeds.creditLimit)} qualified={qualified} />
      </div>
    );
  }
}

export default connect(
  // mapStateToProps
  state => ({
    userStatus: { qualified: true },
    issuerNeeds: {
      creditScore: 706,
      creditAge: 16,
      inquiries: 2,
      bankruptcies: 0,
      creditUtilization: 32,
      creditLimit: 49300
    },
  }),
  // mapDispatchToProps
)(CreditCard);

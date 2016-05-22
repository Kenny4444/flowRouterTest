import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

// Portfolio component - represents a single todo item
export default class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: 26,
    };
  }

  deleteThisPortfolio() {
    Meteor.call('portfolios.remove', this.props.portfolio._id);
  }

  render() {

    return (
      <li className="lozenge">
        <div className="lozenge-image">
          <img src={this.props.portfolio.image} className="limage"/>
        </div>
        <ul className="lozenge-stats">
          <li className="comments">
            <a title="View comments on the portfolio">{this.state.comments}</a>
          </li>
        </ul>
        <button className="delete" onClick={this.deleteThisPortfolio.bind(this)}>
          &times;
        </button>

        <span className="text">
          {this.props.portfolio.text}
        </span>
      </li>
    );
  }
}

Portfolio.propTypes = {
  // This component gets the portfolio to display through a React prop.
  // We can use propTypes to indicate it is required
  portfolio: PropTypes.object.isRequired,
}; 
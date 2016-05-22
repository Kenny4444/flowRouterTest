import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Portfolios } from '../imports/getPortfolio.js';

import Portfolio from './portfolio.jsx';

// App component - represents the whole app
class Index extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    handleLogin({ component: this });
  }
  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    const image = ReactDOM.findDOMNode(this.refs.imageInput).value.trim();

    Meteor.call('portfolios.insert', text,image);

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
    ReactDOM.findDOMNode(this.refs.imageInput).value = '';
  }

  renderPortfolios() {
    let displayPortfolios = this.props.portfolios;
    return displayPortfolios.map((portfolio) => (
      <Portfolio key={portfolio._id} portfolio={portfolio} />
    ));
  }

  render() {
    return (
      <div className="my-portfolio">
        <header>
          <h1>Portfolio List ({this.props.count})</h1>

          <form className="new-portfolio" onSubmit={this.handleSubmit.bind(this)} >
            <input
              type="text"
              ref="textInput"
              placeholder="Type to add new portfolios"
            />
            <input 
              type="text"
              ref="imageInput"
              placeholder="Image location"
            />
            <button type="submit">Submit</button>

          </form>
        </header>

        <ul className="ul-portfolios">
          {this.renderPortfolios()}
        </ul>
      </div>
    );
  }
}

Index.propTypes = {
  portfolios: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
};

export default IndexContainer = createContainer(() => {
  Meteor.subscribe('portfolios');
  return {
    portfolios: Portfolios.find({}, { sort: { createdAt: -1 } }).fetch(),
    count: Portfolios.find({ checked: { $ne: true } }).count(),
  };
}, Index  );
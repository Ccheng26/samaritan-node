import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './style.css';

export default class Listing extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Listing', className)} >
        <h1>
          Listing
        </h1>
      </div>
    );
  }
}


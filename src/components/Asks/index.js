import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './style.css';

export default class Asks extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}
  constructor(props){
    super(props);
    this.state={
      className: '', textDec: ''};
    this.onChange= this.onChange.bind(this);
  }
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Asks', className)} >
        <h1>
          Asks
        </h1>
      </div>
    );
  }
}


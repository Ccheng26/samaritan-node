import React, { PropTypes, Component } from 'react';
import classnames from 'classnames'

import logo from './logo.svg';
import './style.css';
// import Asks from '../Asks/index'

class App extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}
  constructor(){
    super();
    this.state={
      asks: ' '
    }
  }
  queryList(ask){
    const asks = {...this.state.asks};
    const timestamp = Date.now();
    asks[`ask-${timestamp}`] = ask;
    this.setState({ asks:asks})
  }
  submitButton(e){
    e.preventDefault();
    const ask = {
      listing: this.listing.value
    }
    var askVal = ask.listing
    console.log(askVal)
    this.doForm.reset();
    this.setState({asks:ask});
    this.queryList(ask);
    console.log(ask);
    fetch('http://localhost:9000/search', {
      method: 'POST',
      data: askVal,
      mode: 'cors',
      cache: 'default'
    }).then(function(response) {
      console.log(response.type)
      // return response
    })
  }
  // componentWillUpdate(){

  //   };

  render() {
    //const { className, ...props } = this.props; weird errors coming up when putting { ...props } in div
    const { className } = this.props;
    return (
      <div className={classnames('App', className)} >
        <div className="App-header">

          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
         <h1>Search NonProfits</h1>
        <form method="POST" ref={(input)=> this.doForm =input} onSubmit={(e) => {this.submitButton(e)}}>
        <input ref={(input=> this.listing = input)} />
        <button type="submit">Submit</button>
        </form>

        {/*
        {Object.keys(this.state.asks).map(key => <Asks key={key} list={this.state.asks[key]} />)
        }
        {console.log(this.state)}
        */}
      </div>
    );
  }
}

export default App;

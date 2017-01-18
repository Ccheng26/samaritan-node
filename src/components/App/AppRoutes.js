import React from 'react';
import Navbar from '../Navbar';

export default (props) => {
  return (
    <div className="App">
      <Navbar />
      { props.children }
    </div>
  );
}


import React from 'react';
import { Link } from 'react-router';

export default (props) => {
  return(
    <nav>
      <div>
        <Link to="/">Home</Link>
        <ul>
          <li><Link to="/asks">Views</Link></li>
        </ul>
      </div>
    </nav>
  )
}

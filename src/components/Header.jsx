import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h1>Help Queue</h1>
      <Link to='/' className="link">Home</Link> | <Link to='/newticket'>Create Ticket</Link> | <Link to='/admin'>Admin</Link>
    </div>
  );
};

export default Header;
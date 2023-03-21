import React from 'react';

const Navbar = ({ getUsers }) => {
  return (
    <nav>
      <div className="brand">Brand Name</div>
      <button className="get-users" onClick={getUsers}>Get Users</button>
    </nav>
  );
};

export default Navbar;

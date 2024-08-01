import React from 'react';
import '../Host/HostName.scss'; 

const HostNameColumn = ({ fullName }) => {
  const [firstName, lastName] = fullName.split(' ');

  return (
    <div className="column-container">
      <p className="column-item">{firstName}</p>
      <p className="column-item last-name">{lastName}</p>
    </div>
  );
};


export default HostNameColumn;

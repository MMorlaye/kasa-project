import React from 'react';

const Card = ({ cover, title }) => {
  return (
    <div className="card">
      <img src={cover} alt={title} />
      <h4>{title}</h4>
    </div>
  );
};

export default Card;

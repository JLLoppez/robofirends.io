import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className='tc grow bg-dark-green br2 pa2 ma2 dib bw2 shadow-4'>
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;

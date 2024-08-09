import React from 'react';

function Card({ percentage, title, description }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-center">
      {percentage && <p className="text-red-500 text-2xl font-bold">{percentage}</p>}
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Card;

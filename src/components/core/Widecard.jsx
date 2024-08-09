import React from 'react';
import coint from '../../assets/images/coint.png';

function Widecard({ title, subtitle, description }) {
  return (
    <div className="lg:p-6 bg-white rounded-lg shadow-md text-center">
      <div className="flex flex-col items-center">
        <img src={coint} alt="icon" className="h-[100px] w-[210px] mb-4" />
        <div>
          <h3 className="text-md text-gray-700">{title}</h3>
          <h4 className="text-lg font-semibold">{subtitle}</h4>
        </div>
      </div>
      <p className="mt-4 text-gray-600">{description}</p>
    </div>
  );
}

export default Widecard;

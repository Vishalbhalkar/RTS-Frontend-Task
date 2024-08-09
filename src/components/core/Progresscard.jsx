import React from 'react';
import { Progress } from "@material-tailwind/react";

function Progresscard({ percentage, title, description,p1value,p2value,action}) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-center">
      {percentage && <p className="text-red-500 text-2xl font-bold">{percentage}</p>}
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="mt-2 mb-1 bg-red-50 px-3 rounded-2xl inline-flex pl">
        <p className="text-sm text-red-500 font-medium">{action}</p>
      </div>
      <p className="text-gray-600">{description}</p>
      <div>
      <div className='flex items-center'>
        <Progress className="mr-5 mt-2 " value={p1value} size="md" color="red" />
        <p className='text-gray-600 mt-2'>You</p>
      </div>
      <div className='flex items-center'>
        <Progress className="mr-2  w-full" value={p2value} size="md" color="red" />
        <p className='text-gray-600 '>Other</p>
      </div>
    </div>
    </div>
  );
}

export default Progresscard;

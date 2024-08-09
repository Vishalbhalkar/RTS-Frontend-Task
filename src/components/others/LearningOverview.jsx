import React from 'react';
import MyLineChart from '../../data/graph';

function LearningOverview() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md mt-4 w-full">
      <h3 className="text-lg sm:text-xl font-semibold text-left mb-4">Learning Overview</h3>
      <div className="flex justify-center">
        <MyLineChart className="w-full" />
      </div>
    </div>
  );
}

export default LearningOverview;

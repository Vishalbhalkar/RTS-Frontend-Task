import React from 'react';
import { Progress, IconButton } from "@material-tailwind/react";
import { MdDiscount } from "react-icons/md";

function DailyProgress() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md mt-4 w-full">
      <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Daily Progress</h3>
      <div className="flex flex-col sm:flex-row items-center mb-3 sm:mb-4">
        <Progress className="w-full sm:w-3/4 lg:w-full mb-2 sm:mb-0 sm:mr-2" value={50} size="md" color="red" />
        <p className="text-gray-600">10pts</p>
      </div>
      <div className="flex flex-col sm:flex-row items-center">
        <IconButton color="amber" className="mb-2 sm:mb-0 sm:mr-2">
          <MdDiscount className="text-xl sm:text-2xl" />
        </IconButton>
        <div>
          <h2 className="text-base sm:text-lg font-semibold">Prize: 25% discount coupon</h2>
          <p className="text-sm sm:text-base text-gray-600">for all software courses</p>
        </div>
      </div>
    </div>
  );
}

export default DailyProgress;

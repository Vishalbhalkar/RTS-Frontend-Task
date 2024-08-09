import React from 'react';
import { HiMiniTrophy } from "react-icons/hi2";

function PerformanceSummary() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md mt-4 w-full">
      <div className="flex flex-col items-center">
        <img 
          src="https://media.istockphoto.com/id/1181175630/photo/close-up-photo-of-charming-guy-entrepreneur-feel-content-look-listen-have-fun-with-his-family.jpg?s=2048x2048&w=is&k=20&c=c014KxYwQwxwhDfv09W8OFYr-fzU8uy3UyMSczXs0f8=" 
          alt="Gwen Anderson" 
          className="w-20 h-20 sm:w-16 sm:h-16 rounded-full mb-3"
        />
        <h2 className="text-lg sm:text-xl font-bold text-gray-900">Gwen Anderson</h2>
        <p className="text-sm sm:text-base text-gray-500">andersongwen@gmail.com</p>

        <div className="flex items-center mt-4">
          <div className="bg-red-50 p-2 border border-transparent shadow-md rounded-md">
            <HiMiniTrophy className="text-red-500 w-8 h-8 sm:w-6 sm:h-6" />
          </div>
          <p className="text-red-500 text-lg font-bold ml-2">
            3<sup>rd</sup>
          </p>
        </div>
      </div>

      <div className="mt-6 bg-red-50 p-4 rounded-lg flex items-center justify-between">
        <p className="text-sm sm:text-base text-red-500 font-medium">Today's time spent</p>
        <p className="text-lg sm:text-xl font-semibold text-red-500">4h 25m</p>
      </div>
    </div>
  );
}

export default PerformanceSummary;

import React from 'react';
import WideCard from '../core/Widecard';
import Card from '../core/Card';
import { cardData } from '../../data/cardData';
import Progresscard from '../core/Progresscard';
import { TbReport } from "react-icons/tb";

function Maincard() {
  const { summary, assessments, otherMetrics } = cardData;

  return (
    <div className="lg:p-6 shadow-md  bg-white rounded-md lg:ml-[80px]  lg:w-[90%] sm:w-[100%]">
      <div className='flex items-center mb-4'>
        <div className="bg-red-50 p-2 border-1 border-transparent shadow-md rounded-md">
          <TbReport className="text-red-500 w-6 h-6" />
        </div>
        <h2 className='font-bold text-lg sm:text-xl text-gray-900 ml-2'>Gwen's Report</h2>
      </div>
      <WideCard
        title={summary.title}
        subtitle={summary.subtitle}
        description={summary.description}
        icon={summary.icon}
      />
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {assessments.map((item, index) => (
          <Card
            key={index}
            percentage={item.percentage}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {otherMetrics.map((item, index) => (
          <Progresscard
            key={index}
            title={item.title}
            description={item.description}
            p1value={item.p1value}
            p2value={item.p2value}
            action={item.action}
          >
            <span className="text-sm text-red-500 font-medium">{item.action}</span>
          </Progresscard>
        ))}
      </div>
    </div>
  );
}

export default Maincard;

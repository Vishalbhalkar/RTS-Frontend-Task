import React from 'react'
import PerformanceSummary from '../components/others/PerformanceSummary'
import DailyProgress from '../components/others/DailyProgress'
import LearningOverview from '../components/others/LearningOverview'
import Statistic from '../components/others/Statistic'

export default function Sidebar() {
  return (
    <>
    <div className="bg-white rounded-md mt-[-15px] lg:mr-[80px] ml-2">
        <PerformanceSummary/>
        <DailyProgress/>
        <LearningOverview/>
        <Statistic/>
    </div>
    </>
  )
}

import React from 'react'
import Layout from '../layout/Layout'
import Maincard from '../components/others/Maincard'
import Sidebar from '../layout/Sidebar'
import Navigator from '../components/core/Navigator'
import Downloaddiv from '../components/core/Downloaddiv'


export default function () {
  return (
    <div className='mt-[-90px]'>
     <div className="main_container">
          <Navigator />
          <Downloaddiv />
      </div>
    <div className='flex'>
        <div className="flex space-x-4 card_container flex-col lg:flex-row lg:space-x-5 ">
            <div className="">
                <Maincard/>
            </div>
            <div className="">
                <Sidebar />
            </div>
        </div>
    </div>
    </div>
  )
}

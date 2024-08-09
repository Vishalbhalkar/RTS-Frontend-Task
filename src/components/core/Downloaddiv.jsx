import React from 'react'
import { Button } from "@material-tailwind/react";

export default function Downloaddiv() {
  return (
    <div className='flex justify-between items-center lg:ml-[100px] lg:mr-[110px] ml-4 mr-4'>
        <div className="container mx-auto mt-8 flex">
            <img 
                src="https://media.istockphoto.com/id/1181175630/photo/close-up-photo-of-charming-guy-entrepreneur-feel-content-look-listen-have-fun-with-his-family.jpg?s=2048x2048&w=is&k=20&c=c014KxYwQwxwhDfv09W8OFYr-fzU8uy3UyMSczXs0f8=" 
                alt="Gwen Anderson" 
                className="w-10 h-10 rounded-full mb-3 mt-1"
            />
            <div className='p-2 flex'>
                <p className='text-gray-500 mr-2 mt-1'>Report for</p>
                <p className='text-xl text-white mt-[2px]'>Gwen Anderson</p>
            </div>
        </div>

        <div>
        <Button variant="outlined" className="flex  mt-8 items-center gap-2 px-4 py-2 rounded-lg border border-gray-700 bg-transparent text-gray-300 hover:bg-gray-600 hover:text-white transition-colors duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-download">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
        <path d="M7 11l5 5l5 -5" />
        <path d="M12 4v12" />
    </svg>
    Download
</Button>

        </div>

    </div>
  )
}

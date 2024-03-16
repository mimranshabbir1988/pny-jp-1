import React from 'react'
import {FiLogIn, FiLogOut, FiMapPin, FiSearch } from "react-icons/fi";

const Topheader = () => {
  return (
    <div>
      <header className="max-w-screen-2xl container bg-slate-700 mx-auto xl:px-24 px-4">
      
      <nav className="flex justify-end items-center py-1">
      
        {/* nav items for large devices */}
        <ul className="hidden md:flex gap-6">
            <li className="text-sm text-white">
            <span className='text-sm flex gap-2 items-center hover:text-yellow-300'><FiLogOut />REGISTER</span>
            </li>
            <li className="text-sm text-white">
                <span className='text-sm flex gap-2 items-center hover:text-yellow-300'><FiLogIn />LOGIN</span>
            </li>
            <li className="text-sm text-white">
                <span className='text-sm flex gap-2 items-center hover:text-yellow-300'><FiLogIn />MEMBER LOGIN</span>
            </li>
            

        </ul>

       

      </nav>

    
    </header>
    </div>
  )
}

export default Topheader

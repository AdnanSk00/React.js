import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-emerald-800 text-white py-2'>
        <div className="logo">
            <span className='font-bold text-xl mx-12'>iTask</span>
        </div>
        <ul className='flex gap-8 mx-12'>
            <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
            <li className='cursor-pointer hover:font-bold transition-all'>Adnan</li>
        </ul>
    </nav>
  )
}

export default Navbar

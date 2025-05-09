import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center py-1 md:py-3 bg-slate-800 text-white sticky bottom-0 w-full'>
      <div className='Logo font-bold text-2xl cursor-pointer'><a className='hover:text-green-400' href='/'>
        <span className="text-green-700">
          &lt;
        </span>
        Pass<span className="text-green-400">OP</span>
        <span className="text-green-700">
          /&gt;
        </span>
        </a></div>
        <span className='flex items-center gap-2'> <span className="text-xl"> &copy;</span> All Rights Reserved</span>
    </div>
  )
}

export default Footer

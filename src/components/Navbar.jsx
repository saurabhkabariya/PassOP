import React from 'react'
import { BsGithub } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white flex justify-between items-center py-2 md:px-40 md:py-6 mycontainer'>
        <div className='Logo font-bold text-2xl cursor-pointer'><a className='hover:text-green-400' href='/'>
        <span className="text-green-700">
          &lt;
        </span>
        Pass<span className="text-green-400">OP</span>
        <span className="text-green-700">
          /&gt;
        </span>
        </a></div>
      {/* <ul>
        <li className='flex gap-4'>
            <a className='hover:font-bold hover:text-green-400' href='/'>Home</a>
            <a className='hover:font-bold hover:text-green-400' href='/'>About</a>
            <a className='hover:font-bold hover:text-green-400' href='/'>Contact</a>
        </li>
      </ul> */}
      <button className='bg-green-900 text-white px-4 py-1 rounded-md flex gap-2 items-center justify-center border border-green-400' onClick={()=>window.location.href="https://github.com/saurabhkabariya/PassOP"}>
        <BsGithub className='invert-0 text-2xl'/><span>Github</span>
      </button>
    </nav>
  )
}

export default Navbar

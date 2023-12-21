import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    <ul className='flex justify-end text-3xl font-semibold'>
   
      <li className='mr-6'>
        <Link to = "/" className='hover:text-gray-300'>Home</Link>
      </li>
      <li>
        <Link to = "/profile" className='hover:text-gray-300'>Profile</Link>
      </li>
       
    </ul>
    {/* <hr className='m-4'></hr> */}
    </>
  )
}

export default Navbar
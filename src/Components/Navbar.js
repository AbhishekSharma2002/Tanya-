import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';
const logo = new URL("./Photos/logo.jpg", import.meta.url)
const profile = new URL("./Photos/profile.png", import.meta.url)


export default function Navbar() {
  return (
    <div className='gradient flex justify-between sticky top-0 z-10 '>
      <div>
        <img className='rounded-full h-20 w-20 ml-3' src={logo} alt=''></img>
        
      </div>
      <div className=' -mt-6'>
        <ul className='flex space-x-5'>
          <li className='mt-10 rounded-xl p-2 text-black bg-slate-200  font-bold hover:bg-slate-300 hover:cursor-pointer hover:text-black'><Link to="home">HOME</Link></li>
          <li className='mt-10 rounded-xl p-2 text-black bg-slate-200  font-bold hover:bg-slate-300 hover:cursor-pointer hover:text-black'>ABOUT</li>
          <li className='mt-10 rounded-xl p-2 text-black bg-slate-200  font-bold hover:bg-slate-300 hover:cursor-pointer hover:text-black'>REELS</li>
          <li className='mt-10 rounded-xl p-2 text-black bg-slate-200  font-bold hover:bg-slate-300 hover:cursor-pointer hover:text-black'><Link to='contact'>FORM FOR CONTACT</Link></li>
        </ul>
      </div>
      <div className='flex mt-5'>
        <img className='h-10 w-10' src={profile} alt=''></img>
        <p className='font-bold mt-2 text-xl mr-10 hover:cursor-pointer hover:text-slate-800'><Link to="login">LogIn</Link></p>
      </div>
    </div>
  )
}

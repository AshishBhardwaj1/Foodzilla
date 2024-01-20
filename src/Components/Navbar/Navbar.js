import React, { useContext, useState } from 'react'
import "./navbar.css"
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../../context/Context'
const Navbar = () => {
  const {searchParam,setSearchParam ,handleSubmit} =useContext(GlobalContext)


  return (
    <div> 
     <nav className='flex justify-between items-center py-8  flex-col lg:flex-row  gap-5 lg:gap-0'></nav>
     <h1 className='text-2xl font-semibold'> <NavLink to='/'>Food Reciepe</NavLink> </h1>
     <form  onSubmit={handleSubmit}>
      <input type="text"
      value={searchParam}
      onChange={(e)=>{setSearchParam(e.target.value)}}
       placeholder='search recipe'
        className='bg-white p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg focus:shadow-red-200' />
     </form>
     <ul className='flex gap-5'>
      <li> 
        <NavLink to={'/'} className='text-black hover:text-gray'>Home</NavLink>
        <NavLink to={'/favourites'} className='text-black hover:text-gray'>Favourites</NavLink>
      </li>
     </ul>
    </div>
  )
}

export default Navbar
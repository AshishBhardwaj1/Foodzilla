import React, { useContext, useState } from 'react'

import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../../context/Context'
const Navbar = () => {
  const {searchParam,setSearchParam ,handleSubmit } =useContext(GlobalContext)


  return (
  
     <nav className='flex justify-between items-center py-8  flex-col lg:flex-row  alg:gap-0 bg-slate-200 '>
      <div className='flex justify-center '>

    
     <h1 className='text-4xl font-semibold mx-6'> <NavLink to='/'> FoodZilla</NavLink> </h1>
      </div>
     <form  onSubmit={handleSubmit}>
      <input type="text"
      value={searchParam}
      onChange={(e)=>{setSearchParam(e.target.value)}}
       placeholder='search recipe'
        className='bg-white p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg focus:shadow-red-200 ' />
     </form>
     <ul className='flex gap-5 mx-6 '>
      <li > 
        <NavLink to={'/'} className='text-gray hover:text-gray mx-5 font-semibold' >Home</NavLink>
        <NavLink to={'/favourites'} className='text-gray hover:text-gray font-semibold'>Favourites</NavLink>
      </li>
     </ul>
     </nav>
     
  ) 
}

export default Navbar
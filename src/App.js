import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './pages/Home'
import Favourite from './pages/Favourite'
import Details from './pages/Details'
import Footer from './Components/Footer'



const App = () => {
  return (

<div className="min-h-screen  bg-red-200 text-gray-600 text-lg ">

<Navbar/>
<Routes>
  <Route path="/" element={<Home/>}> </Route>
  <Route path='/favourites' element={<Favourite/>} > </Route>
  <Route path='/details/:id' element={<Details/>}> </Route>

</Routes>

<Footer/>
</div>

  )
}

export default App

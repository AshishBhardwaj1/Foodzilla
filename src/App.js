import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './pages/Home'
import Favourite from './pages/Favourite'
import Details from './pages/Details'

const App = () => {
  return (
<BrowserRouter>
<div className='min-h-screen p-6 bg-white text-gray-600 text-lg '>
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>}> </Route>
  <Route path='/favourites' element={<Favourite/>} > </Route>
  <Route path='/details/:id' element={<Details/>}> </Route>

</Routes>
</div>
</BrowserRouter>
  )
}

export default App

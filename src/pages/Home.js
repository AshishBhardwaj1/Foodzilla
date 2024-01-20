import React, { useContext } from 'react'
import { GlobalContext } from '../context/Context'
import Recipeitem from './Recipeitem'

const Home = () => {
  const{recipeList,loading}= useContext(GlobalContext)
  if (loading) {
  <div>Loading..... please wait</div>
  }
  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>

{
  recipeList && recipeList.length>0? recipeList.map(item=>(
    <Recipeitem item={item}/>
  )) : <div>

    <p className='lg:text-4xl text-xl text-center font-bold'>Nothing to Show </p>
  </div>
}

    </div>
  )
}

export default Home
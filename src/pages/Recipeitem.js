import React from 'react'
import { Link } from 'react-router-dom'

const Recipeitem = ({item}) => {
  return (
    <div className='flex flex-col w-80 overflow-hidden bg-white p-5 shadow-xl border-2 gap-5 rounded-2xl border-white'>

        <div className='h-40 flex justify-center overflow-hidden items-center rounded-xl'>
<img src={item.image_url} alt='img' className='block w-full'/>
        </div>
        <div>
          <span>{item.publisher} </span>
          <h3>{item.title} </h3>
          <Link to={`/details/${item.id}`} >recipe details</Link>
        </div>
    </div>
  )
}

export default Recipeitem
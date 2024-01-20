import { createContext, useState } from "react";

export const GlobalContext = createContext(null)

export default function GlobalState({children}){

    const [searchParam ,setSearchParam] =useState('')
    const [loading, setLoading] =useState(false)
    const [recipeList,setReciepeList] =useState([])
    const [recipeData ,setReciepeData] =useState(null)
    const [favoritesList, setFavoritesList] = useState([])


    function handleAddToFavorite(getCurrentItem){
        console.log(getCurrentItem);
        let cpyFavoritesList = [...favoritesList];
        const index = cpyFavoritesList.findIndex(item=> item.id === getCurrentItem.id)
    
        if(index === -1) {
          cpyFavoritesList.push(getCurrentItem)
        } else {
          cpyFavoritesList.splice(index)
        }
    
        setFavoritesList(cpyFavoritesList)
      }
    
      console.log(favoritesList, 'favoritesList');
    async function handleSubmit(e){
e.preventDefault()
try {
    const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`)
    const  data  = await res.json()
    if (data?.data?.recipes){
        setReciepeList(data?.data?.recipes)
        setLoading(false)
        setSearchParam('')
    }

} catch (error) {
  
    setLoading(false)
    setSearchParam('')
}
    }
    // console.log(loading,recipeList);

    return   <GlobalContext.Provider value={{searchParam,setSearchParam,handleSubmit,loading,recipeList,recipeData ,setReciepeData , handleAddToFavorite,
        favoritesList}}>{children} </GlobalContext.Provider>
    
}
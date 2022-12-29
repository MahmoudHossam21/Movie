import React, { useEffect, useState } from 'react'
import { getTrending } from '../../Api'
import Items from '../Items/Items'


export default function Movies() {
  const [Movies , setMovies] = useState ( [] )
  async function getDate(){
      let movies = await getTrending('movie')
      setMovies(movies)
      }
  useEffect(()=>{
      getDate()
  },[])
  return <>
  <div className="container">
    <div className="row py-5">
        {Movies.map((value,index) =><Items key={index} data={value}/>)}
    </div> 
</div>
  </>
}

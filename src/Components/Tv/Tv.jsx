import React, { useEffect, useState } from 'react'
import { getTrending } from '../../Api'
import Items from '../Items/Items'
import Spineer from '../Spineer/Spineer'

export default function Tv() {
    const [Tv , setTv] = useState ( [] )
    async function getDate(){
        let tv = await getTrending('tv')
        setTv(tv)
    }
    useEffect(()=>{
        getDate()
    },[])
  return <>
  <div className="container">
    <div className="row py-5">
       {Tv.length>0? Tv.map((value,index) =><Items key={index} data={value}/>):<Spineer/>}
    </div> 
</div>
  
  </>
}

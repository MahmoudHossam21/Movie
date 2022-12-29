import React, { useEffect, useState } from 'react'
import { getTrending } from '../../Api'
import Items from '../Items/Items'
import Spineer from '../Spineer/Spineer'


export default function Home() {

    const [Movies , setMovies] = useState ( [] )
    const [Tv , setTv] = useState ( [] )
    async function getDate(){
        let movies = await getTrending('movie')
        setMovies(movies)
        let tv = await getTrending('tv')
        setTv(tv)
    }
    useEffect(()=>{
        getDate()
    },[])

return <>
<div className="container">
    <div className="row py-5">
        <div className="col-md-4 py-2">
            <div className='py-5'>
                <div className='text-white item neonText' >
                    <h2>Trending <br /> Movies <br />To watch now </h2>
                </div>
                <div className='ph'><p>most watched Movies by days</p></div>
            </div>
        </div>
        {Movies.length>0?Movies.map((value,index) =><Items key={index} data={value}/>):<Spineer/>}
    </div> 
</div>

<div className="container">
    <div className="row py-5">
        <div className="col-md-4 py-2">
            <div>
                <div className='text-white item neonText ' >
                    <h2>Trending <br /> TV <br />To watch now </h2>
                    </div>
                        <div className='ph'><p>most watched TV by days</p></div>
            </div>
        </div>
        {Tv.map((value,index) =><Items key={index} data={value}/>)}
    </div> 
</div>


</>

}

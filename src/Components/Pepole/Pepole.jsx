import React, { useEffect, useState } from "react";
import { getTrending } from "../../Api";
import Items from "../Items/Items";

export default function Pepole() {

  const [People , setPeople] = useState ( [] )
  async function getDate(){
      let people = await getTrending('person')
      setPeople(people)
      }
  useEffect(()=>{
      getDate()
  },[])
  return <>
  <div className="container">
    <div className="row py-5">
        {People.map((value,index) =><Items key={index} data={value}/>)}
    </div> 
</div>
  </>
}

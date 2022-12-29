import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Login() {
  let navigate = useNavigate()
  function submitForm(e) {
    setLoading(true)
    e.preventDefault()
    sendDate()
  }
  const [Loading, setLoading] = useState(false)

  const [Error, setError] = useState('')
const [user, setUser] = useState({
  email:'',
  password:'',
})
function getUserDate(e) {
  let myUser = {...user}
myUser[e.target.name]=e.target.value
setUser(myUser)
}
 async function sendDate() {
  let{data}= await axios.post(`https://route-movies-api.vercel.app/signin`,user)

if (data.message =='success') {
  setLoading(false)
  navigate('/home')
  localStorage.setItem('token',data.token)
}
else{
  setLoading(false)
  setError(data.message)
}

  console.log(data)
}

  return <>{Error.length>0?<div className="alert alert-info my-2">{Error}</div>:''}
  <h3 className='py-2'>SignIn Now :</h3>
  <form onSubmit={submitForm} className='py-4'>
  <label htmlFor="email">Email :</label>
  <input onChange={getUserDate} className='form-control my-3' type="email" name="email" id="email" />
  <label htmlFor="password">Password :</label>
  <input  onChange={getUserDate} className='form-control my-3' type="password" name="password" id="password" />
  <button className='btn btn-info ' type="submit">{Loading==true?<i className='fas fa-spinner fa-spin'></i>:"SignIn"}</button>
  </form>
  
    </>
}

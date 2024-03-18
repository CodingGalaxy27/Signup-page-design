import React, { useState } from 'react'
import './Nar.css';
import signup from './signup.png'
const Naruto = () => {

 const[email,setemail]=useState('')
 const[password,setpassword]=useState('')
 const [username,setusername]=useState('')

 const userhandle=(e)=>{
  setusername(e.target.value);

 }

 const handlechange=(e)=>{
  setemail(e.target.value)
 }
const handlepassword=(e)=>{

  setpassword(e.target.value)
  

}
    


const handlesubmit=(event)=>{
  event.preventDefault()
  if(!email ,!password,!username)
   return ;setemail('') 
  if(!password,!username,!email)
  return; setusername('')

  if(!password,!username,!email)
  return; setpassword('')
  
  


 
 
}
  return (
    <>
     
    <div className='bgimg'>
   
   
    <div  className='clr'>
      
    
      
      
    <div className='card'>
    
    
        <form onSubmit={handlesubmit}>

        <h1 className='sgn'>SIGN UP</h1>

        <h1 className='Username' >User name </h1>
        
        <input type="text" value={username} required  placeholder='User name' onChange={(event)=>userhandle(event) } className='userid'></input>
     
        <h1 className='email' >Email Address </h1>
        
        <input type="text" value={email} required  placeholder='Email Address' onChange={(event)=>handlechange(event) } className='inp'></input>

        <h1 className='password' >password </h1>
       <input type="password" className='pass' value={password}  required  placeholder='Password' onChange={(event)=>handlepassword(event)}></input>
      
      <button type='submit' className='btn' onClick={(e)=>{handlesubmit(e)}}> SIGN UP</button>
       
         

        </form>

        <div className='image' >
      <img src={signup}  height={500} width={652}  ></img>
      </div>
        </div>
       
        
    </div>
   
    </div>    
    

    
    </>
   
  )
}

export default Naruto
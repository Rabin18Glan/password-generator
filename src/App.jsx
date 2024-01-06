import { useEffect, useRef, useState } from 'react'

import './App.css'
import { useCallback } from 'react';

function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState();
  const passwordRef = useRef(null);

  const handleCopy = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0, password. length);
window.navigator.clipboard.writeText(password)
      },[password])

const passwordGenerator = useCallback(()=>{
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if(charAllowed)
  {
    str +='!@#$%^&*()-_+=[]{}|;:,.<>?/'
  }
  if(numberAllowed)
  {
    str += '0123456789'
  }

  for( let i=1;i<=length;i++ )
  {
const char =Math.floor( Math.random()*str.length+1);
pass += str.charAt(char)

  }

  setPassword(pass); 

},[length,numberAllowed,charAllowed,setPassword])

useEffect(()=>{
passwordGenerator();
},[length,numberAllowed,charAllowed,setPassword])

 return (<>
 
 <div className="container flex flex-col justify-center items-center">
  <h1 className='text-black-500 font-bold text-lg'>Password Generator</h1>
  <div className="bg-purple-200 p-10 rounded-r rounded-l w-2/5">

 <div class="">
  <input 
   type="text"
   ref={passwordRef}
   value={password}
     className="rounded-l-md border-2  focus:outline-none focus:border-orange-500 p-2"/>
  <button className="rounded-r-md bg-orange-500 text-white p-2" onClick={handleCopy}>Copy</button>
</div >
    <div className="flex justify-between m-5" >
    <input type="range" value={length} min={6} max={30} onChange={e=>setLength(e.target.value)} className="cursor-pointer w-2/5"/> 
    <label htmlFor="">length:{length}</label>
   
    <span className='flex items-center'><input onChange={()=>setCharAllowed(prev=>prev=!prev)} type="checkbox" id='charallw'/>
    <label htmlFor="charalw">Charater</label></span>
 <span  className='flex items-center'> <input type="checkbox" onChange={()=>setNumberAllowed(prev=>prev=!prev)} id='numallw'/>
    <label htmlFor="numalw">Number</label></span>
   
    </div>
  </div>
 


 </div>
  
    </>)
  
}

export default App

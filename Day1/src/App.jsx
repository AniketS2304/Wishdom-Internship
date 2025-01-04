import React, { useState,useEffect } from 'react'
import Navbar from './assets/Components/Navbar';
const App = () => {
  const [count , setCount] = useState(0);
  const [msg , setMsg] = useState("Hello World");
  
  // //at every load
  // useEffect(()=>{
  //   // alert("Hello World");
  //   console.log("i will run at every load");
  // })
  // //at first load
  // useEffect(()=>{
  //   // alert("Hello World");
  //   console.log("i will run at first load");
  // },[])

  // //chnage in count
  // useEffect(()=>{
  //   // alert("Count Change");
  //   console.log("i will run when count changes");
  // },[count])

  // //change when meaage changes
  // useEffect(()=>{
  //   // alert("Message Change");
  //   console.log("i will run when message changes");
  // },[msg])
  return (
    <>
    <Navbar msg={msg} />
    <h1>Counter</h1>
    <h2 className='text-center color-red' >{count}</h2>
    <button className='text-center'  onClick={()=> setCount(count + 1)} >Count</button>
    <button onClick={()=>{setMsg(msg + count)}} >send msg</button>
    </>
  )
}
export default App
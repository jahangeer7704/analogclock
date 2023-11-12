import React, { useState } from 'react'
import Watch from './Watch'
import Header from './Header'

function App() {
let [item,setItem]=useState("Clock")

let handleClick=(e)=>{
setItem(e.target.innerHTML);
}



  return (
    <>
    <Header value={item}/>
<div className='bg-white select-none h-screen flex justify-center items-center flex-col'>
<Watch/>
</div>
    
    </>
)}

export default App
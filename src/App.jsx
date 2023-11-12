import React, { useState } from 'react'
import Watch from 'src/watch/Watch'
import Header from 'src/Header'

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
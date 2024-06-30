import React, { useState } from 'react'

export default function Tile() {
  const [gridIndices, setGridIndices] = useState(Array.from({ length: 64 }, (_, index) => index));
  //if it is div by zero---as white otherwise black
  //heloo pr demo
  return (
    <div className="h-screen bg-slate-900 flex justify-center items-center">
      <div className='grid grid-cols-8 gap-0 w-3/5'>
      {gridIndices.map((index)=>(
        <div className={`h-20 w-20 ${index%2===0?"bg-white":"bg-slate-600"}`}></div>
      ))}
      </div>
    </div>
  )
}

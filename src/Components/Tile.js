import React, { useState } from 'react';

export default function Tile() {
  const [gridIndices] = useState(Array.from({ length: 64 }, (_, index) => index));

  const returnRowNum = (index) => {
    return Math.floor(index / 8);
  };

  return (
    <div className="h-screen bg-slate-900 flex justify-center items-center">
      <div className="grid grid-cols-8 gap-0" style={{ width: '100vw', maxWidth: '90vh', height: 'auto' }}>
        {gridIndices.map((index) => (
          <div
            key={index}
            className={`h-auto aspect-square ${(index + returnRowNum(index)) % 2 === 0 ? "bg-white" : "bg-slate-600"}`}
          ></div>
        ))}
      </div>
    </div>
  );
}
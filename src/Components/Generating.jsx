import React from 'react';
import { loading } from '../assets';

const Generating = ({ className }) => {
  return (
    <div
      className={` z-2 flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] text-base ${className ?? ''}`}
    >
      <img className="w-5 h-5 mr-4 " src={loading} alt="Generating" />
      AI is Generating. . .
    </div>
  );
};

export default Generating;

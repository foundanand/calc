'use client';

import { useState } from 'react';
import gsap from 'gsap';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value: string) => {
    setInput((prev) => prev + value);
    const escapedValue = CSS.escape(value);
    gsap.fromTo(
      `#button-${escapedValue}`,
      { scale: 0.9 },
      { scale: 1, duration: 0.2, ease: 'elastic.out(1, 0.3)' }
    );
  };

  const calculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (err) {
      setResult('Error');
    }
  };

  const clear = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="max-w-sm mx-auto bg-black p-4 rounded-3xl shadow-2xl">
      <div className="bg-black text-white text-right p-4 mb-2 text-2xl font-bold rounded-lg">
        <div className="text-gray-400">{input || '0'}</div>
        <div className="text-white font-bold text-4xl">{result || '0'}</div>
      </div>
      
      {/* Button Grid */}
      <div className="buttons grid grid-cols-4 gap-2">
        {/* Top Row */}
        <button
          id="button-C"
          className="p-5 rounded-full text-2xl bg-gray-500 text-white shadow-lg transform hover:scale-105 transition-transform duration-200 ease-in-out"
          onClick={clear}
        >
          C
        </button>
        {['+/-', '%', '/'].map((item, index) => (
          <button
            id={`button-${CSS.escape(item)}`}
            key={index}
            className="p-5 rounded-full text-2xl bg-gray-500 text-white shadow-lg transform hover:scale-105 transition-transform duration-200 ease-in-out"
            onClick={() => handleClick(item)}
          >
            {item}
          </button>
        ))}

        {/* Numeric Keypad and Operators */}
        {[7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+'].map((item, index) => (
          <button
            id={`button-${CSS.escape(item.toString())}`}
            key={index}
            className="p-5 rounded-full text-2xl bg-gray-700 text-white shadow-lg transform hover:scale-105 transition-transform duration-200 ease-in-out"
            onClick={() => handleClick(item.toString())}
          >
            {item}
          </button>
        ))}

        {/* Special Keys (0 takes 2 columns) */}
        <button
          id="button-0"
          className="col-span-2 p-5 rounded-full text-2xl bg-gray-700 text-white shadow-lg transform hover:scale-105 transition-transform duration-200 ease-in-out"
          onClick={() => handleClick('0')}
        >
          0
        </button>
        <button
          id="button-dot"
          className="p-5 rounded-full text-2xl bg-gray-700 text-white shadow-lg transform hover:scale-105 transition-transform duration-200 ease-in-out"
          onClick={() => handleClick('.')}
        >
          .
        </button>
        <button
          id="button-equal"
          className="p-5 rounded-full text-2xl bg-orange-500 text-white shadow-lg transform hover:scale-105 transition-transform duration-200 ease-in-out"
          onClick={calculate}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
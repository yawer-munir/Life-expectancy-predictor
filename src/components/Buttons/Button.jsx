import React from 'react';

function Button({ onClick, text, className }) {
  return (
    <div className="flex items-center justify-center mt-20">
      <button
        onClick={onClick}
        className={`bg-black text-white px-20 py-3 ${className}`}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;

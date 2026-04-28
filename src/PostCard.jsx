import React, { useState } from 'react';

function PostCard({ id, userId, title, body }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="flex flex-col h-full p-5 bg-white rounded-lg shadow transition-all duration-300 hover:scale-105 hover:border hover:border-pink-300 hover:bg-pink-50 group">
      
      <h2 className="text-lg font-semibold text-gray-800 mb-3 text-center capitalize">
        {title}
      </h2>

      <p className="text-gray-600 text-xs flex-grow text-center mb-4 flex-grow">
        {body}
      </p>

      <button
        onClick={() => setClicked(true)}
        className={`w-full py-2 mt-auto rounded-md text-white font-medium transition-all duration-300 hover:brightness-110 ${
          clicked ? 'bg-special-red2' : 'bg-gray-01'
        }`}
      >
        {clicked ? 'Tombol sudah diklik' : 'Silakan Klik'}
      </button>
    </div>
  );
}

export default PostCard;
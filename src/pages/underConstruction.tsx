// @ts-nocheck
import React from "react";

export const UnderConstruction = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
      <div className="text-center p-8 max-w-4xl w-full">
  
        <div className="w-48 h-48 mx-auto mb-8 relative animate-float">
       
          <svg
            className="w-16 h-16 absolute top-0 left-0 animate-spin-slow"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 2v4M4.93 4.93l2.83 2.83M2 12h4M4.93 19.07l2.83-2.83M12 18v4M19.07 19.07l-2.83-2.83M22 12h-4M19.07 4.93l-2.83 2.83" />
          </svg>

          <svg
            className="w-24 h-24 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-hammer"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
          </svg>

          <svg
            className="w-16 h-16 absolute bottom-0 right-0 animate-spin-slow-reverse"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 2v4M4.93 4.93l2.83 2.83M2 12h4M4.93 19.07l2.83-2.83M12 18v4M19.07 19.07l-2.83-2.83M22 12h-4M19.07 4.93l-2.83 2.83" />
          </svg>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Under Construction
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          We're working hard to bring you something amazing! Stay tuned...
        </p>

        <div className="w-2/3 md:w-1/2 h-3 bg-white/20 rounded-full mx-auto mb-8 overflow-hidden">
          <div className="h-full bg-green-400 w-3/4 animate-progress" />
        </div>
      </div>
    </div>
  );
};
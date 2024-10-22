import React from "react";

export default function MyButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-violet-700 md:px-4 md:py-4 px-3 py-3 mt-3 md:w-auto w-full  float-right md:mr-3 lg:mt-0 rounded-md text-white"
    >
      {text}
    </button>
  );
}

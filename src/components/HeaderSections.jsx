import React from "react";

export default function HeaderSection({title , text}) {
  return (
    <div className="bg-black lg:px-20 lg:py-16 md:px-10 md:py-12 px-8 pt-10  ">
      <div>
        <img loading="lazy" className="w-[60px]" src={require("../images/star.png")} alt="star" />
        <h1 className="text-white text-2xl font-semibold md:text-4xl py-6">
         {title}
        </h1>

        <p className="text-gray-400  ">
         {text}
        </p>
      </div>
    </div>
  );
}

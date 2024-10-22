import React from "react";
import CustomButton from "./CustomButton";
export default function SloganDesign({text , title}) {
  return (
    <div className=" md:flex pt-10 items-center h-[400px] md:h-auto relative bg-black ">
      <div className=" md:block hidden h-full  w-[50%]">
        <img
          className="mr-auto h-full"
          src={require("../images/Design-left.png")}
          alt=""
        />
      </div>
      <div className=" lg:block  h-full md:w-[50%] ">
        <img
         className="ml-auto h-full  "
          src={require("../images/Design.png")}
          alt=""
        />
      </div>
      <div className="absolute md:px-16 px-8 top-1/2 transform -translate-y-1/2 ">
        <h4 className="text-white md:text-4xl text-2xl font-semibold py-5">
        {  title}
        </h4>

        <p className="text-gray-500 lg:pr-64 text-left">
          {text}
        </p>
       
          <CustomButton text={"Explore Properties"} />
       
      </div>
    </div>
  );
}

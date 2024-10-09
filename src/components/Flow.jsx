import React from "react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";
import check from "../assets/check.png";
const Flow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center">
        Accelerate your
        <span className="text-transparent bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text">
          {" "}
          coding workflow
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={codeImg} alt="codes" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((items, index) => (
            <div className="flex mb-12" key={index}>
              <img className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full" src={check}/>
              <div className="">
                <h5 className="mt-1 mb-2 text-xl">{items.title}</h5>
                <p className="text-md text-neutral-500">{items.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flow;

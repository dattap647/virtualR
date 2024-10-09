import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
const Heros = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-8xl text-center tracking-wide">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for developer
        </span>
      </h1>

      <p className="mt-10 text-xl text-center text-neutral-500 max-w-4xl ">
        Penatibus et magnis lus mus. Donec quam felis, ultricies nec,
        pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim
      </p>

      <div className="flex justify-center my-10 space-x-3">
        <a
          href=""
          className="border rounded-md p-3 bg-gradient-to-r from-orange-500 to-orange-800 "
        >
          Start for Free
        </a>
        <a href="" className="border rounded-md p-3 ">
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center space-x-7">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support Video
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support Video
        </video>
      </div>
    </div>
  );
};

export default Heros;

import React from "react";
import { loading } from "../assets";

const Generating = ({ classNames }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        classNames || ""
      } text-base`}
    >
      <img src={loading} alt="generating" className="w-5 h-5 mr-4" />
      AI is generating
    </div>
  );
};

export default Generating;

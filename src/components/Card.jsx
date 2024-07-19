import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";

const Card = () => {
  return (
    <div className=" relative w-60 h-72 rounded-[40px] bg-zinc-900 text-white px-8 py-10 overflow-hidden">
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">
        Lorem ipsum dolor sit amet consectetur.
      </p>
      <div className="footer absolute left-0 bottom-0 w-full  ">
        <div className="flex items-center justify-between px-8 py-3 mb-3">
          <h5>.4mb</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            <LuDownload size=".8em" color="#fff" />
          </span>
        </div>
        <div className="tag w-full py-4 bg-green-600 flex items-center justify-center">
          <h3 className="text-sm font-semibold">Download Now</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;

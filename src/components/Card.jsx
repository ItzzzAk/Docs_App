import { motion } from "framer-motion";
import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import { LuDownload } from "react-icons/lu";

const Card = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      className="flex-shrink-0 relative w-60 h-72 rounded-[40px] bg-zinc-900 text-white px-8 py-10 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute left-0 bottom-0 w-full  ">
        <div className="flex items-center justify-between px-8 py-3 mb-3">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? <IoClose /> : <LuDownload size=".8em" color="#fff" />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;

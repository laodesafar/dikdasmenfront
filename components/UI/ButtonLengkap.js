import React from "react";

import { BiChevronRight } from "react-icons/bi";

export default function ButtonLengkap(props) {
  return (
    <div className={props.className}>
      <a
        href="#"
        className="flex items-center text-sm md:text-base  text-green-500 hover:text-green-700"
      >
        {props.children} <BiChevronRight className="w-6 h-6" />
      </a>
    </div>
  );
}

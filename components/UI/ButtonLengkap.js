import React from "react";

export default function ButtonLengkap(props) {
  return (
    <div>
      <a
        href="#"
        className="flex items-center text-sm md:text-base  text-green-500 hover:text-green-700"
      >
        {props.children}
      </a>
    </div>
  );
}

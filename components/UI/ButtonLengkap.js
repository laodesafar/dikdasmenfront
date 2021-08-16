import React from "react";

import { BiChevronRight } from "react-icons/bi";

export default function ButtonLengkap({ className, children, variant }) {
  const variants = {
    default: `text-green-500 hover:text-green-700 `,
    "white-button": ` bg-green-500 py-2 px-6 border-white border-2 border-solid text-white rounded-sm shadow-lg mt-6   hover:bg-green-600`,
    "green-button": `text-white py-2 px-6 bg-green-500 hover:bg-green-700 rounded-sm `,
  };

  const variantHandler = variants[variant];

  return (
    <button className={className}>
      <a
        href="#"
        className={`flex items-center text-sm md:text-base transition-colors duration-300 ease-in-out
        }  ${variantHandler}`}
      >
        {children}{" "}
        {variant === "default" && <BiChevronRight className="w-6 h-6" />}
      </a>
    </button>
  );
}

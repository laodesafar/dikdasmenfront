import React from "react";

import { BiChevronRight } from "react-icons/bi";

export default function ButtonLengkap({ className, children, variant }) {
  const variants = {
    default: `text-green-500 hover:text-green-700`,
    "white-button": `text-green-500 px-4 py-2 bg-white hover:bg-gray-200`,
    "green-button": `text-white px-4 py-2 bg-green-500 hover:bg-green-700 `,
  };

  const variantHandler = variants[variant];

  return (
    <div className={className}>
      <a
        href="#"
        className={`flex items-center text-sm md:text-base
        }  ${variantHandler}`}
      >
        {children}{" "}
        {variant === "default" && <BiChevronRight className="w-6 h-6" />}
      </a>
    </div>
  );
}

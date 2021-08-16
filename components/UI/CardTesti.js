import React from "react";

import { VscQuote } from "react-icons/vsc";

export default function CardTesti({
  active,
  src,
  description,
  name,
  status,
  onHover,
  index,
}) {
  return (
    <div
      onMouseEnter={onHover}
      className={`flex  flex-col items-center p-2  transition-all duration-300 ease-in-out cursor-pointer  ${
        active !== `active${index}` ? "bg-white z-0" : "bg-green-500 z-40"
      }   shadow-inner min-w-[376px] `}
    >
      <img
        className={`rounded-full h-32 w-32 my-5 ${
          active !== `active${index}` ? "opacity-30" : ""
        }  `}
        src={src}
        alt={name}
      />
      <div
        className={`px-7 ${active !== `active${index}` ? "opacity-50" : ""} `}
      >
        <VscQuote
          className={` ${
            active !== `active${index}` ? "text-gray-400" : "text-white"
          } text-2xl mb-2  `}
        />
        <p
          className={`font-light text-sm ${
            active !== `active${index}` ? "text-gray-400" : "text-white"
          }  mb-2`}
        >
          {description}
        </p>
        <div
          className={`border-b-2  ${
            active !== `active${index}` ? "border-gray-400" : "border-green-400"
          }   `}
        ></div>
        <div className="my-2 text-sm font-light">
          <p
            className={`text-lg ${
              active !== `active${index}` ? "text-gray-400" : "text-yellow-400"
            }  `}
          >
            {name}
          </p>
          <p
            className={`${
              active !== `active${index}` ? "text-gray-400" : "text-white"
            }  `}
          >
            {status}
          </p>
        </div>
      </div>
    </div>
  );
}

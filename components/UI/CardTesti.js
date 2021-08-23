import { useState } from "react";
import Image from "next/image";

import { VscQuote } from "react-icons/vsc";
import ButtonLengkap from "./ButtonLengkap";

export default function CardTesti({
  active,
  src,
  description,
  name,
  status,
  index,
  handleActive,
}) {
  const [testimoni, setTestimoni] = useState([
    {
      id: 1,
      src: "/assets/images/image4.png",
    },
    {
      id: 2,
      src: "/assets/images/image4.png",
    },
    {
      id: 3,
      src: "/assets/images/bill.jpeg",
    },
    {
      id: 4,
      src: "/assets/images/image4.png",
    },
  ]);

  return (
    <div
      className={`absolute grid grid-cols-1 md:grid-cols-3  ${
        active !== `active${index}` ? "z-0 " : "z-10 "
      }`}
    >
      <div
        className={`flex items-center justify-center py-10 bg-green-500 rounded-l-md md:transition-transform duration-1000 ease-in-out ${
          active !== `active${index}`
            ? "transform md:translate-x-60  "
            : "transform md:translate-x-0  "
        }`}
      >
        <Image
          className="h-60 w-60 rounded-full  "
          src={src}
          alt={name}
          objectFit="cover"
          width={300}
          height={300}
        />
      </div>
      <div className="flex flex-col p-7 justify-between bg-white min-h-[400px] py-10 col-span-2 z-10  rounded-r-lg ">
        <div>
          <VscQuote className="mb-10" />
          <p className="font-normal text-base  text-gray-600  mb-4 max-h-36 overflow-hidden">
            {description}
          </p>
        </div>

        <div className="flex flex-col">
          <div className="mb-2">
            <div className="border-b-2  border-green-500   "></div>
            <div className="my-2 text-sm font-light">
              <p className="text-lg font-normal text-green-500  ">{name}</p>
              <p className="text-gray-600 font-normal  ">{status}</p>
            </div>
          </div>
          <div className="flex space-x-4 cursor-pointer ">
            {testimoni.map((testi, i) => (
              <div
                key={i}
                className={`h-10 w-10 relative transition-transform duration-200 ease-in-out  ${
                  i === index && active === `active${index}` ? "scale-150" : ""
                }`}
                onClick={() => handleActive(`active${i}`)}
              >
                <Image
                  className="rounded-full "
                  src={testi.src}
                  objectFit="cover"
                  layout="fill"
                />
              </div>
            ))}

            <ButtonLengkap variant="default" className="relative left-4">
              Selengkapnya
            </ButtonLengkap>
          </div>
        </div>
      </div>
    </div>
  );
}

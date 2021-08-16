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
      className={`grid grid-cols-1 md:grid-cols-3  ${
        active !== `active${index}` ? "hidden" : "block"
      }`}
    >
      <div
        className={`flex items-center justify-center py-10 bg-green-500 rounded-l-md `}
      >
        <Image
          className="h-60 w-60 rounded-full "
          src={src}
          alt={name}
          objectFit="cover"
          width={300}
          height={300}
        />
      </div>
      <div className="flex flex-col p-7 justify-between bg-white min-h-[400px] py-10 col-span-2  rounded-r-lg">
        <VscQuote />
        <div className="">
          <p className="font-normal text-base  text-gray-600  mb-4">
            {description}
          </p>
          <div className="border-b-2  border-green-500   "></div>
          <div className="my-2 text-sm font-light">
            <p className="text-lg font-normal text-green-500  ">{name}</p>
            <p className="text-gray-600 font-normal  ">{status}</p>
          </div>
        </div>
        <div className="flex items-center space-x-1 cursor-pointer ">
          {testimoni.map((testi, i) => (
            <div
              key={i}
              className={` relative   ${
                i === index ? "h-14 w-14" : "h-10 w-10"
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
          <div>
            <ButtonLengkap variant="default" className="ml-5">
              Selengkapnya
            </ButtonLengkap>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import { BiTime, BiMap } from "react-icons/bi";

import ButtonLengkap from "@components/UI/ButtonLengkap";

const imageLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
};

export default function Agenda() {
  return (
    <section className="flex my-10 ">
      <div className="container mx-auto px-10 md:px-0 rounded-lg  py-6   ">
        <div className="grid grid-col-1 md:grid-cols-3  md:px-0">
          <div className="md:col-span-2 flex flex-col md:mr-4">
            <h1 className=" capitalize text-2xl py-4 font-semibold text-gray-600">
              Pengumuman
            </h1>
            <div className=" h-44 relative bg-black ">
              <Image
                className="opacity-60"
                src="assets/images/contoh.jpg"
                loader={imageLoader}
                alt="Contoh Pengumuman"
                objectFit="cover"
                layout="fill"
              />
              <div className="relative left-6 top-1/2">
                <h3 className="text-white text-2xl font-medium uppercase">
                  Pengumuman Disini
                </h3>
              </div>
            </div>
            <div className="grid grid-col-1 md:grid-cols-3 mt-4 gap-2">
              <div className="flex flex-row justify-center shadow-md  mb-2">
                <div className="p-4 flex-grow  text-gray-700 font-light overflow-hidden md:overflow-visible bg-gray-100 h-20 md:h-auto lg:min-h-[8rem]">
                  <div className="text-gray-400 text-sm font-normal mt-4">
                    18 Agustus 2021
                  </div>
                  <h3 className="text-green-500 cursor-pointer hover:text-green-700 font-medium  mt-2 transition-colors duration-300 ease-in-out">
                    Lowongan Guru PAI SD Islam Sultan Agung 2
                  </h3>
                </div>
              </div>
              <div className="flex flex-row justify-center shadow-md  mb-2">
                <div className="p-4 flex-grow  text-gray-600 font-light overflow-hidden md:overflow-visible bg-gray-100 h-20 md:h-auto lg:min-h-[8rem]">
                  <div className="text-gray-400 text-sm font-normal mt-4">
                    18 Agustus 2021
                  </div>
                  <h3 className="text-green-500 cursor-pointer hover:text-green-700 font-medium  mt-2 transition-colors duration-300 ease-in-out">
                    Lowongan Guru PAI SD Islam Sultan Agung 2
                  </h3>
                </div>
              </div>
              <div className="flex flex-row justify-center shadow-md  mb-2">
                <div className="p-4 flex-grow  text-gray-600 font-light  overflow-hidden md:overflow-visible bg-gray-100 h-20 md:h-auto lg:min-h-[8rem]">
                  <div className="text-gray-400 text-sm font-normal mt-4">
                    18 Agustus 2021
                  </div>
                  <h3 className="text-green-500 cursor-pointer hover:text-green-700 font-medium  mt-2 transition-colors duration-300 ease-in-out">
                    Lowongan Guru PAI SD Islam Sultan Agung 2
                  </h3>
                </div>
              </div>
            </div>
            <div className=" mt-4 lg:mt-0 text-right">
              <ButtonLengkap
                variant="green-button"
                className="block lg:hidden w-full"
              >
                Pengumuman Lainnya
              </ButtonLengkap>
              <ButtonLengkap
                variant="default"
                className="lg:inline-block mt-1 hidden "
              >
                Pengumuman Lainnya
              </ButtonLengkap>
            </div>
          </div>
          <div>
            <h2 className=" capitalize text-2xl py-4 font-semibold text-gray-600">
              Agenda Mendatang
            </h2>
            <div className="flex flex-row shadow-md  mb-2">
              <div className="py-2 px-4  bg-green-500 flex flex-col items-center justify-center rounded-l-md ">
                <span className="text-white font-semibold text-3xl ">18</span>
                <p className="text-yellow-300 text-2xl capitalize">Feb</p>
              </div>
              <div className="p-4 flex-grow text-gray-600 font-light text-sm bg-gray-100">
                <h3 className="text-green-500 font-medium text-lg cursor-pointer hover:text-green-700 transition-colors duration-300 ease-in-out">
                  Workshop Parenting
                </h3>
                <div>
                  <BiTime className="inline-block text-lg" /> 09.00 - 20.00 Wib
                </div>
                <div>
                  <BiMap className="inline-block text-lg" /> Aula SMA Islam
                  Sultan Agung 1
                </div>
              </div>
            </div>
            <div className="flex flex-row  mb-2 shadow-md">
              <div className="py-2 px-4  bg-green-500 flex flex-col items-center justify-center rounded-l-md ">
                <span className="text-white font-semibold text-3xl ">18</span>
                <p className="text-yellow-300 text-2xl capitalize">Feb</p>
              </div>
              <div className="p-4   flex-grow text-gray-600 font-light text-sm bg-gray-100">
                <h3 className="text-green-500 font-medium text-lg cursor-pointer hover:text-green-700 transition-colors duration-300 ease-in-out">
                  Workshop Parenting
                </h3>
                <div>
                  <BiTime className="inline-block text-lg" /> 09.00 - 20.00 Wib
                </div>
                <div>
                  <BiMap className="inline-block text-lg" /> Aula SMA Islam
                  Sultan Agung 1
                </div>
              </div>
            </div>
            <div className="flex flex-row shadow-md ">
              <div className="py-2 px-4  bg-green-500 flex flex-col items-center justify-center rounded-l-md ">
                <span className="text-white font-semibold text-3xl ">18</span>
                <p className="text-yellow-300 text-2xl capitalize">Feb</p>
              </div>
              <div className="p-4  flex-grow text-gray-600 font-light text-sm bg-gray-100">
                <h3 className="text-green-500 font-medium text-lg cursor-pointer hover:text-green-700 transition-colors duration-300 ease-in-out">
                  Workshop Parenting
                </h3>
                <div>
                  <BiTime className="inline-block text-lg" /> 09.00 - 20.00 Wib
                </div>
                <div>
                  <BiMap className="inline-block text-lg" /> Aula SMA Islam
                  Sultan Agung 1
                </div>
              </div>
            </div>

            <div className="mt-4 text-right">
              <ButtonLengkap variant="default">
                Lihat Agenda Lainnya
              </ButtonLengkap>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

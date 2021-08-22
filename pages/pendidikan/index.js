import React, { useState } from "react";
import Image from "next/image";

import Footer from "@components/Layout/Footer";
import Navbar from "@components/Layout/Navbar";

import { BiPlusCircle } from "react-icons/bi";

const imageLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
};

export default function Pendidikan() {
  const [daftarSekolah, setDaftarSekolah] = useState([
    {
      id: 1,
      title: "KB-TK Islam Sultan Agung 1",
      src: "assets/images/contoh.jpg",
    },
    {
      id: 2,
      title: "KB-TK Islam Sultan Agung 2",
      src: "assets/images/contoh.jpg",
    },
    {
      id: 3,
      title: "KB-TK Sultan Agung 4",
      src: "assets/images/contoh.jpg",
    },
    {
      id: 4,
      title: "Sd Islam Sultan Agung 4",
      src: "assets/images/contoh.jpg",
    },
    {
      id: 5,
      title: "Sd Islam Sultan Agung 1",
      src: "assets/images/contoh.jpg",
    },
    {
      id: 6,
      title: "Sd Islam Sultan Agung 2",
      src: "assets/images/contoh.jpg",
    },
    {
      id: 7,
      title: "Sd Islam Sultan Agung 3",
      src: "assets/images/contoh.jpg",
    },
    {
      id: 8,
      title: "SMP Islam Sultan Agung 4",
      src: "assets/images/contoh.jpg",
    },
    {
      id: 9,
      title: "SMP Islam Sultan Agung 1",
      src: "assets/images/contoh.jpg",
    },
    {
      id: 10,
      title: "SMP Islam Sultan Agung 4",
      src: "assets/images/contoh.jpg",
    },
    {
      id: 11,
      title: "SMA Islam Sultan Agung 1",
      src: "assets/images/contoh.jpg",
    },
    {
      id: 12,
      title: "SMA Islam Sultan Agung 3",
      src: "assets/images/contoh.jpg",
    },
  ]);

  return (
    <>
      <Navbar />
      <div className="relative text-right min-h-[500px] lg:h-[80vh] w-full left-[30%] max-w-[70%]  -z-10 ">
        <Image
          className="absolute z-0  "
          loader={imageLoader}
          src="assets/images/contoh.jpg"
          alt="Picture of the author"
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div className="container mx-auto">
        <div className=" mt-[-80vh]  inline-block py-10 px-8 bg-green-600 max-w-[400px] rounded-md">
          <h1 className="text-5xl capitalize font-semibold   text-yellow-400 ">
            Pendidikan
          </h1>
          <div className="mt-7">
            <p className="font-normal text-white text-xl leading-8">
              Bidang Pendidikan Dasar dan Menengah Yayasan Badan Wakaf Sultan
              Agung menyelenggarakan berbagai jenjang pendidikan meliputi KB-TK,
              SD, SMP dan SMA . KB-TK terdapat 3 sekolah, jenjang SD terdapat 4
              sekolah, SMP 2 sekolah dan jenjang SMA terdapat 2 sekolah.
            </p>
          </div>
        </div>
        <div className="block mx-5">
          <h2 className="text-2xl capitalize font-semibold my-4 md:mt-10 md:mb-5 lg:text-3xl text-green-500 ">
            Sekolah-Sekolah Bidang Dikdasmen YBWSA
          </h2>
          <div className="max-w-full md:max-w-[60%]">
            <p className="text-gray-500 font-medium">
              Bidang Pendidikan Dasar dan Menengah Yayasan Badan Wakaf Sultan
              Agung menyelenggarakan berbagai jenjang pendidikan meliputi KB-TK,
              SD, SMP dan SMA . KB-TK terdapat 3 sekolah, jenjang SD terdapat 4
              sekolah, SMP 2 sekolah dan jenjang SMA terdapat 2 sekolah
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24 mt-5">
            {daftarSekolah.map((sekolah) => (
              <div
                className="bg-gray-100  rounded-md shadow-lg "
                key={sekolah.id}
              >
                <div>
                  <a
                    href=""
                    className="relative group h-40 flex items-center justify-center  overflow-hidden rounded-sm "
                  >
                    <div className="absolute flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-150 bg-black/50 h-full w-full z-10 transition-all duration-300 ease-in">
                      <BiPlusCircle className="text-white h-10 w-10" />
                    </div>

                    <Image
                      className="absolute w-full h-full transition-transform duration-300 ease-in-out bg-center  z-0 group-hover:scale-150 "
                      loader={imageLoader}
                      src="assets/images/contoh.jpg"
                      alt="Picture of the author"
                      objectFit="cover"
                      layout="fill"
                    ></Image>
                  </a>
                </div>
                <div className="mx-3 h-16 -mt-8 flex items-center rounded-sm relative bg-green-600 z-10 text-center transition-colors hover:bg-green-700 ">
                  <a
                    href=""
                    className=" text-white  overflow-hidden w-full max-h-16"
                  >
                    {sekolah.title}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

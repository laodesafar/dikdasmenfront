import React from "react";
import ButtonLengkap from "@components/UI/ButtonLengkap";
import { BiBuildings, BiGroup, BiUser } from "react-icons/bi";

export default function Pendidikan() {
  return (
    <section
      className="flex relative max-h-[30rem] bg-gray-100 py-4 mt-16"
      id="pendidikan"
    >
      <div className="container relative mx-auto">
        <img
          className="absolute left-20 -top-24  w-2/6"
          src="assets/images/pendidikan.png"
          alt=""
        />
        <div className="flex items-center  mt-10 mb-5">
          <div className=" w-8/12"></div>
          <div className="w-full flex flex-col h-48 xl:h-80 ml-10">
            <div>
              <h1 className="font-semibold text-gray-700  leading-none text-2xl mt-1 mb-5 capitalize ">
                <a href="#" className=" hover:text-green-500">
                  Pendidikan
                </a>
              </h1>

              <div className="max-w-full">
                <p className="text-base font-medium tracking-wide text-gray-500 mt-1 hidden lg:block">
                  Bidang pendidikan dasar dan menengah Yayasan Badan Wakaf
                  Sultan Agung memiliki 11 sekolah yang menyelengarakan
                  pendidikan dari tingkat dasar hingga tingkat menengah atas.
                </p>
              </div>
            </div>
            <div className="h-full"></div>
            <div className="mb-3 max-w-[10rem]">
              <ButtonLengkap variant="green-button">Selengkapnya</ButtonLengkap>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6  relative">
          <div className="card flex border-t-4 border-green-500  justify-center flex-col items-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow h-72">
            <BiBuildings className="h-28 w-28 text-green-500" />

            <div className="p-6 text-center text-gray-700 ">
              <p>11 sekolah teridiri dari 3 KB/TK, 4 SD, 2 SMP dan 2 SMA</p>
            </div>
            <p className="font-semibold text-green-500 text-2xl flex-end">
              11 Sekolah
            </p>
          </div>

          <div className="card flex border-t-4 border-green-500 justify-center flex-col items-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <BiGroup className="h-28 w-28 text-green-500" />

            <div className="p-6 text-center text-gray-700 ">
              <p>100 Pegawai Tetap, 50 pegawai tidak tetap</p>
            </div>
            <p className="font-semibold text-green-500 text-2xl">
              150 Pengabdi
            </p>
          </div>

          <div className="card flex border-t-4 border-green-500 justify-center flex-col items-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <BiUser className="h-28 w-28 text-green-500" />

            <div className="p-6 text-center text-gray-700 ">
              <p>520 siswa dan 710 siswi</p>
            </div>
            <p className="font-semibold text-green-500 text-2xl ">1230 Siswa</p>
          </div>
        </div>
      </div>
    </section>
  );
}

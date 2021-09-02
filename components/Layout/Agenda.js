import React from "react";

import ButtonLengkap from "@components/UI/ButtonLengkap";
import Hero from "@components/UI/hero";
import AgendaCard from "@components/UI/AgendaCard";

export default function Agenda() {
  return (
    <section className="flex my-10 ">
      <div className="container mx-auto px-10 md:px-0   py-6   ">
        <div className="grid grid-col-1 md:grid-cols-3  md:px-0">
          <div className="md:col-span-2 flex flex-col md:mr-4">
            <h1 className=" capitalize text-2xl py-4 font-semibold text-gray-600">
              Pengumuman
            </h1>
            <Hero
              title="Hasil Ujian Kenaikan Pangkat"
              pengumuman
              tanggal="29 Agustus 2021"
            />
            <div className="grid grid-col-1 md:grid-cols-3 mt-4 gap-2">
              <div className="flex flex-row justify-center shadow-md  mb-2">
                <div className="p-4 flex-grow  text-gray-700 font-light overflow-hidden md:overflow-visible bg-gray-100 h-20 md:h-auto lg:min-h-[8rem]">
                  <div className="text-gray-400 text-sm font-normal md:mt-4">
                    18 Agustus 2021
                  </div>
                  <h3 className="text-green-500 cursor-pointer hover:text-green-700 font-medium  mt-2 transition-colors duration-300 ease-in-out">
                    Lowongan Guru PAI SD Islam Sultan Agung 2
                  </h3>
                </div>
              </div>
              <div className="flex flex-row justify-center shadow-md  mb-2">
                <div className="p-4 flex-grow  text-gray-600 font-light overflow-hidden md:overflow-visible bg-gray-100 h-20 md:h-auto lg:min-h-[8rem]">
                  <div className="text-gray-400 text-sm font-normal md:mt-4">
                    18 Agustus 2021
                  </div>
                  <h3 className="text-green-500 cursor-pointer hover:text-green-700 font-medium  mt-2 transition-colors duration-300 ease-in-out">
                    Lowongan Guru PAI SD Islam Sultan Agung 2
                  </h3>
                </div>
              </div>
              <div className="flex flex-row justify-center shadow-md  mb-2">
                <div className="p-4 flex-grow  text-gray-600 font-light  overflow-hidden md:overflow-visible bg-gray-100 h-20 md:h-auto lg:min-h-[8rem]">
                  <div className="text-gray-400 text-sm font-normal md: mt-4">
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
            <AgendaCard
              title="Workshop dan Parenting Siswa Baru 2021"
              tempat="Aula SMA Sultan Agung 1"
              tanggal="20"
              bulan="Feb"
              waktu="08.00 - 20.00 Wib"
            />
            <AgendaCard
              title="Refresh Budaya Sekolah Islam"
              tempat="Graha Wiyata Patemon"
              tanggal="31"
              bulan="Agu"
              waktu="08.00 - 20.00 Wib"
            />
            <AgendaCard
              title="Monitoring Bidang Keuangan"
              tempat="SMP Islam Sultan Agung 1"
              tanggal="23"
              bulan="Mar"
              waktu="08.00 - 20.00 Wib"
            />

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

import React from "react";

import ButtonLengkap from "@components/UI/ButtonLengkap";

export default function Sambutan() {
  return (
    <section
      className="flex py-6 relative mt-24 xl:mt-64 bg-gradient-to-r from-gray-100 via-white  to-white"
      id="sambutan"
    >
      <div className="absolute left-0 w-full md:w-6/12 bg-gray-100 shadow-lg  z-10">
        <h1 className="text-center uppercase text-2xl py-4  font-semibold text-green-500">
          Sambutan Ketua Pendidikan
        </h1>
      </div>
      <div className="container mx-auto relative">
        <div className="absolute bg-green-500 w-8/12 right-28 md:right-0 -bottom-10 md:bottom-auto  md:top-0 mt-8 p-4 shadow-lg ">
          <div className="flex justify-center flex-col text-center px-5 md:px-20  md:h-80">
            <h1 className="capitalize text-2xl py-4 text-white">
              Drs. H. Tjuk Subchan Sulchan
            </h1>
            <p className="hidden md:block max-h-32 overflow-hidden text-white font-light">
              Bidang pendidikan dasar dan menengah Yayasan Badan Wakaf Sultan
              Agung memiliki 11 sekolah yang menyelengarakan pendidikan dari
              tingkat dasar hingga tingkat menengah atas.
            </p>
            <div>
              <ButtonLengkap
                variant="white-button"
                className="mt-0 mb-5 md:mb-0 md:mt-10"
              >
                Selengkapnya
              </ButtonLengkap>
            </div>
          </div>
        </div>
        <img
          className="mt-20 lg:ml-20 mx-auto md:ml-0"
          src="/assets/images/sambutan.png"
          alt=""
        />
      </div>
    </section>
  );
}

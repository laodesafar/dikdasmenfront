import React from "react";

import ButtonLengkap from "@components/UI/ButtonLengkap";

export default function Sambutan() {
  return (
    <section
      className="flex py-6 relative mt-64 bg-gradient-to-r from-gray-100 via-white  to-white"
      id="sambutan"
    >
      <div className="absolute left-0 w-6/12 bg-gray-100 shadow-lg  rounded-lg z-50">
        <h1 className="text-center uppercase text-2xl py-4  font-semibold text-green-500">
          Sambutan Ketua Pendidikan
        </h1>
      </div>
      <div className="container mx-auto relative">
        <div className="absolute bg-green-500 w-8/12 right-0 mt-8 p-4 shadow-lg  rounded-lg">
          <div className="flex justify-center flex-col px-20  h-96">
            <h1 className="capitalize text-2xl py-4 text-white">
              Drs. H. Tjuk Subchan Sulchan
            </h1>
            <p className="text-white font-light">
              Bidang pendidikan dasar dan menengah Yayasan Badan Wakaf Sultan
              Agung memiliki 11 sekolah yang menyelengarakan pendidikan dari
              tingkat dasar hingga tingkat menengah atas.
            </p>
            <div>
              <ButtonLengkap variant="white-button">Selengkapnya</ButtonLengkap>
            </div>
          </div>
        </div>
        <img className="mt-20 ml-20" src="/assets/images/sambutan.png" alt="" />
      </div>
    </section>
  );
}

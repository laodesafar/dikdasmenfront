import React from "react";

import ButtonLengkap from "@components/UI/ButtonLengkap";

export default function Agenda() {
  return (
    <section className="flex mt-10 shadow-md">
      <div className="container mx-auto bg-gray-100 rounded-lg px-4 py-6">
        <h1 className="text-center capitalize text-2xl py-4 font-semibold text-green-500">
          Agenda Mendatang
        </h1>

        <div className="grid grid-cols-3 gap-6 py-6">
          <div className="card flex flex-row ">
            <div className="w-24 h-24  py-2 bg-green-500 text-center rounded-md flex-shrink-0">
              <h1 className="text-white font-semibold text-5xl ">18</h1>
              <p className="text-yellow-300 text-2xl capitalize">Feb</p>
            </div>
            <div className="ml-4 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              tenetur perferendis ullam earum magnam neque nisi qui adipisci
              iusto placeat.
            </div>
          </div>

          <div className="card flex flex-row  ">
            <div className="w-24 h-24  py-2 bg-green-500 text-center rounded-md flex-shrink-0">
              <h1 className="text-white font-semibold text-5xl ">18</h1>
              <p className="text-yellow-300 text-2xl capitalize">Feb</p>
            </div>
            <div className="ml-4 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              tenetur perferendis ullam earum magnam neque nisi qui adipisci
              iusto placeat.
            </div>
          </div>

          <div className="card flex flex-row  ">
            <div className="w-24 h-24  py-2 bg-green-500 text-center rounded-md flex-shrink-0">
              <h1 className="text-white font-semibold text-5xl ">18</h1>
              <p className="text-yellow-300 text-2xl capitalize">Feb</p>
            </div>
            <div className="ml-4 text-gray-600 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              tenetur perferendis ullam earum magnam neque nisi qui adipisci
              iusto placeat.
            </div>
          </div>
        </div>
        <div className="text-center">
          <ButtonLengkap variant="green-button">Agenda Lainnya</ButtonLengkap>
        </div>
      </div>
    </section>
  );
}

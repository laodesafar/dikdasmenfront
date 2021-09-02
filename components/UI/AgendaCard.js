import React from "react";
import { BiTime, BiMap } from "react-icons/bi";

export default function AgendaCard({ title, tempat, waktu, tanggal, bulan }) {
  return (
    <div className="flex flex-row shadow-md  mb-2">
      <div className="py-2 px-4  bg-green-500 flex flex-col items-center justify-center ">
        <span className="text-white font-semibold text-3xl ">{tanggal}</span>
        <p className="text-yellow-300 text-2xl capitalize">{bulan}</p>
      </div>
      <div className="p-4 flex-grow text-gray-600 font-light text-sm bg-gray-100">
        <h3 className="text-green-500 font-medium text-lg cursor-pointer hover:text-green-700 transition-colors duration-300 ease-in-out">
          {title}
        </h3>
        <div>
          <BiTime className="inline-block text-lg" /> {waktu}
        </div>
        <div>
          <BiMap className="inline-block text-lg" /> {tempat}
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function PengumumanSidebar({ pengumuman, tanggal }) {
  return (
    <div className="border-b-[1px] border-gray-200 py-3">
      <h3 className="font-normal text-green-500 cursor-pointer hover:text-green-600 transition-colors duration-300 ease-in-out">
        {pengumuman}
      </h3>
      <p className="text-gray-400 font-normal text-xs">{tanggal}</p>
    </div>
  );
}

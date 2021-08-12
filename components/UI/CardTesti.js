import React from "react";

import { VscQuote } from "react-icons/vsc";

export default function CardTesti() {
  return (
    <div className="flex  flex-col items-center p-2 bg-green-500 ">
      <img
        className="rounded-full h-32 w-32 my-5"
        src="/assets/images/image4.png"
        alt=""
      />
      <div className="px-7 ">
        <VscQuote className="text-white text-2xl mb-2" />
        <p className=" font-light text-sm text-white mb-2">
          Anak saya menjadi lebih mandiri semenjak disekolahkan diSultan Agung
          lebih baik dan lebih beradab. Semoga ikhtiar Sultan Agung untuk
          melahirkan generasi khairah ummah diberi kemudahan dan keberkahan.
          Amin...
        </p>
        <div className="border-b-2 border-yellow-400 "></div>
        <div className="my-2 text-sm font-light">
          <p className="text-yellow-400 text-lg">Jeff Bezos</p>
          <p className="text-white">Orangtua Siswa</p>
        </div>
      </div>
    </div>
  );
}

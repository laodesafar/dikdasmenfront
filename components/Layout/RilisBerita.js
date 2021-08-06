import React from "react";
import Image from "next/image";

import InforPost from "./InforPost";

const imageLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
};

export default function RilisBerita() {
  return (
    <div>
      <h2 className="text-2xl capitalize font-semibold mt-10 mb-5 text-green-500 ">
        Rilis Berita
      </h2>

      <article className="absolute w-screen  md:w-auto md:relative h-56 md:h-[450px] lg:min-h-[340px] lg:h-auto mb-14 lg:mb-8 shadow-lg bg-gray-100">
        <div className="lg:absolute lg:w-[512px]  lg:right-auto lg:h-[340px] ">
          <Image
            loader={imageLoader}
            src="assets/images/contoh.jpg"
            alt="Picture of the author"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="relative md:absolute lg:left-[512px] bottom-[-100%] bg-gray-100  md:w-[80%]  p-6 lg:p-8 md:-bottom-8 lg:bottom-0 lg:top-0 md:left-1/2  md:-translate-x-1/2   lg:w-auto lg:transform-none">
          <InforPost
            tags="berita"
            date="7 Agustus 2021"
            title="Lazis Sultan Agung Menyalurkan Bantuan Korban Banjir Demak"
            description="Di awal Tahun Baru 2021, ratusan rumah di Desa Sumberejo Kecamatan Bonang, Kabupaten Demak, Jawa Tengah terendam banjir luapan Sungai Tuntang. (Kompas.com)"
          />
        </div>
      </article>
    </div>
  );
}

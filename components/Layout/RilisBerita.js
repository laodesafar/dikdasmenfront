import React, { useState } from "react";
import Image from "next/image";

import InforPost from "./InforPost";
import CardBerita from "@components/UI/CardBerita";
import ButtonLengkap from "@components/UI/ButtonLengkap";

const imageLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
};

export default function RilisBerita() {
  const [berita, setBerita] = useState([
    {
      id: 1,
      tags: "berita",
      date: "7 Agustus 2021",
      title: "Lazis Sultan Agung Menyalurkan Bantuan Korban Banjir Demak",
      description:
        "Di awal Tahun Baru 2021, ratusan rumah di Desa Sumberejo Kecamatan Bonang, Kabupaten Demak, Jawa Tengah terendam banjir luapan Sungai Tuntang. (Kompas.com)",
    },
    {
      id: 2,
      tags: "mlbs",
      date: "10 Agustus 2021",
      title:
        "Dikdasmen Memperingati Perayaan Tahun Baru Islam 1 Muharram 1443H dengan sesuatu yang akan",
      description:
        "Di awal Tahun Baru 2021, ratusan rumah di Desa Sumberejo Kecamatan Bonang, Kabupaten Demak, Jawa Tengah terendam banjir luapan Sungai Tuntang. (Kompas.com)",
    },
    {
      id: 3,
      tags: "busi",
      date: "10 Agustus 2021",
      title: "Dikdasmen Memperingati Perayaan Tahun Baru Islam 1 Muharram 1443",
      description:
        "Di awal Tahun Baru 2021, ratusan rumah di Desa Sumberejo Kecamatan Bonang, Kabupaten Demak, Jawa Tengah terendam banjir luapan Sungai Tuntang. (Kompas.com)",
    },
  ]);

  return (
    <div>
      <h2 className="text-2xl capitalize font-semibold my-4 md:mt-10 md:mb-5 lg:text-3xl text-green-500 ">
        Rilis Berita
      </h2>

      <article className="absolute w-full sm:relative  md:w-auto md:relative h-56 md:h-[450px] lg:min-h-[340px] lg:h-auto mb-14 lg:mb-8 shadow-lg bg-gray-100">
        <div className="lg:absolute  lg:w-[512px]  lg:right-auto lg:h-[340px] ">
          <Image
            className="relative rounded-md lg:rounded-r-none"
            loader={imageLoader}
            src="assets/images/contoh.jpg"
            alt="Picture of the author"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="relative md:absolute rounded-md lg:rounded-l-none lg:left-[512px] bottom-[-100%] bg-gray-100  md:w-[80%]  p-6 lg:p-8 md:-bottom-8 lg:bottom-0 lg:top-0 md:left-1/2  md:-translate-x-1/2 shadow-md  lg:w-auto lg:transform-none">
          <InforPost
            tags="berita"
            date="7 Agustus 2021"
            title="Lazis Sultan Agung Menyalurkan Bantuan Korban Banjir Demak"
            description="Di awal Tahun Baru 2021, ratusan rumah di Desa Sumberejo Kecamatan Bonang, Kabupaten Demak, Jawa Tengah terendam banjir luapan Sungai Tuntang. (Kompas.com)"
          />
        </div>
      </article>

      <div className="block mt-[25rem] sm:mt-36 md:mt-0   md:grid  md:grid-cols-3 md:gap-8">
        {berita.map((post) => (
          <CardBerita
            key={post.id}
            laoder={imageLoader}
            src="/assets/images/contoh.jpg"
            width={512}
            height={340}
            {...post}
          />
        ))}
        <div className="col-span-3 mx-auto">
          <ButtonLengkap variant="green-button">Berita Lainnya</ButtonLengkap>
        </div>
      </div>
    </div>
  );
}

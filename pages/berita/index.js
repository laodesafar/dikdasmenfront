import { useState } from "react";
import Image from "next/image";

import InforPost from "@components/Layout/InforPost";
import Layout from "@components/Layout/Layout";
import Hero from "@components/UI/hero";

import SideBar from "@components/Layout/SideBar";

const imageLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
};

export default function Berita() {
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
    {
      id: 4,
      tags: "busi",
      date: "10 Agustus 2021",
      title: "Dikdasmen Memperingati Perayaan Tahun Baru Islam 1 Muharram 1443",
      description:
        "Di awal Tahun Baru 2021, ratusan rumah di Desa Sumberejo Kecamatan Bonang, Kabupaten Demak, Jawa Tengah terendam banjir luapan Sungai Tuntang. (Kompas.com)",
    },
    {
      id: 5,
      tags: "busi",
      date: "10 Agustus 2021",
      title: "Dikdasmen Memperingati Perayaan Tahun Baru Islam 1 Muharram 1443",
      description:
        "Di awal Tahun Baru 2021, ratusan rumah di Desa Sumberejo Kecamatan Bonang, Kabupaten Demak, Jawa Tengah terendam banjir luapan Sungai Tuntang. (Kompas.com)",
    },
    {
      id: 6,
      tags: "busi",
      date: "10 Agustus 2021",
      title: "Dikdasmen Memperingati Perayaan Tahun Baru Islam 1 Muharram 1443",
      description:
        "Di awal Tahun Baru 2021, ratusan rumah di Desa Sumberejo Kecamatan Bonang, Kabupaten Demak, Jawa Tengah terendam banjir luapan Sungai Tuntang. (Kompas.com)",
    },
    {
      id: 7,
      tags: "busi",
      date: "10 Agustus 2021",
      title: "Dikdasmen Memperingati Perayaan Tahun Baru Islam 1 Muharram 1443",
      description:
        "Di awal Tahun Baru 2021, ratusan rumah di Desa Sumberejo Kecamatan Bonang, Kabupaten Demak, Jawa Tengah terendam banjir luapan Sungai Tuntang. (Kompas.com)",
    },
    {
      id: 8,
      tags: "busi",
      date: "10 Agustus 2021",
      title: "Dikdasmen Memperingati Perayaan Tahun Baru Islam 1 Muharram 1443",
      description:
        "Di awal Tahun Baru 2021, ratusan rumah di Desa Sumberejo Kecamatan Bonang, Kabupaten Demak, Jawa Tengah terendam banjir luapan Sungai Tuntang. (Kompas.com)",
    },
    {
      id: 9,
      tags: "busi",
      date: "10 Agustus 2021",
      title: "Dikdasmen Memperingati Perayaan Tahun Baru Islam 1 Muharram 1443",
      description:
        "Di awal Tahun Baru 2021, ratusan rumah di Desa Sumberejo Kecamatan Bonang, Kabupaten Demak, Jawa Tengah terendam banjir luapan Sungai Tuntang. (Kompas.com)",
    },
    {
      id: 10,
      tags: "busi",
      date: "10 Agustus 2021",
      title: "Dikdasmen Memperingati Perayaan Tahun Baru Islam 1 Muharram 1443",
      description:
        "Di awal Tahun Baru 2021, ratusan rumah di Desa Sumberejo Kecamatan Bonang, Kabupaten Demak, Jawa Tengah terendam banjir luapan Sungai Tuntang. (Kompas.com)",
    },
  ]);
  return (
    <Layout>
      <Hero title="Rilis Berita Terbaru " />
      <div className="container mx-auto px-10 md:px-0   py-6   ">
        <div className="grid grid-col-1 md:grid-cols-3  md:px-0 ">
          <div className="md:col-span-2 flex flex-col md:mr-4">
            <h1 className=" capitalize text-2xl py-4 font-semibold text-gray-600">
              Rilis Berita
            </h1>
            <div className="mt-2 pr-4">
              {berita.map((post) => (
                <article
                  className="grid grid-cols-3 gap-4 mb-5 pb-5 border-b-[1px] border-gray-200 "
                  key={post.id}
                >
                  <div className="relative max-h-44">
                    <Image
                      className="absolute "
                      loader={imageLoader}
                      src="assets/images/contoh.jpg"
                      alt={post.title}
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                  <div className="col-span-2">
                    <InforPost
                      variant={true}
                      tags={post.tags}
                      date={post.date}
                      title={post.title}
                      description={post.description}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>

          <SideBar />
        </div>
      </div>
    </Layout>
  );
}

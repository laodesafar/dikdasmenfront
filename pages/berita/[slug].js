import Image from "next/image";
import Link from "next/link";
const imageLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
};

import Layout from "@components/Layout/Layout";

export default function beritaDetail() {
  return (
    <Layout>
      <div className="mx-auto container">
        <div className="mx-auto max-w-[80%] my-2">
          <h1 className="text-center py-4 text-4xl   font-semibold text-green-500">
            Lazis Sultan Agung Menyalurkan Bantuan Korban Banjir Demak
          </h1>

          <div className={`flex items-center text-gray-400  space-x-2`}>
            <div className="capitalize">
              <Link href="#">
                <a className="hover:text-green-700 text-green-500 transition-colors duration-300 ease-in-out">
                  Admin Pesanmasa
                </a>
              </Link>
            </div>
            <span>pada</span>
            <div>29 Agustus 2021</div>
            <span>Kategori</span>
            <div className="capitalize ">
              <Link href="#">
                <a className="hover:text-green-700 text-green-500 transition-colors duration-300 ease-in-out">
                  berita
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative h-[500px] w-full">
          <Image
            className="absolute "
            loader={imageLoader}
            src="assets/images/contoh.jpg"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="my-6 mx-auto max-w-[80%]  text-gray-500 flex-col space-y-6 text-base leading-7 tracking-tight text-justify">
          <p>
            Di awal Tahun Baru 2021, ratusan rumah di Desa Sumberejo Kecamatan
            Bonang, Kabupaten Demak, Jawa Tengah terendam banjir luapan Sungai
            Tuntang. (Kompas.com)
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
            illum qui, odio quos alias et perspiciatis, sit maxime autem fugit,
            rem saepe dicta sapiente a architecto laudantium tempora commodi
            blanditiis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
            illum qui, odio quos alias et perspiciatis, sit maxime autem fugit,
            rem saepe dicta sapiente a architecto laudantium tempora commodi
            blanditiis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
            illum qui, odio quos alias et perspiciatis, sit maxime autem fugit,
            rem saepe dicta sapiente a architecto laudantium tempora commodi
            blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nisi veritatis eum adipisci fugit. Praesentium, quasi ratione harum
            maiores voluptatem accusamus provident aperiam nostrum repellat
            repudiandae deserunt rerum illum, suscipit quisquam.
          </p>
        </div>
      </div>
    </Layout>
  );
}

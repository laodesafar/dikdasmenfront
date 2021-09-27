import Layout from "@components/Layout/Layout";
import Breadcumb from "@components/UI/Breadcumb";

import Image from "next/image";

import ButtonLengkap from "@components/UI/ButtonLengkap";

const imageLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
};

export default function PendidikanDetail() {
  return (
    <Layout>
      <div className="container mx-auto">
        <Breadcumb />
        <h1 className="pb-4 text-4xl md:mx-auto  font-semibold text-green-500">
          SMA Islam Sultan Agung 1
        </h1>
        <div className="flex md:flex-row flex-col">
          <div className="lg:w-5/12 md:w-6/12 w-12/12 order-last md:order-first">
            <div className="my-2 mr-0 mx-2 md:mx-0 md:mr-6 text-gray-500 flex-col space-y-4 text-base leading-7 tracking-tight text-justify">
              <p>
                Di awal Tahun Baru 2021, ratusan rumah di Desa Sumberejo
                Kecamatan Bonang, Kabupaten Demak, Jawa Tengah terendam banjir
                luapan Sungai Tuntang. (Kompas.com)
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
                illum qui, odio quos alias et perspiciatis, sit maxime autem
                fugit, rem saepe dicta sapiente a architecto laudantium tempora
                commodi blanditiis.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
                illum qui, odio quos alias et perspiciatis, sit maxime autem
                fugit, rem saepe dicta sapiente a architecto laudantium tempora
                commodi blanditiis.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
                illum qui, odio quos alias et perspiciatis, sit maxime autem
                fugit, rem saepe dicta sapiente a architecto laudantium tempora
                commodi blanditiis. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nisi veritatis eum adipisci fugit.
                Praesentium, quasi ratione harum maiores voluptatem accusamus
                provident aperiam nostrum repellat repudiandae deserunt rerum
                illum, suscipit quisquam.
              </p>
            </div>
          </div>
          <div className="my-4 lg:w-7/12 md:w-6/12 w-12/12">
            <div className="relative h-[400px] w-full">
              <Image
                className="absolute "
                loader={imageLoader}
                src="assets/images/contoh.jpg"
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div className="mt-4 bg-gray-200 p-4 text-gray-700 ">
              <div className=" flex-col space-y-3">
                <div className="flex">
                  <div className="w-2/12 lg:w-2/12 md:w-3/12 ">Alamat</div>
                  <div className="w-10/12 lg:w-10/12 md:w-9/12">
                    : Jl. Raya Kaligawe KM 4, Semarang, 50112
                  </div>
                </div>
                <div className="flex">
                  <div className="w-2/12 lg:w-2/12 md:w-3/12 ">Telepon</div>
                  <div className="w-10/12 lg:w-10/12 md:w-9/12">
                    : 0853968232876
                  </div>
                </div>
                <div className="flex">
                  <div className="w-2/12 lg:w-2/12 md:w-3/12 ">E-mail</div>
                  <div className="w-10/12 lg:w-10/12 md:w-9/12">
                    : ybwsadikdasmen@gmail.com
                  </div>
                </div>
                <div className="flex">
                  <div className="w-2/12 lg:w-2/12 md:w-3/12 ">Web</div>
                  <div className="w-10/12 lg:w-10/12 md:w-9/12">
                    : ybwsadikdasmen@gmail.com
                  </div>
                </div>
              </div>
              <div className="mt-8 mb-2">
                <ButtonLengkap href="/pendidikan" variant="green-button">
                  Kunjungi Website Sekolah
                </ButtonLengkap>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

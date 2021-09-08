import Layout from "@components/Layout/Layout";
import Breadcumb from "@components/UI/Breadcumb";

import Image from "next/image";

const imageLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
};

export default function PendidikanDetail() {
  return (
    <Layout>
      <div className="container mx-auto">
        <Breadcumb />
        <h1 className="pb-4 text-4xl   font-semibold text-green-500">
          SMA Islam Sultan Agung 1
        </h1>
        <div className="flex md:flex-row flex-col">
          <div className="lg:w-5/12 md:w-6/12 w-12/12 order-last md:order-first">
            <div className="mt-2 mr-6 text-gray-500 flex-col space-y-4 text-base leading-7 tracking-tight text-justify">
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
          </div>
        </div>
      </div>
    </Layout>
  );
}

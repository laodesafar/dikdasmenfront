import Layout from "@components/Layout/Layout";
import Hero from "@components/UI/hero";
import SideBar from "@components/Layout/SideBar";

export default function Sejarah() {
  return (
    <Layout>
      <Hero title="Sejarah Dikdasmen YBWSA" />
      <div className="container mx-auto px-10 md:px-0   py-6   ">
        <div className="grid grid-col-1 md:grid-cols-3  md:px-0 ">
          <div className="md:col-span-2 flex flex-col md:mr-4">
            <h1 className=" capitalize text-2xl py-4 font-semibold text-gray-600">
              Sejarah
            </h1>

            <article className="mt-2 pr-5  text-gray-500 flex-col space-y-6 text-base leading-7 tracking-tight text-justify">
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
            </article>
          </div>

          <SideBar />
        </div>
      </div>
    </Layout>
  );
}

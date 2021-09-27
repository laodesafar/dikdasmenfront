import { useState } from "react";
import Layout from "@components/Layout/Layout";
import VisibilitySensor from "react-visibility-sensor";

export default function Foto() {
  const [galeriFoto, setGaleriFoto] = useState([
    {
      id: 1,
      title: "KB-TK Islam Sultan Agung 1",
      src: "../assets/images/contoh.jpg",
    },
    {
      id: 2,
      title: "KB-TK Islam Sultan Agung 2",
      src: "../assets/images/contoh.jpg",
    },
    {
      id: 3,
      title: "KB-TK Sultan Agung 4",
      src: "../assets/images/contoh.jpg",
    },
    {
      id: 4,
      title: "Sd Islam Sultan Agung 4",
      src: "../assets/images/contoh.jpg",
    },
    {
      id: 5,
      title: "Sd Islam Sultan Agung 1",
      src: "../assets/images/contoh.jpg",
    },
    {
      id: 6,
      title: "Sd Islam Sultan Agung 2",
      src: "../assets/images/contoh.jpg",
    },
    {
      id: 7,
      title: "Sd Islam Sultan Agung 3",
      src: "../assets/images/contoh.jpg",
    },
    {
      id: 8,
      title: "SMP Islam Sultan Agung 4",
      src: "../assets/images/contoh.jpg",
    },
    {
      id: 9,
      title: "SMP Islam Sultan Agung 1",
      src: "../assets/images/contoh.jpg",
    },
    {
      id: 10,
      title: "SMP Islam Sultan Agung 4",
      src: "../assets/images/contoh.jpg",
    },
    {
      id: 11,
      title: "SMA Islam Sultan Agung 1",
      src: "../assets/images/contoh.jpg",
    },
    {
      id: 12,
      title: "SMA Islam Sultan Agung 3",
      src: "../assets/images/contoh.jpg",
    },
  ]);

  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className=" capitalize text-2xl py-4 font-semibold text-gray-600">
          Galeri Foto
        </h1>
        <div className="grid grid-cols-2 gap-1 ">
          {galeriFoto &&
            galeriFoto.map((foto) => (
              <VisibilitySensor>
                {({ isVisible }) =>
                  isVisible && (
                    <GridFoto
                      src={foto.src}
                      title={foto.title}
                      show={isVisible}
                    />
                  )
                }
              </VisibilitySensor>
            ))}
        </div>
      </div>
    </Layout>
  );
}

function GridFoto({ title, src, show }) {
  return (
    <div
      className={`relative transition duration-500 ${show} ? "": "opacity-0"`}
    >
      <div className="absolute inset-0 z-10 flex transition duration-300 ease-in hover:opacity-0">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="mx-auto text-white z-10 self-center uppercase tracking-widest text-sm">
          {title}
        </div>
      </div>

      <img src={src} alt={title} />
    </div>
  );
}

import { useState } from "react";
import CardTesti from "@components/UI/CardTesti";

export default function Testimonial() {
  const [testimoni, setTestimoni] = useState([
    {
      id: 1,
      src: "/assets/images/image4.png",
      description:
        "Anak saya menjadi lebih mandiri semenjak disekolahkan diSultan Agung lebih baik dan lebih beradab. Semoga ikhtiar Sultan Agung untuk melahirkan generasi khairah ummah diberi kemudahan dan keberkahan. Amin...",
      name: "Jeff Bezos",
      status: "Orangtua Siswa",
    },
    {
      id: 2,
      src: "/assets/images/image4.png",
      description:
        "Anak saya menjadi lebih mandiri semenjak disekolahkan diSultan Agung lebih baik dan lebih beradab. Semoga ikhtiar Sultan Agung untuk melahirkan generasi khairah ummah diberi kemudahan dan keberkahan. Amin...",
      name: "Jeff Bezos",
      status: "Orangtua Siswa",
    },
    {
      id: 3,
      src: "/assets/images/image4.png",
      description:
        "Anak saya menjadi lebih mandiri semenjak disekolahkan diSultan Agung lebih baik dan lebih beradab. Semoga ikhtiar Sultan Agung untuk melahirkan generasi khairah ummah diberi kemudahan dan keberkahan. Amin...",
      name: "Jeff Bezos",
      status: "Orangtua Siswa",
    },
    {
      id: 4,
      src: "/assets/images/image4.png",
      description:
        "Anak saya menjadi lebih mandiri semenjak disekolahkan diSultan Agung lebih baik dan lebih beradab. Semoga ikhtiar Sultan Agung untuk melahirkan generasi khairah ummah diberi kemudahan dan keberkahan. Amin...",
      name: "Candra",
      status: "Siswa",
    },
  ]);

  const [active, setActive] = useState("");

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl capitalize font-semibold my-4 md:mt-10 md:mb-5 lg:text-3xl text-green-500 ">
        Kata Mereka Tentang Dikdasmen
      </h2>
      <div className="flex -space-x-40 overflow-hidden mb-10">
        {testimoni.map((testi, index) => (
          <CardTesti
            key={testi.id}
            src={testi.src}
            description={testi.description}
            name={testi.name}
            status={testi.status}
            active={active}
            index={index}
            onHover={() => setActive(`active${index}`)}
          />
        ))}
      </div>
    </div>
  );
}

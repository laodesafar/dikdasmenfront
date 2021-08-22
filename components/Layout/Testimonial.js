import { useState, useEffect } from "react";
import CardTesti from "@components/UI/CardTesti";

export default function Testimonial() {
  const [testimoni, setTestimoni] = useState([
    {
      id: 1,
      src: "/assets/images/image4.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae beatae neque omnis vitae sit! Eos distinctio perspiciatis dolores quo facere, magnam enim beatae voluptates ipsum accusantium esse temporibus est quas!. Amin...",
      name: "Samara",
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
      src: "/assets/images/bill.jpeg",
      description:
        "Semoga ikhtiar Sultan Agung untuk melahirkan generasi khairah ummah diberi kemudahan dan keberkahan. Amin...",
      name: "Bill Gates",
      status: "Guru",
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

  const [active, setActive] = useState("active0");

  const handleActive = (value) => {
    setActive(value);
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl capitalize font-semibold my-4 md:mt-10 md:mb-5 lg:text-3xl text-green-500 ">
        Kata Mereka Tentang Dikdasmen
      </h2>
      <div className="relative h-[47rem] md:h-96 mb-10">
        {testimoni.map((testi, index) => (
          <CardTesti
            key={testi.id}
            src={testi.src}
            description={testi.description}
            name={testi.name}
            status={testi.status}
            active={active}
            index={index}
            handleActive={handleActive}
          />
        ))}
      </div>
    </div>
  );
}

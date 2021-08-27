import Layout from "@components/Layout/Layout";
import HeroVideo from "@components/Layout/HeroVideo";
import RilisBerita from "@components/Layout/RilisBerita";
import Pendidikan from "@components/Layout/Pendidikan";
import Sambutan from "@components/Layout/Sambutan";
import Agenda from "@components/Layout/Agenda";

import Testimonial from "@components/Layout/Testimonial";

export default function Home() {
  return (
    <Layout>
      <HeroVideo />
      <div className="container mx-auto">
        <RilisBerita />
      </div>
      <Pendidikan />
      <Sambutan />
      <Agenda />
      <div className="bg-gray-200 py-4">
        <Testimonial />
      </div>
    </Layout>
  );
}

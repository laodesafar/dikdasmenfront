import Navbar from "@components/Layout/Navbar";
import HeroVideo from "@components/Layout/HeroVideo";
import RilisBerita from "@components/Layout/RilisBerita";
import Pendidikan from "@components/Layout/Pendidikan";
import Sambutan from "@components/Layout/Sambutan";
import Agenda from "@components/Layout/Agenda";
import Footer from "@components/Layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroVideo />
      <div className="container mx-auto">
        <RilisBerita />
      </div>
      <Pendidikan />
      <Sambutan />
      <Agenda />
      <Footer />
    </>
  );
}

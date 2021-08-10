import { Fragment } from "react";
import Navbar from "@components/Layout/Navbar";
import HeroVideo from "@components/Layout/HeroVideo";
import RilisBerita from "@components/Layout/RilisBerita";
import Pendidikan from "@components/Layout/Pendidikan";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <HeroVideo />
      <div className="container mx-auto">
        <RilisBerita />
      </div>
      <Pendidikan />
    </Fragment>
  );
}

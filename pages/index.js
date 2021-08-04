import { Fragment } from "react";
import Navbar from "../components/Layout/Navbar";
import HeroVideo from "../components/Layout/HeroVideo";
import RilisBerita from "../components/Layout/RilisBerita";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <HeroVideo />
      <RilisBerita />
    </Fragment>
  );
}

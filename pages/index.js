import { Fragment } from "react";
import Navbar from "@components/Layout/Navbar";
import HeroVideo from "@components/Layout/HeroVideo";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <HeroVideo />
    </Fragment>
  );
}

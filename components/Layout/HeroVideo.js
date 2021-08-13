import { Fragment } from "react";

export default function HeroVideo() {
  return (
    <Fragment>
      <section className="h-[80vh] relative max-h-[80vh] overflow-hidden  -z-10 ">
        <div className=" relative max-h-[80vh] h-[80vh] ">
          <img
            className="align-middle object-cover  max-w-full w-full h-full  block md:hidden "
            src="/assets/images/cover-video.jpg"
            alt=""
          />
          <video
            id="videoBG"
            className=" align-baseline -z-10 hidden md:block min-w-full w-full h-full object-cover object-center"
            autoPlay
            muted
            loop
            poster="/assets/images/cover-video.jpg"
          >
            <source src="/assets/videos/dikdasmen.mp4" type="video/mp4" />
          </video>
          <div className="absolute top-1/2 w-screen text-center ">
            <h1 className="text-white text-5xl font-semibold  uppercase">
              DIKDASMEN YBWSA
            </h1>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

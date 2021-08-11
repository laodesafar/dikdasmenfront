import React from "react";
import GoogleMapReact from "google-map-react";
import Footer from "@components/Layout/Footer";
import Navbar from "@components/Layout/Navbar";

import Marker from "@components/Layout/Marker";

export default function Kontak(props) {
  const coordinates = { lat: -6.955534, lng: 110.458002 };
  return (
    <>
      <Navbar />
      <div className="container mx-auto text-center">
        <h1 className="py-10 text-2xl font-medium ">Kontak Dikdasmen</h1>
      </div>
      <div className="h-[60vh]  w-full">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyBGEcbJuI0kUNsb0DwVVDKtb4wD3Be2dao",
            libraries: ["places", "geometry", "drawing", "visualization"],
          }}
          defaultCenter={coordinates}
          center={{ lat: -6.95524, lng: 110.460295 }}
          defaultZoom={18}
          margin={[50, 50, 50, 50]}
        >
          <Marker lat={-6.955534} lng={110.458002}>
            {props.children}
          </Marker>
        </GoogleMapReact>
      </div>
      <Footer />
    </>
  );
}

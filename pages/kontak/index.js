import React from "react";
import GoogleMapReact from "google-map-react";

import Layout from "@components/Layout/Layout";

import Marker from "@components/Layout/Marker";
import ButtonLengkap from "@components/UI/ButtonLengkap";

export default function Kontak(props) {
  const coordinates = { lat: -6.955534, lng: 110.458002 };
  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="py-10 text-3xl font-bold uppercase text-green-500 text-center">
          Kontak Dikdasmen
        </h1>
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
      <div className="container md:relative mx-auto my-10 md:my-0">
        <div className="md:absolute mx-auto md:right-0 md:top-[-22rem] w-full md:w-80 py-6 px-6 bg-gray-100 rounded-md shadow-lg ">
          <h1 className="text-center capitalize text-2xl py-4 font-medium text-green-500">
            Hubungi Kami
          </h1>
          <form>
            <div className="mt-6">
              <input
                type="text"
                placeholder="Nama"
                className="py-2 px-2 block w-full border-none text-gray-600 bg-white rounded-sm shadow-md hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
              />
            </div>
            <div className="mt-6">
              <input
                type="email"
                placeholder="Email"
                className="py-2 px-2 block w-full border-none text-gray-600 bg-white rounded-sm shadow-md hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
              />
            </div>
            <div className="mt-6">
              <textarea
                name="pesan"
                className="py-2 px-2 block w-full border-none text-gray-600 bg-white rounded-sm shadow-md hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                placeholder="Pesan"
              ></textarea>
            </div>
            <div className="mt-6 block w-full">
              <ButtonLengkap variant="green-button" className="block w-full">
                Kirim Pesan
              </ButtonLengkap>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

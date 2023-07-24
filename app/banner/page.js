"use client";
import Image from "next/image";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import bannerpic from "../../public/banner.jpg";
import React, { useEffect } from "react";

export default function Banner() {
  const [name, setName] = React.useState();
  const [image, setImage] = React.useState();

  const handleDownload = () => {
    const divToDownload = document.getElementById('divToDownload');

    // Get the device pixel ratio
    const scale = window.devicePixelRatio;

    // Capture the div as a canvas using html2canvas with the proper scale
    html2canvas(divToDownload, { scale }).then((canvas) => {
      // Convert the canvas to a blob
      canvas.toBlob(function (blob) {
        // Save the blob as an image file
        saveAs(blob, 'PYCOP.png');
      });
    });
  };

  useEffect(() => {
    setName(localStorage.getItem("name"));
    setImage(localStorage.getItem("image"));
  }, []);

  return (
    <main className="lg:w-5/6 mx-auto lg:flex items-center justify-evenly">
      <div id="divToDownload" className="lg:flex bg-green-400 justify-center relative">
        <Image src={bannerpic} className="w-full h-full lg:w-4/6 mx-auto" />

        <div className="absolute top-40">
          <Image
            src={image}
            alt="User's Photo"
            width="170"
            height="600"
            className="h-[177px]"
            priority
          />
          <p className="text-center text-white font-semibold">{name}</p>
        </div>
      </div>
      <div className="flex justify-center lg:w-2/6 mt-6 lg:mt-0">
        <button
          className="bg-violet-600 rounded-lg px-3 py-2 mt-5 text-white hover:bg-violet-900"
          onClick={handleDownload}
        >
          Download Image
        </button>
      </div>
    </main>
  );
}

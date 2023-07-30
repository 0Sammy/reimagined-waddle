"use client";
import Image from "next/image";
import * as htmlToImage from "html-to-image";
import bannerpic from "../../public/mainbanner.jpeg";
import React, { useEffect } from "react";

export default function Banner() {
  const [name, setName] = React.useState();
  const [image, setImage] = React.useState();

  const handleDownload = () => {
    htmlToImage
      .toJpeg(document.getElementById("content"), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "my-image-name.jpeg";
        link.href = dataUrl;
        link.click();
      });
  };

  useEffect(() => {
    setName(localStorage.getItem("name"));
    setImage(localStorage.getItem("image"));
  }, []);

  return (
    <main className="lg:w-5/6 mx-auto lg:flex items-center justify-evenly">
      <div id="content" className="w-[500px] relative">
        <Image src={bannerpic} className="w-11/12 mx-auto" />

        <div className="absolute top-[110px] left-[179px]">
          <Image
            src={image}
            alt="User's Photo"
            width="185"
            height="50"
            className="h-[123px] w-[123px]"
            priority
          />
          <p className="text-center text-white mt-4 font-semibold">{name}</p>
        </div>
      </div>
      <div className="flex justify-center lg:w-2/6">
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

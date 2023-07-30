"use client";
import Image from "next/image";
import * as htmlToImage from "html-to-image";
import bannerpic from "../../public/mainbanner.jpeg";
import React, { useEffect } from "react";
import {BiArrowBack} from "react-icons/bi"
import Link from "next/link";

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
    <main className="lg:w-5/6 mx-auto items-center justify-evenly pt-20">
      <Link href="/" className="flex items-center gap-2"><BiArrowBack />Back</Link>
      <div id="content" className="w-[500px] mx-auto relative">
        <Image src={bannerpic} className="w-11/12 h-[460px] mx-auto" />

        <div className="absolute top-[110px] left-[177px]">
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
      <div className="flex justify-center mt-8">
        <button
          className="bg-violet-600 rounded-lg px-3 py-2 text-white hover:bg-violet-900"
          onClick={handleDownload}
        >
          Download Image
        </button>
      </div>
    </main>
  );
}

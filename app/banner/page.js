"use client";
import Image from "next/image";
import * as htmlToImage from "html-to-image";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import download from "downloadjs";
import domtoimage from "dom-to-image";
import bannerpic from "../../public/mainbanner.jpeg";
import React, { useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";

export default function Banner() {
  const [name, setName] = React.useState();
  const [image, setImage] = React.useState();

  const handleDownload = () => {
    htmlToImage
      .toBlob(document.getElementById("content"))
      .then(function (blob) {
        console.log(localStorage.getItem("name"));
        let name = localStorage.getItem("name").replace(/\s+/g, "_");
        console.log(name);
        window.saveAs(blob, `${name}-YW23-banner.png`);
      });
  };


  useEffect(() => {
    setName(localStorage.getItem("name"));
    setImage(localStorage.getItem("image"));
  }, []);

  return (
    <main className="lg:w-5/6 mx-auto lg:pt-16 pt-10">
      <Link
        href="/"
        className="flex items-center gap-2 mb-5 ml-5 w-fit border border-purple-700 px-4 py-2 rounded-md"
      >
        <BiArrowBack />
        Back
      </Link>
      <div className="flex justify-center">
        <div id="content" className="min-w-[500px] relative h-[500px]">
          {/* <Image
            src={bannerpic}
            alt="Picture of Church Dp banner"
            className="w-11/12 h-[460px] mx-auto rounded-xl"
            priority
          /> */}

          <div className="absolute top-[120px] left-[172px]">
            {bannerpic && (
              <Image
                src={image}
                alt="User's Photo"
                width="185"
                height="50"
                className="h-[133px] w-[133px]"
                priority
              />
            )}
            <p className="text-center text-white mt-4 font-semibold">{name}</p>
          </div>
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

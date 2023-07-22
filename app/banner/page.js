"use client";
import Image from "next/image";
import bannerpic from "../../public/banner.jpg";
import React, {useEffect} from "react";

export default function Banner() {
  const [name, setName] = React.useState()
  const [image, setImage] = React.useState()
  
  useEffect(() => {
    setName(localStorage.getItem("name"))
    setImage(localStorage.getItem("image"))
  }, []);

  return (
    <main className="lg:w-5/6 mx-auto">
      <div className="lg:flex items-center justify-center h-screen">
        <Image src={bannerpic} className="w-[650px] mx-auto relative" />
        <Image
          src={image}
          alt="User's Photo"
          width="203"
          height="600"
          className="absolute top-44"
          priority
        />
      </div>
      <p>{name}</p>
    </main>
  );
}

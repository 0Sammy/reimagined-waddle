"use client"
import Image from "next/image";
import bannerpic from "../../public/banner.jpg";
import React from "react";

export default function Banner() {
  
  
    const name = localStorage.getItem('name')
    const image = localStorage.getItem('image')

  
  return (
    <main className="w-5/6 mx-auto">
      <div><Image src={bannerpic} className="w-[650px] mx-auto" /></div>
      <p>{name}</p>
      <Image src={image} alt="User's Photo" width="300" height="300" priority/> 
    </main>
  );
}

"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import churchpic from "../public/church.jpg";
import Link from "next/link";

export default function Home() {
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState("");
  const [name, setName] = useState()

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      saveToLocalStorage(reader.result);
    } else {
      setImagePreview("");
    }
  };

  const saveToLocalStorage = () => {
    localStorage.setItem("image", imagePreview);
    console.log("Image saved to local storage!");

    localStorage.setItem("name", name);
    console.log("Name saved to local storage!");
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <main className="w-5/6 mx-auto mb-10">
      <div className="py-10">
        <p>Church Logo</p>
      </div>

      <div className="mt-16 lg:flex items-center justify-evenly">
        <div className="lg:w-6/12 mb-12 lg:mb-0">
          <p className="text-4xl font-semiBold mb-7">
            Invite your friends for{" "}
            <span className="text-purple-700">Gadites</span> Bible Seminar 2023
            with your personalised DP!
          </p>
          <p>It is super easy and you get it immediately!</p>
          <Image
            src={churchpic}
            alt="churchpic"
            className="lg:w-3/12 w-4/6 mt-6"
          />
        </div>

        <div className="shadow-lg shadow-gray-400 rounded-lg px-16 py-10">
          <input
            placeholder="Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 px-3 py-1 w-full mb-5 lg:mb-0 rounded-md placeholder:text-gray-400 outline-none"
          />
          <div className="flex justify-center my-5">
            <button
              onClick={handleButtonClick}
              className="border border-purple-500 rounded-lg px-3 py-2 hover:bg-purple-300"
            >
              Select Image
            </button>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>
          <div
            className="border-dashed border-2 flex justify-center items-center border-gray-300"
            placeholder="Name"
          >
            {imagePreview ? (
              <div>
                <img
                  src={imagePreview}
                  alt="Preview"
                  style={{ maxWidth: "200px", MaxHeight: "200px" }}
                />
              </div>
            ) : (
              <div className="py-20 px-24">Image</div>
            )}
          </div>

          <div>
            <p>Resize Image</p>
          </div>

          <div className="flex justify-center my-5">
            <Link
              href="banner"
              onClick={saveToLocalStorage}
              className="bg-purple-700 rounded-lg px-3 py-2 text-white hover:bg-purple-900"
            >
              Generate Banner
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

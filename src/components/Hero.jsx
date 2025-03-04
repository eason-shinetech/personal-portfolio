"use client";

import { heroIcons } from "@/assets";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-screen grid place-items-center">
      <div>
        <div className="flex flex-col items-center justify-center gap-y-3 font-light capitalize">
          <div className="flex items-center justify-center">
            <Image
              src={"/person.png"}
              alt="person"
              width={400}
              height={400}
              priority={true} //Tell nextjs that this image is important and that it should be loaded as soon as possible
              className="h-auto w-[150px]"
            />
            <span className=" absolute text-3xl font-semibold text-white">
              Hi
            </span>
          </div>
          <h1 className="text-center text-3xl font-bold text-gray-500 tracking-wider">
            My name is Eason &
          </h1>
          <p className="text-lg tracking-wider text-gray-700">
            I like animations 😘
          </p>
        </div>
        <div className="mt-8 flex justify-center text-3xl text-yellow-600 gap-x-10">
          {heroIcons.map((icon, index) => (
            <a
              href="#"
              key={index}
              className="rounded-lg  hover:text-white hover:bg-red-400 transition-colors"
            >
              {icon}
            </a>
          ))}
        </div>
        <a
          href="#"
          className="mx-auto mt-7 block w-max rounded-lg px-3 py-1 bg-red-400 font-light capitalize tracking-wider text-white hover:bg-red-500 transition-colors"
        >
          Talk to me
        </a>
      </div>
    </div>
  );
};

export default Hero;

"use client";
import Achievements from "./sub/Achievements";
import Heading from "./sub/Heading";
import Image from "next/image";
import { aboutData, aboutText, downloadIcon, arrowLeftIcon } from "@/assets";

const About = () => {
  return (
    <div className="min-h-screen px-60 flex flex-col items-center justify-center">
      <Heading text={"About Me"} />
      <div className="w-full flex items-center justify-between max-md:justify-center">
        <Image
          src={"/about-me.png"}
          alt="Aount Me"
          width={400}
          height={400}
          priority={true}
          className="w-[300px] max-lg:w-[200px] max-md:hidden"
        />
        <div className="max-w-[800px] rounded-xl bg-zinc-100 p-5 text-justify">
          <span className="absolute -left-5 top-20 scale-[2.5] text-zinc-100 max-md:hidden">
            {arrowLeftIcon}
          </span>
          <p className="text-lg font-light text-gray-700 first-letter:pl-3 max-lg:text-[16px] max-sm:text-[14px]">
            {aboutText}
          </p>
          <a
            href={"/nick-cv.pdf"}
            download={true}
            className="w-max flex items-center gap-x-2 mt-6 rounded-full border border-gray-300 bg-red-400 px-3 py-2 font-light text-white hover:bg-red-500 transition-colors"
          >
            <span>Download CV</span>
            <span className="text-xl">{downloadIcon}</span>
          </a>
        </div>
      </div>
      <div className="mt-20 w-full flex flex-wrap items-center justify-between gap-x-7 gap-y-10">
        {aboutData.map((item, index) => (
          <Achievements
            key={index}
            title={item.title}
            amount={item.amount}
            children={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default About;

"use client";

import { heroIcons } from "@/assets";
import {
  useMotionValue,
  useTransform,
  motion,
  useSpring,
  delay,
} from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [windowOffset, setWindowOffset] = useState({
    innerWidth: 0,
    innerHeight: 0,
  });
  const [mouseMove, setMouseMove] = useState(false);
  const [buttonHover, setButtonHover] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    x.set(clientX);
    y.set(clientY);
  };

  const handleMouseEnter = () => {
    setWindowOffset({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    });
    setMouseMove(true);
  };

  const { innerWidth, innerHeight } = windowOffset;

  //让动画更平滑
  const config = { stiffness: 100, damping: 10 };
  const xSprint = useSpring(x, config);
  const ySprint = useSpring(y, config);

  const rotateY = useTransform(xSprint, [0, innerWidth], [-30, 30]);
  const rotateX = useTransform(ySprint, [0, innerHeight], [10, -50]);

  return (
    <div
      className="h-screen grid place-items-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
    >
      <div>
        <div className="flex flex-col items-center justify-center gap-y-3 font-light capitalize">
          <motion.div
            className="flex items-center justify-center"
            style={{
              rotateX: mouseMove ? rotateX : 0,
              rotateY: mouseMove ? rotateY : 0,
              transition: "0.1s",
            }}
          >
            <Image
              src={"/person.png"}
              alt="person"
              width={400}
              height={400}
              priority={true} //Tell nextjs that this image is important and that it should be loaded as soon as possible
              className="h-auto w-[150px]"
            />
            <motion.span
              className=" absolute text-3xl font-semibold text-white"
              initial={{ scale: 0 }}
              animate={{
                scale: buttonHover ? 2 : 0,
                opacity: buttonHover ? 0 : 1,
                y: buttonHover ? -40 : 0,
              }}
              transition={{
                opacity: { delay: 0.4 },
              }}
            >
              Hi
            </motion.span>
          </motion.div>
          <h1 className="text-center text-3xl font-bold text-gray-500 tracking-wider max-sm:text-2xl">
            My name is Eason &
          </h1>
          <p className="text-lg tracking-wider text-gray-700">
            I like animations 😘
          </p>
        </div>
        <div className="mt-8 flex justify-center text-3xl text-yellow-600 gap-x-10 max-sm:text-2xl">
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
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
        >
          Talk to me
        </a>
      </div>
    </div>
  );
};

export default Hero;

"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

function Single({ item }) {
  const variants = {
    initial: {
      x: 500,

      opacity: 0,
      scale: 0.5,
    },
    animate: {
      scale: 1,
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const reff = useRef();
  const isInView = useInView(reff, { margin: "-100px" });
  return (
    <section
      className="overflow-hidden flex items-center justify-center"
      id={item.id === 1 ? "Portofolio" : ""}
      ref={reff}
    >
      <motion.div
        className="p-4 m-4 flex items-center justify-center gap-12 overflow-hidden md:flex-row flex-col w-[80vw]"
        variants={variants}
        initial={"initial"}
        animate={isInView && "animate"}
      >
        <motion.div
          variants={variants}
          className=" relative w-full md:h-[350px] h-52 flex-shrink-0 md:flex-1 rounded-xl overflow-hidden"
        >
          <Image src={item.image} fill alt="image" sizes="100%" priority />
        </motion.div>
        <motion.div className="flex-1 flex flex-col gap-5 " variants={variants}>
          {" "}
          <motion.h2 variants={variants} className="text-2xl">
            {item.title}
          </motion.h2>
          <motion.p variants={variants}>{item.descreption}</motion.p>
          <Link href={item.link} target="blank">
            <motion.button
              variants={variants}
              className="bgOrange text-black w-[250px] p-2 rounded-xl font-semibold"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Visit
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Single;

"use client";
import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import { PiMouseScrollThin } from "react-icons/pi";
import { motion } from "framer-motion";
import NavBar from "../NavBar";
import Link from "next/link";

const variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  buttonAnimation: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

function Hero() {
  return (
    <div className="h-full overflow-hidden">
      <NavBar />
      <div className="h-full flex justify-between flex-col md:flex-row md:px-36 overflow-hidden">
        <motion.div
          className="h-full md:w-1/2 flex justify-center flex-col gap-10"
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            className={
              "text-3xl  text-purple-700 text-center md:text-left " +
              styles.spacing
            }
            variants={variants}
          >
            Youssef Drahem
          </motion.h2>
          <motion.h1
            className={"text-4xl md:text-7xl text-center md:text-left"}
            variants={variants}
          >
            Web Developer and UI designer
          </motion.h1>
          <motion.div className="flex gap-6 mx-auto md:mx-0">
            <Link href={"/#Portofolio"}>
              {" "}
              <motion.button
                className="border-white border rounded-lg p-4"
                variants={variants}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                See Latest Works
              </motion.button>
            </Link>
            <Link href={"#Contact"}>
              {" "}
              <motion.button
                className="border-white border rounded-lg p-4 fw-medium text-black bg-white"
                variants={variants}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </Link>
          </motion.div>
          <motion.div variants={variants} animate="buttonAnimation">
            <PiMouseScrollThin size={40} />
          </motion.div>
        </motion.div>

        <motion.div className="relative md:w-1/3 h-full" variants={variants}>
          <Image
            src={"/image.jpg"}
            priority
            className="right-10"
            fill
            alt="image"
            sizes="100%"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;

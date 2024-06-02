"use client";
import React, { useRef, useEffect, useState } from "react";
import styles from "./services.module.css";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const variants = (width) => ({
  initial: {
    x: width > 768 ? -500 : -100,
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
});

function Services() {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const [width, setWidth] = useState(1024);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <motion.div
      variants={variants(width)}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      className="flex flex-col justify-between text-gray-500 h-full gap-8"
      ref={ref}
    >
      <motion.div
        variants={variants(width)}
        className={
          "md:self-end self-center justify-center flex flex-col md:flex-row items-center gap-5 text-gray-500 " +
          styles.flex1
        }
      >
        I focus on helping your brand grow <br /> and move forward
        <hr className={"w-full lg:w-[500px] " + styles.hr} />
      </motion.div>

      <motion.div
        variants={variants(width)}
        className="flex flex-row md:flex-col items-center md:px-36 md:text-6xl text-2xl justify-center"
      >
        <motion.div
          variants={variants(width)}
          className="flex flex-col gap-5 items-center"
        >
          <motion.div
            variants={variants(width)}
            className="flex flex-row items-center gap-5  flex-wrap"
          >
            <div
              className={
                "relative md:w-[300px] w-[100px] md:h-[80px] h-[60px]   rounded-full overflow-hidden object-cover  " +
                styles.flex2
              }
              style={{ position: "relative" }}
            >
              <Image
                src="/people.webp"
                fill
                alt="image"
                sizes="100%"
                priority
              />
            </div>
            <br />
            <b className="hover:text-orange">Unique </b>
            <span>Ideas</span>
          </motion.div>
          <div className="flex flex-row gap-5 items-center justify-center md:items-end mx-20 md:mx-0 flex-wrap">
            <b className="hover:text-orange">For Your</b>
            <span>Business.</span>

            <Link href="/#Portfolio">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={
                  "text-lg p-4 rounded-full px-6 font-normal " + styles.orange
                }
              >
                WHAT WE DO?
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={variants(width)}
        className={`${styles.flex2} md:px-36`}
      >
        <motion.ul
          variants={variants(width)}
          className="flex flex-col md:flex-row flex-wrap justify-between mt-5 text-white  items-stretch"
        >
          <li className="p-2 md:border md:border-gray-700  w-full md:w-auto flex-1 flex flex-col md:flex gap-8 items-center">
            <h2 className="font-bold">Responsive Web Design:</h2>
            <p className="mt-6 mb-4 font-extralight hidden md:block">
              Creating visually appealing and functional websites that work
              seamlessly across all devices, from desktops to mobile phones.
            </p>
            <Link href={"#Contact"}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-full py-2 md:rounded-sm px-10 font-semibold md:bg-orange border rounded-xl   md:border-none border-orange`}
              >
                Go
              </motion.button>
            </Link>
          </li>
          <li className="p-2 md:border md:border-gray-700  w-full md:w-auto flex-1 flex flex-col md:flex gap-8 items-center">
            <h2 className="font-bold">Performance Optimization:</h2>
            <p className="mt-6 mb-4 font-extralight hidden md:block">
              Improving website speed and performance to ensure fast load times
              and a smooth user experience.
            </p>
            <Link href={"#Contact"}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-full py-2 md:rounded-sm px-10 font-semibold md:bg-orange border rounded-xl  md:border-none border-orange`}
              >
                Go
              </motion.button>
            </Link>
          </li>
          <li className="p-2 md:border md:border-gray-700  w-full md:w-auto flex-1 flex flex-col md:flex gap-8 items-center">
            <h2 className="font-bold">API Integration:</h2>
            <p className="mt-6 mb-4 font-extralight hidden md:block">
              Integrating third-party APIs to add advanced functionality to web
              applications.
            </p>
            <Link href={"#Contact"}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-full py-2 md:rounded-sm px-10 font-semibold md:bg-orange border rounded-xl  md:border-none border-orange`}
              >
                Go
              </motion.button>
            </Link>
          </li>
          <li className="p-2 md:border md:border-gray-700  w-full md:w-auto flex-1 flex flex-col md:flex gap-8 items-center">
            <h2 className="font-bold">JavaScript Development:</h2>
            <p className="mt-6 mb-4 font-extralight hidden md:block">
              Building dynamic and interactive web applications using modern
              JavaScript frameworks and libraries.
            </p>
            <Link href={"#Contact"}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-full py-2 md:rounded-sm px-10 font-semibold md:bg-orange border rounded-xl  md:border-none border-orange`}
              >
                Go
              </motion.button>
            </Link>
          </li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
}

export default Services;

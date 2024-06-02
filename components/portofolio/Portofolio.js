"use client";
import React, { useRef } from "react";
import { motion, useInView, useScroll, useSpring } from "framer-motion";
import Single from "../single/Single";

function Portofolio() {
  const items = [
    {
      id: 1,
      title: "Fashion Store App",
      descreption: `This modern e-commerce website, built using Next.js, showcases a stylish and user-friendly interface for a clothing store. The platform leverages the power of the Context API to manage global state, ensuring a seamless and responsive user experience.\n
        The site features beautifully designed product cards that dynamically display clothing items, providing users with detailed views and easy navigation. Whether browsing the latest collections or searching for specific items, the intuitive layout and smooth transitions make shopping a pleasure.`,
      link: "https://fashion-store-plum.vercel.app/",
      image: "/fashionStore.png",
    },
    {
      id: 2,
      title: "Cinema Website ",
      descreption: `This engaging cinema website, built with React and Swiper.js, provides an immersive platform for viewing movie trailers. Utilizing React for efficient state management and Swiper.js for responsive carousels, the site offers smooth navigation and high-quality video previews. It's designed to be user-friendly, allowing movie enthusiasts to explore the latest trailers effortlessly.`,
      link: "https://main--cinema1112.netlify.app/",
      image: "/cinema.png",
    },
  ];

  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
  });

  return (
    <div ref={ref} className="relative z-10 md:px-36">
      <div className="sticky top-0 left-0 pt-12 text-center orange text-4xl ">
        <h1>Featured Work</h1>
        <motion.div
          style={{ scaleX }}
          className="h-[10px] bg-white rounded-lg"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Portofolio;

"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";

function SideBar() {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: { type: "spring", stiffness: 400, damping: 40, delay: 0.2 },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center bg-white text-black  z-50"
      animate={open ? "open" : "closed"}
    >
      <motion.div
        className="fixed bg-white top-0 left-0 bottom-0 w-[200px] md:w-[400px] z-50"
        variants={variants}
      >
        <Links />
      </motion.div>
      <div>
        <ToggleButton setOpen={setOpen} open={open} />
      </div>
    </motion.div>
  );
}

export default SideBar;

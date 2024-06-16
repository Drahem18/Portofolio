import { stagger } from "framer-motion";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVAriants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

function Links() {
  const items = ["Homepage", "Services", "Portofolio", "Contact"];
  return (
    <motion.div
      className="flex flex-col w-full h-full items-center justify-center gap-5 z-50"
      variants={variants}
    >
      {items.map((item) => (
        <motion.div
          key={item}
          variants={itemVAriants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link className="text-4xl" href={`#${item}`} key={item}>
            {item}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Links;

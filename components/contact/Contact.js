"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
  const variants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);

  const reff = useRef();
  const isInView = useInView(reff, { margin: "-100px" });

  useEffect(() => {
    if (isInView && !animationStarted) {
      setAnimationStarted(true);
    }
  }, [isInView, animationStarted]);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zeossex",
        "template_phdm2kq",
        form.current,
        "vPICn-3CCKhwyH4-z"
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
          setShowMessage(true);
          setTimeout(() => {
            setShowMessage(false);
          }, 3000); // Hide the message after 3 seconds
        },
        (error) => {
          setError(true);
          setSuccess(false);
          setShowMessage(true);
          setTimeout(() => {
            setShowMessage(false);
          }, 3000); // Hide the message after 3 seconds
        }
      );
  };

  return (
    <motion.div
      ref={reff}
      variants={variants}
      initial="initial"
      animate={animationStarted ? "animate" : "initial"}
      className="h-full flex flex-col md:flex-row md:justify-center justify-end items-center gap-10 md:px-36"
    >
      <motion.div
        variants={variants}
        className="flex-1 flex flex-col gap-5 justify-end"
      >
        <motion.h1
          variants={variants}
          className="md:text-7xl text-4xl font-bold"
        >
          Let's Work Together
        </motion.h1>

        <motion.div variants={variants} className="flex flex-col gap-2 mt-4">
          <h2 className="font-semibold text-lg">Email:</h2>
          <span className="text-sm">youssefdrahem1@gmail.com</span>
        </motion.div>
        <motion.div variants={variants} className="flex flex-col gap-2 mt-4">
          <h2 className="font-semibold text-lg">Address:</h2>
          <span className="text-sm">Damietta, Egypt</span>
        </motion.div>
        <motion.div variants={variants} className="flex flex-col gap-2 mt-4">
          <h2 className="font-semibold text-lg">Phone:</h2>
          <span className="text-sm">+20 10 2157 6645</span>
        </motion.div>
      </motion.div>

      <div className="flex-1 relative">
        <motion.div
          initial={{ opacity: 1 }}
          animate={
            animationStarted
              ? {
                  opacity: 0,
                  transitionEnd: { visibility: "hidden" },
                  transition: { delay: 2, duration: 1 },
                }
              : { opacity: 1, visibility: "visible" }
          }
          className="md:w-[450px] md:h-[450px] w-[250px] h-[250px] absolute"
        >
          <motion.svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffa500"
            initial={{ pathLength: 0 }}
            animate={isInView && { pathLength: 1 }}
            transition={{ duration: 3 }}
          >
            <path
              d="M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95M14.05 2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.8609 6.01984 21.7721 7.91101 22 9.94M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z"
              stroke="#ffa500"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.div>
        <motion.form
          ref={form}
          initial={{ opacity: 0 }}
          animate={
            animationStarted
              ? {
                  opacity: 1,
                  transition: { delay: 3, duration: 1 },
                }
              : { opacity: 0, visibility: "hidden" }
          }
          className="flex flex-col gap-3 md:gap-5 w-[80vw] md:w-full"
          onSubmit={sendEmail}
        >
          <input
            className="p-4 border border-white bg-transparent rounded-md"
            required
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            className="p-4 border border-white bg-transparent rounded-md"
          />
          <textarea
            required
            name="message"
            placeholder="Message"
            rows="8"
            className="p-4 border border-white bg-transparent rounded-md"
          />
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bgOrange p-4 font-medium rounded-lg text-black"
          >
            Submit
          </motion.button>
          {showMessage && (
            <motion.p
              animate={{ opacity: 0, transition: { delay: 2, duration: 1 } }}
            >
              {error && "Sorry, there is a problem."}
              {success && "Message sent successfully."}
            </motion.p>
          )}
        </motion.form>
      </div>
    </motion.div>
  );
}

export default Contact;

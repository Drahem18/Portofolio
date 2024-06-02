import React from "react";
import { IoIosClose, IoMdMenu } from "react-icons/io";

function ToggleButton({ setOpen, open }) {
  return (
    <button
      onClick={() => setOpen((prev) => !prev)}
      className="w-[50px] h-[50px] rounded-full fixed top-[25px] left-[25px] bg-transparent border-none cursor-pointer flex justify-center items-center z-50"
    >
      {open ? <IoIosClose size={35} /> : <IoMdMenu size={35} />}
    </button>
  );
}

export default ToggleButton;

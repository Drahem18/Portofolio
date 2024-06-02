import Link from "next/link";
import React from "react";
import {
  FaInstagram,
  FaSquareFacebook,
  FaSquareXTwitter,
} from "react-icons/fa6";
import SideBar from "./sideBar/SideBar";

function NavBar() {
  return (
    <div className="abslute w-full z-50">
      <SideBar />
      <div className="h-[100px] lg:px-36 pl-28 pr-8   ">
        <div className="flex justify-between items-center h-full ">
          <span className="font-bold text-2xl ">Youssef Drahem</span>
          <div className="flex gap-2">
            <Link
              href={
                "https://www.facebook.com/profile.php?id=61552637980138&mibextid=ZbWKwL"
              }
              target="blank"
            >
              <FaSquareFacebook size={30} />
            </Link>
            <Link href={"#"}>
              <FaInstagram size={30} />
            </Link>
            <Link href={"#"}>
              <FaSquareXTwitter size={30} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import img from "../accat/166694852_724896854749916_2175521206516587369_n.jpg";
import {
  IoPersonOutline,
  IoBookmarkOutline,
  IoSearchOutline,
  IoBagOutline,
} from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="w-[197px] h-[28px]  tracking-wider">TANN TRIM</div>
        <div className="flex ">
          <button>
            <IoSearchOutline className=" w-[30px]" />
          </button>
          <button>
            {" "}
            <IoPersonOutline className=" w-[30px]" />
          </button>{" "}
          <button>
            {" "}
            <IoBookmarkOutline className=" w-[30px]" />
          </button>
          <button>
            {" "}
            <IoBagOutline className=" w-[30px]" />
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center pt-7">
        <Link href="/text">
          <a className="pr-8">Bags</a>
        </Link>
        <Link href="/text">
          <a className="pr-8">Travel</a>
        </Link>
        <Link href="/text">
          <a className="pr-8">Accesories</a>
        </Link>
        <Link href="/text">
          <a className="pr-8">Gifting</a>
        </Link>
        <Link href="/text">
          <a className="pr-8">Jewelery</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

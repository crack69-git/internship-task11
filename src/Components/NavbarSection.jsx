"use client";
import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { RiNotificationFill } from "react-icons/ri";
import { HiMenu, HiX } from "react-icons/hi";
import { IoIosHome } from "react-icons/io";
import { FaMapLocation } from "react-icons/fa6";
import { MdOutlineCategory } from "react-icons/md";
import { BsExclamationSquareFill } from "react-icons/bs";

const NavbarSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-10 py-3 sm:py-4 lg:py-5 border-b border-gray-200">
        <div className="flex gap-4 sm:gap-6 lg:gap-10 items-center flex-1">
          <div className="flex gap-2 items-center">
            <Image
              loading="lazy"
              src="/image.png"
              alt="Logo"
              width={40}
              height={40}
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
            <div className="flex flex-col leading-3 sm:leading-4">
              <p className="font-bold text-base sm:text-lg text-pink-700">
                ResturantBD.com
              </p>
              <p className="text-xs sm:text-sm font-semibold text-gray-500">
                Find Your Taste Like Home
              </p>
            </div>
          </div>
          <div className="flex max-[1162px]:hidden  gap-10 ">
            <Link
              className="text-gray-500 hover:text-pink-700 font-semibold hover:underline text-xs sm:text-sm lg:text-base flex items-center gap-1"
              href="/"
            >
              <IoIosHome />
              Home
            </Link>
            <Link
              className="text-gray-500 hover:text-pink-700 font-semibold hover:underline text-xs sm:text-sm lg:text-base flex items-center gap-1"
              href="#"
            >
              <FaMapLocation />
              Explore By Locations
            </Link>
            <Link
              className="text-gray-500 hover:text-pink-700 font-semibold hover:underline text-xs sm:text-sm lg:text-base flex items-center gap-1"
              href="#"
            >
              <MdOutlineCategory />
              Explore By Categories
            </Link>
            <Link
              className="text-gray-500 hover:text-pink-700 font-semibold hover:underline text-xs sm:text-sm lg:text-base flex items-center gap-1"
              href="#"
            >
              <BsExclamationSquareFill />
              About Us
            </Link>
          </div>
        </div>
        <div className="flex gap-2 sm:gap-4 lg:gap-5 items-center">
          <Chip className="bg-pink-100 text-pink-600 text-xs sm:text-sm">
            <IoLocationSharp className="text-sm sm:text-base" />
            <span className="hidden sm:inline">Dhaka</span>
          </Chip>
          <RiNotificationFill className="text-lg sm:text-xl lg:text-2xl cursor-pointer" />
          <Button className="bg-[#E11D48] text-white hover:bg-pink-600 text-xs sm:text-sm gap-1 sm:gap-2 py-1.5 sm:py-2 px-2 sm:px-3 lg:px-4">
            <FaUserEdit className="text-sm sm:text-base" />
            <span className="hidden sm:inline">Sign In</span>
          </Button>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hidden max-[1162px]:flex text-gray-600 hover:text-pink-700 text-xl"
          >
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-3 px-4 py-4 border-b border-gray-200 bg-white">
          <Link
            className="text-gray-500 hover:text-pink-700 font-semibold hover:underline text-sm py-2"
            href="/"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            className="text-gray-500 hover:text-pink-700 font-semibold hover:underline text-sm py-2"
            href="#"
            onClick={() => setIsMenuOpen(false)}
          >
            Explore By Locations
          </Link>
          <Link
            className="text-gray-500 hover:text-pink-700 font-semibold hover:underline text-sm py-2"
            href="#"
            onClick={() => setIsMenuOpen(false)}
          >
            Explore By Categories
          </Link>
          <Link
            className="text-gray-500 hover:text-pink-700 font-semibold hover:underline text-sm py-2"
            href="#"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
        </div>
      )}
    </>
  );
};

export default NavbarSection;

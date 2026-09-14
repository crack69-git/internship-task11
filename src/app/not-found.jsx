import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { IoReturnDownBack } from "react-icons/io5";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center  text-center my-20 ">
      <h1 className="text-9xl text-red-700 font-bold">404</h1>
      <p className="text-2xl text-gray-500 font-bold">Page not found</p>
      <Link href="/" className="mt-4">
        <Button variant="primary" className="mt-4 rounded-lg bg-rose-500">
          Go Back Home
          <IoReturnDownBack size={24} />
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;

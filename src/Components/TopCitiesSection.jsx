import { Chip } from "@heroui/react";
import React from "react";
import { FaCompass } from "react-icons/fa";
import CityResCard from "./CityResCard";

const TopCitiesSection = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center my-20">
      <Chip className="bg-pink-100 text-pink-600 flex gap-2 text-[16px]">
        <FaCompass />
        Regional Culinary Capitals
      </Chip>
      <h3 className="text-4xl font-bold my-2">To Resturants in Top Cities</h3>
      <p className="text-gray-500 text-lg max-w-[600px]">
        Explore iconic regional delicacies from Meghna river estuaries to tea
        gardens of the north-east.
      </p>
      <div>
        <CityResCard />
      </div>
    </div>
  );
};

export default TopCitiesSection;

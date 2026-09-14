import { Chip } from "@heroui/react";
import React from "react";
import { GoDotFill } from "react-icons/go";
import SearchFormSection from "./SearchBarSection";
import TrendsBar from "./TrendBar";

const HomepageSection = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/screen.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "91dvh",
      }}
    >
      <div className="flex flex-col items-center justify-center h-full text-center text-white">
        <Chip
          size="sm"
          variant="flat"
          startContent={
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-rose-500 animate-pulse mr-1" />
          }
          className="bg-white/10 hover:bg-white/15 text-white border border-white/15 backdrop-blur-md px-2.5 sm:px-3.5 py-1 text-[10px] sm:text-xs font-semibold tracking-wide transition-colors flex gap-2 items-center"
        >
          <span>BD</span>
          <GoDotFill />
          Over 450+ Handpicked Eateries Across 64 Districts
        </Chip>
        <h1 className="text-[clamp(1.5rem,4vw,5rem)] font-bold mt-6 sm:mt-10">
          Taste the Soul of <span className="text-rose-500">Bangladesh</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-300 w-full sm:w-1/2 px-4 sm:px-0 font-medium mt-4">
          From historic Old Dhaka copper handis bubbling with kacchi to
          Gulshan’s contemporary kaiseki counters and Chittagong’s fiery mezban
          feasts.
        </p>
        <SearchFormSection />
        <TrendsBar />
      </div>
    </div>
  );
};

export default HomepageSection;

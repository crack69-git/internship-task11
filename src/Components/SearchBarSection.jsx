"use client";

import React, { useState } from "react";
import { HiOutlineLocationMarker, HiStar } from "react-icons/hi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FiSearch, FiChevronDown, FiCheck, FiX } from "react-icons/fi";

// Synthetic JSON Data
const locations = [
  "Gulshan 2, Dhaka",
  "Banani, Dhaka",
  "Dhanmondi, Dhaka",
  "Uttara, Dhaka",
  "Chittagong City",
  "Sylhet Sadar",
];

const cuisines = [
  "Pan-Asian & Dumplings",
  "Italian & Pasta",
  "Traditional Bengali",
  "Japanese & Sushi",
  "Steakhouse & Grill",
  "Café & Bakery",
];

const standards = [
  "Top Rated 4.5+",
  "Michelin Guide",
  "Trending Now",
  "Casual Dining",
  "Fine Dining",
];

const restaurantDatabase = {
  "Gulshan 2, Dhaka": [
    "Yum Cha District",
    "Izakaya Dhaka",
    "The Garden Kitchen",
    "Amari Amaya",
  ],
  "Banani, Dhaka": [
    "The Manhattan Fish Market",
    "Nando's Banani",
    "Takeout Banani",
    "Olea",
  ],
  "Dhanmondi, Dhaka": [
    "Sultan's Dine",
    "Buffet King",
    "Kacchi Bhai",
    "Starkwood Cafe",
  ],
  "Uttara, Dhaka": ["Mainland China", "Lake Terrace", "Bar B Q Tonight"],
  "Chittagong City": ["Handi Restaurant", "The Pavillion", "Tavern 33"],
  "Sylhet Sadar": ["Panshi Restaurant", "Five Spice", "Woondaal King Kebab"],
};

export default function SearchFormSection() {
  // Form input state
  const [formData, setFormData] = useState({
    location: "Gulshan 2, Dhaka",
    cuisine: "Pan-Asian & Dumplings",
    standard: "Top Rated 4.5+",
    restaurant: "Yum Cha District",
  });

  // Stored data state after search button click
  const [data, setData] = useState(null);

  // Modal/Drawer control
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeDrawer, setActiveDrawer] = useState("location");

  const availableRestaurants = restaurantDatabase[formData.location] || [];

  const handleOpenDrawer = (type) => {
    setActiveDrawer(type);
    setIsDrawerOpen(true);
  };

  const handleSelect = (key, value) => {
    if (key === "location") {
      const available = restaurantDatabase[value] || [];
      setFormData((prev) => ({
        ...prev,
        location: value,
        restaurant: available[0] || "",
      }));
    } else {
      setFormData((prev) => ({ ...prev, [key]: value }));
    }
  };

  const handleSearch = () => {
    setData({ ...formData });
    console.log("FormData stored in data variable:", formData);
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-4xl mx-auto p-3 sm:p-4">
      {/* 1. ADAPTIVE RESPONSIVE SEARCH BAR */}
      {/* Cards stack on small screens, turns into pill-bar on desktop */}
      <div className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl md:rounded-full p-2 shadow-xl flex flex-col md:flex-row items-stretch md:items-center justify-between gap-1.5 md:gap-1">
        {/* LOCATION SELECTOR */}
        <div
          onClick={() => handleOpenDrawer("location")}
          className="flex-1 flex items-center justify-between px-3.5 py-2.5 sm:px-4 sm:py-2 hover:bg-slate-200/50 rounded-xl md:rounded-full cursor-pointer transition active:scale-[0.99] md:active:scale-100"
        >
          <div className="flex items-center gap-3 overflow-hidden">
            <HiOutlineLocationMarker className="text-rose-600 text-xl shrink-0" />
            <div className="flex flex-col truncate">
              <span className="text-[9px] sm:text-[10px] font-bold tracking-wider text-amber-900/70 uppercase">
                LOCATION
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 truncate">
                {formData.location}
              </span>
            </div>
          </div>
          <FiChevronDown className="text-slate-400 text-sm ml-2 shrink-0" />
        </div>

        <div className="hidden md:block w-px h-8 bg-slate-200" />
        <div className="block md:hidden h-px w-full bg-slate-200/60" />

        {/* CUISINE & MOOD SELECTOR */}
        <div
          onClick={() => handleOpenDrawer("cuisine")}
          className="flex-1 flex items-center justify-between px-3.5 py-2.5 sm:px-4 sm:py-2 hover:bg-slate-200/50 rounded-xl md:rounded-full cursor-pointer transition active:scale-[0.99] md:active:scale-100"
        >
          <div className="flex items-center gap-3 overflow-hidden">
            <MdOutlineRestaurantMenu className="text-amber-600 text-xl shrink-0" />
            <div className="flex flex-col truncate">
              <span className="text-[9px] sm:text-[10px] font-bold tracking-wider text-amber-900/70 uppercase">
                CUISINE & MOOD
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 truncate">
                {formData.cuisine}
              </span>
            </div>
          </div>
          <FiChevronDown className="text-slate-400 text-sm ml-2 shrink-0" />
        </div>

        <div className="hidden md:block w-px h-8 bg-slate-200" />
        <div className="block md:hidden h-px w-full bg-slate-200/60" />

        {/* STANDARD SELECTOR */}
        <div
          onClick={() => handleOpenDrawer("standard")}
          className="flex-1 flex items-center justify-between px-3.5 py-2.5 sm:px-4 sm:py-2 hover:bg-slate-200/50 rounded-xl md:rounded-full cursor-pointer transition active:scale-[0.99] md:active:scale-100"
        >
          <div className="flex items-center gap-3 overflow-hidden">
            <HiStar className="text-amber-500 text-xl shrink-0" />
            <div className="flex flex-col truncate">
              <span className="text-[9px] sm:text-[10px] font-bold tracking-wider text-amber-900/70 uppercase">
                STANDARD
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 truncate">
                {formData.standard}
              </span>
            </div>
          </div>
          <FiChevronDown className="text-slate-400 text-sm ml-2 shrink-0 md:hidden" />
        </div>

        {/* FIND TABLE BUTTON */}
        <button
          onClick={handleSearch}
          className="w-full md:w-auto bg-rose-600 hover:bg-rose-700 active:scale-95 text-white font-semibold px-6 py-3 md:py-3.5 rounded-xl md:rounded-full flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-150 cursor-pointer text-sm shrink-0 mt-1 md:mt-0"
        >
          <FiSearch className="text-lg" />
          <span>Find Table</span>
        </button>
      </div>

      {/* 2. ADAPTIVE RESPONSIVE MODAL/DRAWER */}
      {/* Bottom Sheet on Mobile (< sm), Centered Dialog on Desktop (>= sm) */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm transition-opacity">
          {/* Backdrop Click */}
          <div
            className="fixed inset-0"
            onClick={() => setIsDrawerOpen(false)}
          />

          {/* Modal Container */}
          <div className="relative z-10 w-full max-w-lg bg-slate-900 text-white rounded-t-3xl sm:rounded-3xl border-t sm:border border-slate-800 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 sm:zoom-in-95 duration-200 max-h-[85vh] sm:max-h-[80vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-800 px-5 sm:px-6 py-4 shrink-0">
              <div className="flex flex-col">
                <h3 className="text-base sm:text-lg font-bold capitalize text-slate-100">
                  Select {activeDrawer}
                </h3>
                {activeDrawer === "restaurant" && (
                  <span className="text-xs text-slate-400">
                    Available inside {formData.location}
                  </span>
                )}
              </div>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800 transition"
              >
                <FiX className="text-xl" />
              </button>
            </div>

            {/* Modal Content / Options List */}
            <div className="p-4 overflow-y-auto">
              <div className="flex flex-col gap-2">
                {(activeDrawer === "location"
                  ? locations
                  : activeDrawer === "cuisine"
                    ? cuisines
                    : activeDrawer === "standard"
                      ? standards
                      : availableRestaurants
                ).map((item) => {
                  const isSelected = formData[activeDrawer] === item;
                  return (
                    <button
                      key={item}
                      onClick={() => {
                        handleSelect(activeDrawer, item);
                        if (activeDrawer === "location") {
                          setActiveDrawer("restaurant");
                        } else {
                          setIsDrawerOpen(false);
                        }
                      }}
                      className={`flex items-center justify-between p-3.5 rounded-xl border transition active:scale-[0.98] ${
                        isSelected
                          ? "bg-rose-600/20 border-rose-500 text-rose-400 font-semibold"
                          : "bg-slate-800/40 border-slate-700/60 hover:bg-slate-800 text-slate-200"
                      }`}
                    >
                      <span className="text-sm text-left">{item}</span>
                      {isSelected && (
                        <FiCheck className="text-rose-500 text-base shrink-0 ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

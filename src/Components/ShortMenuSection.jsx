"use client";
import React, { useState } from "react";
import {
  FiArrowRight,
  FiHeart,
  FiStar,
  FiMapPin,
  FiChevronRight,
  FiCompass,
  FiSliders,
} from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";

/**
 * HeroUI / Tailwind Component Emulators
 */
const Card = ({ children, className = "", ...props }) => (
  <div
    className={`bg-white rounded-[28px] border border-slate-100 shadow-lg shadow-slate-200/40 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-rose-500/10 hover:-translate-y-1.5 group cursor-pointer ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`relative ${className}`}>{children}</div>
);

const CardBody = ({ children, className = "" }) => (
  <div className={`p-5 flex-1 flex flex-col justify-between ${className}`}>
    {children}
  </div>
);

const CardFooter = ({ children, className = "" }) => (
  <div
    className={`px-5 pb-5 pt-0 flex items-center justify-between text-xs font-semibold ${className}`}
  >
    {children}
  </div>
);

// Mock Data: 8 Newly Discovered Restaurants in Dhaka & Beyond
const RESTAURANT_DISCOVERIES = [
  {
    id: "wok-asian",
    name: "Wok Asian Street Food",
    category: "Asian Street Bites",
    rating: 4.8,
    reviews: 312,
    location: "Gulshan 2, Dhaka",
    description:
      "Sizzling hot wok noodles, hand-pulled bao buns, and authentic pan-Asian street food bursting with flavor.",
    priceTag: "৳৳ • Casual",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
    isBookmarked: false,
  },
  {
    id: "hongbao",
    name: "Hongbao Cantonese",
    category: "Cantonese & Dim Sum",
    rating: 4.9,
    reviews: 428,
    location: "Gulshan 2, Dhaka",
    description:
      "Artisanal steamed crystal dumplings, Peking duck slices, and traditional hot pot soups served in heritage crockery.",
    priceTag: "৳৳৳ • Fine Dining",
    image:
      "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=600&q=80",
    isBookmarked: true,
  },
  {
    id: "laughing-buddha",
    name: "Laughing Buddha",
    category: "Pan-Asian & Cocktails",
    rating: 4.7,
    reviews: 194,
    location: "Banani, Dhaka",
    description:
      "Vibrant interior garden vibe featuring signature sushi rolls, bao platters, and refreshing tropical mocktails.",
    priceTag: "৳৳ • Casual Chic",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
    isBookmarked: false,
  },
  {
    id: "fat-emperor",
    name: "Fat Emperor",
    category: "Szechuan & Izakaya",
    rating: 4.6,
    reviews: 256,
    location: "Gulshan 2, Dhaka",
    description:
      "Fiery chili oil wontons, mapo tofu, and charcoal grilled yakitori skewers crafted by master expat chefs.",
    priceTag: "৳৳৳ • Lively",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    isBookmarked: false,
  },
  {
    id: "izakaya-tokyo",
    name: "Izakaya Tokyo",
    category: "Japanese Grill & Bar",
    rating: 4.8,
    reviews: 510,
    location: "Gulshan 1, Dhaka",
    description:
      "Authentic robatayaki charcoal grills, fresh sashimi platters, and warm matcha tea service in mood lighting.",
    priceTag: "৳৳৳ • Gastropub",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80",
    isBookmarked: false,
  },
  {
    id: "seoul-bbq-house",
    name: "Seoul BBQ House",
    category: "Korean Table Grill",
    rating: 4.9,
    reviews: 380,
    location: "Dhanmondi, Dhaka",
    description:
      "Tabletop smokeless Korean BBQ grills featuring marinating bulgogi beef, kimchi stew, and unlimited banchan side dishes.",
    priceTag: "৳৳ • Social Dining",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    isBookmarked: true,
  },
  {
    id: "peking-duck-house",
    name: "Peking Duck House",
    category: "Mandarin Specialties",
    rating: 4.7,
    reviews: 165,
    location: "Gulshan 2, Dhaka",
    description:
      "Crispy skin roasted Peking duck carved tableside with thin scallion pancakes and sweet bean dipping glaze.",
    priceTag: "৳৳৳ • Heritage",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    isBookmarked: false,
  },
  {
    id: "brew-bake-cafe",
    name: "Brew & Bake Cafe",
    category: "Artisan Bakery & Cafe",
    rating: 4.6,
    reviews: 290,
    location: "Uttara, Dhaka",
    description:
      "Specialty espresso bar paired with freshly baked flaky butter croissants, sourdough toasts, and delicate pastries.",
    priceTag: "৳৳ • Cozy Bakery",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80",
    isBookmarked: false,
  },
];

export default function LatestRestaurantDiscoveries() {
  const [bookmarks, setBookmarks] = useState(
    RESTAURANT_DISCOVERIES.reduce((acc, curr) => {
      acc[curr.id] = curr.isBookmarked;
      return acc;
    }, {}),
  );

  const toggleBookmark = (e, id) => {
    e.stopPropagation(); // Stop card click navigation
    setBookmarks((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleViewAllRedirect = () => {
    // Redirection trigger simulation
    if (typeof window !== "undefined") {
      window.location.href = "/all";
    }
  };

  const handleCardClick = (id) => {
    console.log(`Navigating to restaurant detail: /restaurant/${id}`);
  };

  return (
    <section className="min-h-screen bg-slate-50/60 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        {}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-slate-200/60">
          {/* Left Title Stack */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-rose-600 animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-rose-600 uppercase">
                EDITOR'S VERIFIED PICKS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Latest Restaurant Discoveries
            </h2>
          </div>

          {/* Right Action: "View All" Button (Replaces category pills as specified) */}
          <div>
            <button
              onClick={handleViewAllRedirect}
              className="inline-flex items-center gap-2 text-sm font-bold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100/80 px-4 py-2.5 rounded-full transition-all duration-200 group border border-rose-200/50 shadow-sm"
            >
              <span>View All Discoveries</span>
              <FiArrowRight className="text-base transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESTAURANT_DISCOVERIES.map((item) => {
            const isSaved = bookmarks[item.id];

            return (
              <Card key={item.id} onClick={() => handleCardClick(item.id)}>
                {/* Card Top Image Container */}
                <CardHeader className="h-48 overflow-hidden">
                  <Image
                    width={600}
                    height={400}
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle Image Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-black/20" />

                  {/* Location Badge (Bottom Left of Image) */}
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-slate-800 border border-white/50 flex items-center gap-1 shadow-sm">
                    <FiMapPin className="text-rose-600 text-xs" />
                    <span>{item.location}</span>
                  </div>

                  {/* Heart Bookmark Button (Top Right of Image) */}
                  <button
                    onClick={(e) => toggleBookmark(e, item.id)}
                    aria-label={
                      isSaved ? "Remove from bookmarks" : "Save to bookmarks"
                    }
                    className={`absolute top-3 right-3 w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-200 shadow-md ${
                      isSaved
                        ? "bg-rose-600 text-white scale-110"
                        : "bg-white/80 text-slate-700 hover:bg-white hover:text-rose-600 hover:scale-105"
                    }`}
                  >
                    {isSaved ? (
                      <FaHeart className="text-xs" />
                    ) : (
                      <FiHeart className="text-sm stroke-[2.5]" />
                    )}
                  </button>
                </CardHeader>

                {}
                <CardBody className="p-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    {/* Category & Rating Row */}
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-rose-600 uppercase tracking-wider text-[11px] font-bold truncate max-w-[65%]">
                        {item.category}
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/50">
                        <FiStar className="fill-amber-400 text-amber-500 text-xs" />
                        <span>{item.rating}</span>
                        <span className="text-slate-400 font-normal text-[10px]">
                          ({item.reviews})
                        </span>
                      </div>
                    </div>

                    {/* Restaurant Title */}
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-rose-600 transition-colors duration-200 line-clamp-1">
                      {item.name}
                    </h3>

                    {/* Truncated Two-Line Description */}
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </CardBody>

                {}
                <CardFooter className="px-5 pb-5 pt-0 flex items-center justify-between border-t border-slate-100 pt-3">
                  {/* Price Tag & Category Indicator */}
                  <span className="text-xs font-bold text-slate-600">
                    {item.priceTag}
                  </span>

                  {/* View Menu Action Pill Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log(`Opening menu for ${item.name}`);
                    }}
                    className="px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-rose-600 text-slate-700 hover:text-white font-bold text-xs transition-all duration-200 shadow-sm flex items-center gap-1 group/btn"
                  >
                    <span>View Menu</span>
                    <FiChevronRight className="text-xs transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                  </button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

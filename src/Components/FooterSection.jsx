"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMail } from "react-icons/fi";
import { FaApple, FaAndroid } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi2";
import { IoFlame } from "react-icons/io5";
import Image from "next/image";

export default function RestaurantBDFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="w-full bg-[#f4f5fd] border-t border-slate-200/60 text-slate-600 font-sans pt-12 pb-8 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12">
          {/* Column 1: Brand & Subscription (4 Cols on Large) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Logo and Tagline */}
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="RestaurantBD Logo"
                width={136}
                height={36}
              ></Image>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm">
              Discover Bangladesh's finest eateries, regional gastronomic
              legacies, and urban cafe scenes from Old Dhaka to the coastal
              corners of Cox's Bazar.
            </p>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <label className="block text-xs font-bold text-slate-700 mb-2">
                Subscribe to Gastronomy Digest
              </label>

              {subscribed ? (
                <div className="text-xs font-semibold text-emerald-600 py-2">
                  ✓ Thank you for subscribing!
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="relative max-w-sm flex items-center"
                >
                  <div className="relative w-full">
                    <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 pl-9 pr-20 py-2.5 rounded-full border border-slate-200 focus:outline-none focus:border-rose-500 shadow-sm transition"
                    />
                  </div>
                  <button
                    type="submit"
                    className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#c00735] hover:bg-[#a0052b] text-white text-xs font-medium px-4 py-1.5 rounded-full shadow transition active:scale-95"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Column 2: Explore Cities (3 Cols on Large) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-slate-800">Explore Cities</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-500">
              {[
                "Dhaka",
                "Chattogram",
                "Sylhet",
                "Rajshahi",
                "Barishal",
                "Khulna",
                "Cox's Bazar",
              ].map((city) => (
                <li key={city}>
                  <Link
                    href={`/city/${city.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-rose-600 transition"
                  >
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Popular Cuisines (2 Cols on Large) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-slate-800">
              Popular Cuisines
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-500">
              {[
                "Asian Street Food",
                "Traditional Bengali",
                "Kacchi Biryani",
                "Japanese Izakaya",
                "Continental",
              ].map((cuisine) => (
                <li key={cuisine}>
                  <Link
                    href={`/cuisine/${cuisine.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-rose-600 transition"
                  >
                    {cuisine}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Links & Apps (2 Cols on Large) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-slate-800">Quick Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-500">
              {[
                "About Us",
                "Partner With Us",
                "Contact",
                "Privacy",
                "Terms",
              ].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-rose-600 transition"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile App Section */}
            <div className="pt-3 space-y-2">
              <span className="block text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                EXPERIENCE APP
              </span>
              <div className="flex flex-wrap gap-2">
                <a
                  href="#ios"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-medium hover:border-rose-400 transition shadow-sm"
                >
                  <FaApple className="text-slate-800 text-sm" />
                  <span>iOS App</span>
                </a>
                <a
                  href="#android"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-medium hover:border-rose-400 transition shadow-sm"
                >
                  <FaAndroid className="text-emerald-500 text-sm" />
                  <span>Android</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar Divider */}
        <div className="border-t border-slate-200/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center sm:text-left">
            Copyright © {new Date().getFullYear()} Restaurantbd.com. All rights
            reserved. Powered by culinary passion across Bangladesh.
          </p>

          <div className="flex items-center gap-4 text-slate-600 font-medium shrink-0">
            <span className="flex items-center gap-1 text-slate-700">
              <HiCheckCircle className="text-amber-500 text-sm" />
              <span>Verified Directory</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-slate-700">
              <IoFlame className="text-rose-500 text-sm" />
              <span>Hot Flavors</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

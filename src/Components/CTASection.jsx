"use client";

import React, { useState } from "react";
import { HiCheckCircle, HiBuildingStorefront } from "react-icons/hi2";
import { FiSend } from "react-icons/fi";

const districts = [
  "Dhaka",
  "Chattogram",
  "Sylhet",
  "Rajshahi",
  "Khulna",
  "Barishal",
  "Rangpur",
  "Mymensingh",
  "Cox's Bazar",
];

export default function PartnerContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    district: "Dhaka",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Partnership request submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <section className="w-full max-w-6xl mx-auto p-4 sm:p-6">
      {/* Outer Banner Container with Rounded Corners and Soft Red/Dark Gradient Background */}
      <div className="relative w-full rounded-[32px] sm:rounded-[40px] bg-gradient-to-br from-[#1e2333] via-[#24243a] to-[#9b0932] p-6 sm:p-10 lg:p-14 overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content Side */}
        <div className="flex-1 text-white space-y-6 max-w-xl">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 shadow-inner">
            <HiBuildingStorefront className="text-amber-400 text-sm shrink-0" />
            <span className="text-xs font-semibold text-slate-200 tracking-wide">
              Partner With Bangladesh's Largest Food Network
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15]">
            Are you a restaurant owner or culinary creator?
          </h2>

          {/* Description */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            Showcase your venue to over 250,000 monthly food lovers. Manage your
            live digital menu, accept reservations, and reach diners across all
            64 districts.
          </p>

          {/* Checkmark Feature List */}
          <div className="flex flex-wrap items-center gap-y-3 gap-x-6 pt-2">
            <div className="flex items-center gap-2">
              <HiCheckCircle className="text-amber-500 text-lg shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-slate-200">
                Zero Commission Discovery
              </span>
            </div>

            <div className="flex items-center gap-2">
              <HiCheckCircle className="text-amber-500 text-lg shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-slate-200">
                Instant Verified Badge
              </span>
            </div>

            <div className="flex items-center gap-2">
              <HiCheckCircle className="text-amber-500 text-lg shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-slate-200">
                Direct Table Booking
              </span>
            </div>
          </div>
        </div>

        {/* Right Form Card Side */}
        <div className="w-full lg:w-[420px] bg-white rounded-[28px] p-6 sm:p-8 shadow-2xl text-slate-800 shrink-0">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Get In Touch
          </h3>
          <p className="text-xs text-slate-500 mt-1 mb-6">
            Send your details to list your restaurant or partnership inquiries.
          </p>

          {isSubmitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center text-emerald-800 my-4 animate-in fade-in">
              <p className="font-bold text-sm">Request Received!</p>
              <p className="text-xs mt-1 text-emerald-600">
                Our team will contact you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Field 1: Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">
                  Restaurant / Owner Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Kacchi Bhai / Tanvir Ahmed"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-[#f3f5fd] border border-transparent focus:border-rose-500 focus:bg-white text-slate-800 text-xs sm:text-sm rounded-xl px-4 py-3 outline-none transition-all placeholder:text-slate-400"
                />
              </div>

              {/* Field 2: Phone */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">
                  Phone or WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+880 1700 000000"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full bg-[#f3f5fd] border border-transparent focus:border-rose-500 focus:bg-white text-slate-800 text-xs sm:text-sm rounded-xl px-4 py-3 outline-none transition-all placeholder:text-slate-400"
                />
              </div>

              {/* Field 3: District */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">
                  City or District
                </label>
                <div className="relative">
                  <select
                    value={formData.district}
                    onChange={(e) =>
                      setFormData({ ...formData, district: e.target.value })
                    }
                    className="w-full bg-[#f3f5fd] border border-transparent focus:border-rose-500 focus:bg-white text-slate-800 text-xs sm:text-sm rounded-xl px-4 py-3 outline-none transition-all appearance-none cursor-pointer pr-10"
                  >
                    {districts.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 text-xs">
                    ▼
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#c00735] hover:bg-[#a0052b] active:scale-[0.98] text-white font-semibold py-3.5 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-rose-950/20 transition-all cursor-pointer text-sm mt-2"
              >
                <span>Submit Partnership Request</span>
                <FiSend className="text-base" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

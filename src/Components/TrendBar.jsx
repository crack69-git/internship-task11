"use client";

import React, { useState } from "react";

const trendItems = [
  { id: "dhanmondi", label: "Trending in Dhanmondi", icon: "🔥" },
  { id: "kacchi", label: "Authentic Kacchi Biryani", icon: "🍲" },
  { id: "sushi", label: "Japanese & Sushi", icon: "🍣" },
  { id: "coffee", label: "Artisanal Coffee & Bakeries", icon: "☕" },
  { id: "seafood", label: "Cox's Bazar Seafood", icon: "🌊" },
];

export default function TrendsBar() {
  const [selectedTrend, setSelectedTrend] = useState("kacchi");

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-3">
      <div className="flex items-center gap-3 overflow-x-auto no-scrollbar scroll-smooth">
        {/* Label */}
        <span className="text-xs font-bold tracking-wider text-slate-200 uppercase shrink-0">
          TRENDS:
        </span>

        {/* Pill list */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {trendItems.map((item) => {
            const isActive = selectedTrend === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedTrend(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? "bg-rose-700 border-rose-600 text-white shadow-md shadow-rose-900/30 scale-105"
                    : "bg-slate-800/80 border-slate-700/60 text-slate-200 hover:bg-slate-700/80 hover:border-slate-600"
                }`}
              >
                <span className="text-sm leading-none">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import React from "react";
import { FiArrowRight, FiChevronRight } from "react-icons/fi";

/**
 * HeroUI Component Emulators for direct single-file preview & run support.
 * Integrates HeroUI design tokens, rounded borders, backdrop filters, and hover micro-interactions.
 */
const Card = ({ children, className = "", ...props }) => (
  <div
    className={`bg-white rounded-[28px] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-rose-500/10 hover:-translate-y-1 group cursor-pointer ${className}`}
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

const Chip = ({ children, color = "default", size = "md", className = "" }) => {
  const colorStyles = {
    rose: "bg-rose-600 text-white font-bold",
    white:
      "bg-white/95 backdrop-blur-md text-rose-900 font-bold border border-white/50 shadow-sm",
    slate: "bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium",
  };

  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-[11px]",
    md: "px-3 py-1 text-xs",
  };

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full transition-all duration-200 ${colorStyles[color] || colorStyles.slate} ${sizeStyles[size] || sizeStyles.md} ${className}`}
    >
      {children}
    </span>
  );
};

const REGIONAL_DESTINATIONS = [
  {
    id: "dhaka",
    isFeatured: true,
    title: "Dhaka Metropolitan",
    subtitle:
      "From Old Dhaka kacchi alleys to Gulshan, Banani, & Dhanmondi rooftop lounges.",
    badgeCount: "256 Restaurants",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    tags: ["Kacchi Biryani", "Street Jhalmuri", "Artisan Cafes"],
  },
  {
    id: "chattogram",
    title: "Chattogram",
    locationDetail: "Port City & GEC Circle",
    subtitle:
      "Famed for authentic Mezban gosht, Kala Bhuna, and fresh Bay of Bengal pomfret.",
    badgeCount: "48 Venues",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
    footerTag: "Mezban • Kala Bhuna",
  },
  {
    id: "sylhet",
    title: "Sylhet",
    locationDetail: "Surma Valley & Zindabazar",
    subtitle:
      "Wild citrus Shatkora beef, aromatic Akhni pulao, and world-famous Nilkantha layered tea.",
    badgeCount: "32 Venues",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    footerTag: "Shatkora Beef • Akhni",
  },
  {
    id: "coxsbazar",
    title: "Cox's Bazar",
    locationDetail: "Kolatoli & Inani Coast",
    subtitle:
      "Live charcoal sea catches, Rupchanda fry, and indigenous bamboo chicken delicacies.",
    badgeCount: "38 Venues",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    footerTag: "Rupchanda • Bamboo BBQ",
  },
  {
    id: "rajshahi",
    title: "Rajshahi",
    locationDetail: "Padma Riverfront",
    subtitle:
      "Crisp Kalai Ruti with fiery morich-begun bhorta and seasonal mango desserts along the river.",
    badgeCount: "24 Venues",
    image:
      "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=600&q=80",
    footerTag: "Kalai Ruti • Duck Curry",
  },
  {
    id: "khulna",
    title: "Khulna",
    locationDetail: "Rupsha & Sundarbans Gateway",
    subtitle:
      "Legendary Chui Jhal wild pepper beef and freshwater Golda Chingri jumbo river prawns.",
    badgeCount: "20 Venues",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    footerTag: "Chui Jhal • Golda Chingri",
  },
  {
    id: "barishal",
    title: "Barishal",
    locationDetail: "Kirtankhola Riverbanks",
    subtitle:
      "Padma river Shorshe Ilish feasts, steamed coconut crab curries, and regional sweets.",
    badgeCount: "18 Venues",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80",
    footerTag: "Shorshe Ilish • Crab Fry",
  },
];

export default function CityResCard() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-slate-50 to-slate-200 text-slate-800 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REGIONAL_DESTINATIONS.filter((item) => item.isFeatured).map(
            (item) => (
              <Card
                key={item.id}
                className="lg:col-span-2 min-h-[340px] flex flex-col justify-between relative bg-slate-950 text-white border-0 shadow-2xl"
              >
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1200}
                    height={800}
                    quality={80}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />
                </div>

                {/* Card Header Content */}
                <CardHeader className="p-6 z-10">
                  <Chip
                    color="rose"
                    size="md"
                    className="shadow-lg shadow-rose-600/30"
                  >
                    {item.badgeCount}
                  </Chip>
                </CardHeader>

                {/* Card Main Overlay Text Content */}
                <div className="p-6 sm:p-8 z-10 space-y-3 mt-auto">
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-md">
                    {item.title}
                  </h2>
                  <p className="text-slate-200 text-xs sm:text-sm font-normal max-w-xl leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                {/* Bottom Tags Bar & Action Button */}
                <CardFooter className="z-10 bg-white/95 backdrop-blur-md border-t border-white/20 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 text-slate-800">
                  <div className="flex flex-wrap items-center gap-2">
                    {item.tags.map((tag) => (
                      <Chip
                        key={tag}
                        color="slate"
                        size="sm"
                        className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold"
                      >
                        {tag}
                      </Chip>
                    ))}
                  </div>

                  <button
                    aria-label="Explore Dhaka Metropolitan"
                    className="w-10 h-10 rounded-full bg-slate-100 text-slate-700 hover:bg-rose-600 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-110"
                  >
                    <FiArrowRight className="text-lg transition-transform duration-200 group-hover:translate-x-0.5" />
                  </button>
                </CardFooter>
              </Card>
            ),
          )}

          {/* CHATTOGRAM & SYLHET CARDS */}
          {REGIONAL_DESTINATIONS.filter(
            (item) => item.id === "chattogram" || item.id === "sylhet",
          ).map((item) => (
            <Card
              key={item.id}
              className="h-full flex flex-col justify-between"
            >
              {/* Header Image section */}
              <CardHeader className="h-44 sm:h-48 overflow-hidden">
                <Image
                  width={600}
                  height={400}
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

                {/* Badge Top Left */}
                <div className="absolute top-4 left-4">
                  <Chip color="white" size="sm">
                    {item.badgeCount}
                  </Chip>
                </div>

                {/* Overlaid Title & Subtitle */}
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[11px] font-semibold text-amber-300 opacity-90">
                    {item.locationDetail}
                  </p>
                </div>
              </CardHeader>

              {/* Body Description */}
              <CardBody className="p-4 sm:p-5">
                <p className="text-slate-600 text-xs leading-relaxed">
                  {item.subtitle}
                </p>
              </CardBody>

              {/* Footer Tags & Action */}
              <CardFooter className="px-4 sm:px-5 pb-4 pt-0 text-amber-700 flex items-center justify-between">
                <span className="text-xs font-bold truncate max-w-[85%]">
                  {item.footerTag}
                </span>
                <FiChevronRight className="text-rose-600 text-sm transition-transform duration-200 group-hover:translate-x-1" />
              </CardFooter>
            </Card>
          ))}

          {/* ROW 2 CARDS: COX'S BAZAR, RAJSHAHI, KHULNA, BARISHAL */}
          {REGIONAL_DESTINATIONS.filter(
            (item) =>
              !item.isFeatured &&
              item.id !== "chattogram" &&
              item.id !== "sylhet",
          ).map((item) => (
            <Card
              key={item.id}
              className="h-full flex flex-col justify-between"
            >
              {/* Header Image section */}
              <CardHeader className="h-44 sm:h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

                {/* Badge Top Left */}
                <div className="absolute top-4 left-4">
                  <Chip color="white" size="sm">
                    {item.badgeCount}
                  </Chip>
                </div>

                {/* Overlaid Title & Subtitle */}
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[11px] font-semibold text-amber-300 opacity-90">
                    {item.locationDetail}
                  </p>
                </div>
              </CardHeader>

              {/* Body Description */}
              <CardBody className="p-4 sm:p-5">
                <p className="text-slate-600 text-xs leading-relaxed">
                  {item.subtitle}
                </p>
              </CardBody>

              {/* Footer Tags & Action */}
              <CardFooter className="px-4 sm:px-5 pb-4 pt-0 text-amber-700 flex items-center justify-between">
                <span className="text-xs font-bold truncate max-w-[85%]">
                  {item.footerTag}
                </span>
                <FiChevronRight className="text-rose-600 text-sm transition-transform duration-200 group-hover:translate-x-1" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

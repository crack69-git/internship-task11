import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarSection from "@/Components/NavbarSection";
import RestaurantBDFooter from "@/Components/FooterSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RestaurantBD - Discover the Best Eateries in Bangladesh",
  description:
    "Discover the finest eateries in Bangladesh, from historic Old Dhaka copper handis to contemporary kaiseki counters in Gulshan and fiery mezban feasts in Chittagong. Explore our curated selection of over 450 handpicked restaurants across 64 districts.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavbarSection />
        <main>{children}</main>
        <RestaurantBDFooter />
      </body>
    </html>
  );
}

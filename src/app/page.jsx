import PartnerContactSection from "@/Components/CTASection";
import HomepageSection from "@/Components/HomepageSection";
import LatestRestaurantDiscoveries from "@/Components/ShortMenuSection";
import TopCitiesSection from "@/Components/TopCitiesSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HomepageSection />
      <TopCitiesSection />
      <LatestRestaurantDiscoveries />
      <PartnerContactSection />
    </div>
  );
}

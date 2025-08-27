import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PhoneDisplaySection } from "@/components/PhoneDisplaySection";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-primary">
      <AnnouncementBanner />
      <Header />
      <main>
        <HeroSection />
        <PhoneDisplaySection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}

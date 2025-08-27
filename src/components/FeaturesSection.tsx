"use client";

import { Button } from "@/components/ui/button";
import useWaitlistStore from "@/store/waitlist";

export function FeaturesSection() {
  const {setIsOpen} = useWaitlistStore()
  
  const handlePlayStoreClick = () => {
    window.open('https://play.google.com/store/apps/details?id=com.dishant.vocapp', '_blank');
  };

  return (
    <section className="container mx-auto px-4 py-20 md:max-w-3/5 flex flex-col items-center">
      <div className="text-center flex flex-col gap-8 md:gap-30 space-y-16">
        <p data-aos="fade-up" data-aos-offset="0" data-aos-duration="1500" className="text-3xl md:text-[70px] font-bold leading-[1.05]">
          AI-powered podcasts, personalized learning, and quick audio creation - all in one smart tool
        </p>
        
        <p data-aos="fade-up" data-aos-offset="0" data-aos-duration="1500" className="text-3xl md:text-[70px] font-bold leading-[1.05]">
         Perfectly integrated with your daily routine, Vocapp syncs effortlessly with your devices and adapts to your listening habits.
        </p>
        
        <p data-aos="fade-up" data-aos-offset="0" data-aos-duration="1500" className="text-3xl md:text-[70px] font-bold leading-[1.05]">
          Designed for simplicity, Vocapp creates an effortless experience so you can focus on what matters — staying informed and learning daily.
        </p>
      </div>
      
      <div className="mt-28 flex flex-col sm:flex-row gap-4 items-center">
        <Button
          id="download-app-features" 
          data-umami-event="Download App Features"
          onClick={handlePlayStoreClick}
          data-aos="fade-up" data-aos-offset="0" data-aos-duration="1500" 
          className="rounded-full hover:bg-gray-800 font-bold !px-15 py-8 text-xl flex items-center gap-3">
          Download Now
        </Button>
        
       
      </div>
    </section>
  );
}

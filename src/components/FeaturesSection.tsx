"use client";

import { Button } from "@/components/ui/button";
import useWaitlistStore from "@/store/waitlist";

export function FeaturesSection() {
  const {setIsOpen} = useWaitlistStore()
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
      
      <Button
      onClick={() => setIsOpen(true)}
      data-aos="fade-up" data-aos-offset="0" data-aos-duration="1500" className="mt-28 rounded-full hover:bg-gray-800 font-bold px-15 py-10 text-xl ">
        Join Waitlist
      </Button>
    </section>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AuroraText } from "./magicui/aurora-text";

export function HeroSection() {
  
  const handlePlayStoreClick = () => {
    window.open('https://play.google.com/store/apps/details?id=com.dishant.vocapp', '_blank');
  };

  return (
    <section className="container mx-auto px-4 pb-0 py-20 text-center flex flex-col items-center">
      <Image
      height={40}
      width={40}
      src="/vocapp.svg" alt="Vocapp Logo" className="inline-block rounded-md h-10" />
      <span className="text-2xl font-bold">Vocapp Podcast</span>
      <p className="text-5xl md:text-8xl font-bold md:max-w-[60vw] mx-auto mt-4 leading-[1.05]">
        Turn your <AuroraText
        colors={["#201502","#5C4D00", "#c0b5ff" ]}
        >ideas</AuroraText> into binge-worthy <AuroraText
        colors={["#201502","#5C4D00", "#c0b5ff" ]}
        >podcasts</AuroraText> in <AuroraText
        colors={[ "#c0b5ff", "#165bfa", "#201502"]}
        > minutes</AuroraText>
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
        <Button
          id="download-app-button" 
          data-umami-event="Download App button"
          onClick={handlePlayStoreClick} 
          className="rounded-full hover:bg-gray-800 font-bold !px-10 py-8 text-lg flex items-center gap-3">
          Download on Google Play
        </Button>
        
        {/* <Button
          id="join-waitlist-button" 
          data-umami-event="Join Waitlist button"
          onClick={() => setIsOpen(true)} 
          variant="outline"
          className="rounded-full font-bold px-10 py-8 text-lg flex items-center gap-3 border-2">
          <Download className="w-5 h-5" />
          Still want to join waitlist?
        </Button> */}
      </div>
    </section>
  );
}

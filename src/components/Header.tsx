"use client"

import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";
import Link from "next/link";

export function Header() {
  
  const handlePlayStoreClick = () => {
    window.open('https://play.google.com/store/apps/details?id=com.dishant.vocapp', '_blank');
  };

  return (
    <header className="md:w-[95%] w-[95%] mx-auto z-10 rounded-full  backdrop-blur-md sticky top-4 border border-border  pr-2 px-10 py-2 flex justify-between items-center">
      <Link href={"/"} className="text-2xl flex items-center  font-bold">
        Vocapp
      </Link>
      <nav className="flex items-center space-x-4">
        <Button
        id="download-app-header" data-umami-event="Download App Header"
        onClick={handlePlayStoreClick}
        className="h-12 !px-6 rounded-full font-bold flex items-center gap-2">
          <Smartphone className="w-4 h-4" />
          Download App
        </Button>
       
      </nav>
    </header>
  );
}

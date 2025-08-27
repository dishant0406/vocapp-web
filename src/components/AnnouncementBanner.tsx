"use client";

import { Button } from "@/components/ui/button";
import { Smartphone, Sparkles } from "lucide-react";

export function AnnouncementBanner() {
  const handlePlayStoreClick = () => {
    window.open('https://play.google.com/store/apps/details?id=com.dishant.vocapp', '_blank');
  };

  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-white py-4 mb-4 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 animate-pulse" />
          <span className="font-bold text-lg">🎉 NOW LIVE!</span>
          <Sparkles className="w-5 h-5 animate-pulse" />
        </div>
        <span className="text-base font-medium">
          Vocapp is now available on Google Play Store
        </span>
        <Button
          onClick={handlePlayStoreClick}
          variant="secondary"
          className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-6 py-2 rounded-full flex items-center gap-2 shadow-lg"
        >
          <Smartphone className="w-4 h-4" />
          Download Now
        </Button>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";

export function Footer() {
  const handlePlayStoreClick = () => {
    window.open('https://play.google.com/store/apps/details?id=com.dishant.vocapp', '_blank');
  };

  return (
    <footer className="container mx-auto px-4 py-10 border-t border-gray-200 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Vocapp. All rights reserved.
        </div>
        
       
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <Link href={'/sitemap.xml'} className="text-sm text-gray-500 hover:text-gray-700">Sitemap</Link>
          <Link href={'/contact'} className="text-sm text-gray-500 hover:text-gray-700">Contact</Link>
          <Link href={'/privacy-policy'} className="text-sm text-gray-500 hover:text-gray-700">Privacy policy</Link>
          <Link href={'/terms-conditions'} className="text-sm text-gray-500 hover:text-gray-700">Terms & conditions</Link>
          <Link href={'/cancellation-refund'} className="text-sm text-gray-500 hover:text-gray-700">Cancellation & Refund</Link>
        </div>
      </div>
    </footer>
  );
}

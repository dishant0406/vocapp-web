"use client"

import { Button } from "@/components/ui/button";
import useWaitlistStore from "@/store/waitlist";
import Link from "next/link";

export function Header() {
  const {setIsOpen} = useWaitlistStore()
  return (
    <header className="md:w-[95%] w-[95%] mx-auto z-10 rounded-full  backdrop-blur-md sticky top-4 border border-border  pr-2 px-10 py-2 flex justify-between items-center">
      <Link href={"/"} className="text-2xl flex items-center  font-bold">
        Vocapp
      </Link>
      <nav className="flex items-center space-x-8">
        <Button
        onClick={() => setIsOpen(true)}
        className=" h-12  px-6 rounded-full font-bold">
          Join Waitlist
        </Button>
      </nav>
    </header>
  );
}

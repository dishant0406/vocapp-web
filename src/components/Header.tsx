import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-[98%] mx-auto z-10 rounded-full backdrop-blur-md sticky top-4 border border-border  pr-2 px-10 py-2 flex justify-between items-center">
      <Link href={"/"} className="text-2xl flex items-center  font-bold">
        Vocapp
      </Link>
      <nav className="flex items-center space-x-8">
        <Button className=" h-12  px-6 rounded-full font-bold">
          Join Waitlist
        </Button>
      </nav>
    </header>
  );
}

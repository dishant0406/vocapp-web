import { Button } from "@/components/ui/button";
import { AuroraText } from "./magicui/aurora-text";

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 pb-0 py-20 text-center flex flex-col items-center">
      <img src="/vocapp.svg" alt="Vocapp Logo" className="inline-block rounded-md h-10" />
      <span className="text-2xl font-bold">Vocapp Podcast</span>
      <p className="text-5xl md:text-8xl font-bold md:max-w-[60vw] mx-auto mt-4 leading-[1.05]">
        Create amazing <AuroraText
        colors={["#201502","#5C4D00", "#c0b5ff" ]}
        >podcasts</AuroraText> from your ideas in <AuroraText
        colors={[ "#c0b5ff", "#165bfa", "#201502"]}
        >minutes</AuroraText>
      </p>
      <Button className="mt-10 rounded-full hover:bg-gray-800 font-bold px-10 py-8 text-lg ">
        Join Waitlist
      </Button>
    </section>
  );
}

import Image from "next/image";

export function PhoneDisplaySection() {
  return (
    <section className="container mx-auto px-4 pt-0 py-16 flex justify-center">
     <div className="relative">
      <Image
        src={'/phone.webp'}
        alt="Phone Display"
        width={1000}
        height={1000}
        className="w-full h-auto"
      />
      <Image
        src={'/mock.webp'}
        alt="Mockup Display"
        width={1000}
        height={1000}
        className="absolute inset-0 m-auto z-[1] w-[70%] h-auto left-0 right-0 top-0 bottom-0"
      />
     </div>
    </section>
  );
}

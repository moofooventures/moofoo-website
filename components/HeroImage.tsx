import Image from "next/image";
import heroShark from "@/public/heroshark.jpg";

export default function HeroImage() {
  return (
    <div className="relative w-full">
      <div
        aria-hidden="true"
        className="absolute inset-[-10%] -z-10 animate-glow-breathe rounded-full bg-blue/25 blur-3xl"
      />
      <Image
        src={heroShark}
        alt="MooFoo Ventures AI-powered performance marketing system, visualized as a robotic shark processing leads"
        priority
        className="h-auto w-full animate-breathe rounded-2xl"
        sizes="(min-width: 768px) 64vw, 92vw"
      />
    </div>
  );
}

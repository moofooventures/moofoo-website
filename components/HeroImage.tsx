import Image from "next/image";
import heroShark from "@/public/heroshark.jpg";

export default function HeroImage() {
  return (
    <Image
      src={heroShark}
      alt="MooFoo Ventures AI-powered performance marketing system, visualized as a robotic shark processing leads"
      priority
      className="h-auto w-full rounded-2xl"
      sizes="(min-width: 768px) 64vw, 92vw"
    />
  );
}

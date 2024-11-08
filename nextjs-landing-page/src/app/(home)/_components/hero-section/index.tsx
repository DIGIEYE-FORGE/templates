import {
  Section,
  SectionSubtitle,
  SectionTitle,
} from "@/app/components/section";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Image from "next/image";
import { image, subtitle, title } from "./data";

export default function HeroSection() {
  return (
    <Section className="relative max-w-full">
      <SectionTitle className="px-6 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        {title}
      </SectionTitle>
      <SectionSubtitle className="max-w-screen-md px-6">
        {subtitle}
      </SectionSubtitle>
      <div className="relative z-10 flex justify-center">
        <RainbowButton className="h-12 uppercase">order Now</RainbowButton>
      </div>
      <div className="relative -translate-y-8 after:absolute after:inset-0 after:block after:bg-gradient-to-b after:from-white after:via-transparent after:to-transparent after:content-['']">
        <Image
          src={image}
          alt="hero"
          width={1600}
          height={900}
          className="px-0! mx-auto aspect-[2.2] w-full object-cover"
        />
      </div>
    </Section>
  );
}

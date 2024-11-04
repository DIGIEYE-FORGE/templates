import { twMerge } from "tailwind-merge";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Image from "next/image";
import { cn } from "@/lib/utils";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  seperator?: boolean;
}
export function Section({
  className,
  children,
  seperator = true,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative space-y-8 pb-20 pt-6",
        {
          "after:absolute after:bottom-0 after:right-1/2 after:block after:h-0.5 after:w-12 after:translate-x-1/2 after:rounded after:bg-black after:content-['']":
            seperator,
        },
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface SectionContentProps extends React.HTMLAttributes<HTMLDivElement> {}
export function SectionContent({
  className,
  children,
  ...props
}: SectionContentProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-screen-2xl px-container", className)}
      {...props}
    >
      {children}
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}
export function SectionTitle({
  className,
  children,
  ...props
}: SectionTitleProps) {
  return (
    <h2
      className={twMerge(
        "mx-auto max-w-screen-2xl text-balance px-container text-center text-2xl font-medium md:text-3xl lg:text-4xl",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface SectionSubtitleProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}
export function SectionSubtitle({
  className,
  children,
  ...props
}: SectionSubtitleProps) {
  return (
    <p
      className={twMerge(
        "text- mx-auto max-w-screen-xl text-balance text-center text-xl",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function HeroSection() {
  return (
    <Section className="relative max-w-full">
      <SectionTitle className="px-6 text-6xl">
        Plant Data at Your Fingertips with an Innovative Agriculture Camera
      </SectionTitle>
      <SectionSubtitle className="max-w-screen-md px-6">
        Manage your crops remotely 24/7, saving time on scouting and making more
        effective agronomic decisions
      </SectionSubtitle>
      <div className="relative z-10 flex justify-center">
        <RainbowButton className="uppercase">order Now</RainbowButton>
      </div>
      <div className="relative -translate-y-8 after:absolute after:inset-0 after:block after:bg-gradient-to-b after:from-white after:via-transparent after:to-transparent after:content-['']">
        <Image
          src="/images/home-hero.jpg"
          alt="hero"
          width={1600}
          height={900}
          className="px-0! mx-auto aspect-[2.2] w-full object-cover"
        />
      </div>
    </Section>
  );
}

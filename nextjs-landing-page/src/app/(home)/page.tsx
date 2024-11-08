"use client";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Image from "next/image";
import Marquee from "@/components/ui/marquee";
import {
  Section,
  SectionContent,
  SectionSubtitle,
  SectionTitle,
} from "../components/section";
import {
  // section10Data,
  section1Data,
  section2Data,
  section3Data,
  section4Data,
  section5Data,
  section6Data,
  section7Data,
  section8Data,
  section9Data,
} from "./data";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import React from "react";
// import WorldMap from "react-svg-worldmap";
import Footer from "../components/footer";
import FaqSection from "./_components/faq-section";
import HeroSection from "./_components/hero-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Section>
        <SectionTitle>{section1Data.title}</SectionTitle>
        <Marquee pauseOnHover className="bg-primary/10 [--duration:30s]">
          {section1Data.data.map((src, index) => (
            <div className="py-6" key={index}>
              <Image
                src={src}
                alt="logo"
                width={160}
                height={90}
                className="h-8 w-32 object-contain"
              />
            </div>
          ))}
        </Marquee>
      </Section>
      <Section>
        <SectionTitle>{section2Data.title}</SectionTitle>
        <SectionContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {section2Data.data.map((challenge, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-gray-500/10 p-3">
                      {challenge.icon}
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">{challenge.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>{section3Data.title}</SectionTitle>

        <SectionContent>
          <Carousel className="w-full">
            <CarouselContent>
              {section3Data.data.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="rouhnded-lg grid overflow-hidden md:grid-cols-2">
                      <div className="relative">
                        <Image
                          src={slide.image}
                          alt="Agronomist in field"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-center p-container">
                        <h2 className="mb-8 text-3xl font-bold md:text-4xl">
                          {slide.title}
                        </h2>
                        <ul className="space-y-6">
                          {slide.points.map((point, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <div className="mt-2 size-2 shrink-0 rounded-full bg-green-400" />
                              <p className="text-lg text-muted-foreground">
                                {point}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="size-10" />
            <CarouselNext className="size-10" />
          </Carousel>
        </SectionContent>
        <div className="flex justify-center">
          <RainbowButton className="uppercase">boock a call</RainbowButton>
        </div>
      </Section>
      <Section>
        <SectionTitle>{section4Data.title}</SectionTitle>
        <SectionContent className="grid gap-6 lg:grid-cols-2">
          {section4Data.data.map(({ image, description, href }, index) => (
            <div key={index} className="items-center gap-4 space-y-4">
              <Image
                src={image}
                alt="icon"
                width={600}
                height={400}
                className="aspect-video w-full rounded-lg object-cover"
              />
              <p className="font-l md:text-lg lg:text-2xl">{description}</p>
              <Link href={href} passHref className="inline-block">
                <Button variant="link" className="p-0 text-xl font-medium">
                  Learn More
                </Button>
              </Link>
            </div>
          ))}
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>{section5Data.title}</SectionTitle>
        <SectionContent className="grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-6">
          {section5Data.data.map(({ image, description, title }, index) => (
            <div key={index} className="items-center gap-4 space-y-3">
              <Image
                src={image}
                alt="icon"
                width={600}
                height={400}
                className="aspect-video w-full rounded-lg object-cover"
              />
              <h3 className="md:text-xl">{title}</h3>
              <p className="font-l md:text-lg">{description}</p>
            </div>
          ))}
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>{section6Data.title}</SectionTitle>

        <SectionContent>
          <Carousel className="w-full">
            <CarouselContent>
              {section6Data.data.map(({ image, title, description }, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="rouhnded-lg grid overflow-hidden md:grid-cols-2">
                      <div className="relative">
                        <Image
                          src={image}
                          alt="Agronomist in field"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-center p-container">
                        <h2 className="mb-8 pt-container text-xl font-semibold md:text-2xl lg:text-3xl">
                          Step {index + 1}: {title}
                        </h2>
                        <p className="pb-container md:text-xl">{description}</p>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="size-10" />
            <CarouselNext className="size-10" />
          </Carousel>
        </SectionContent>
        <div className="flex justify-center">
          <RainbowButton className="uppercase">boock a call</RainbowButton>
        </div>
      </Section>
      <Section>
        <SectionTitle>{section7Data.title}</SectionTitle>
        <SectionSubtitle>{section7Data.subtitle}</SectionSubtitle>
        <SectionContent className="grid gap-4 md:gap-6 xl:grid-cols-2">
          {section7Data.data.map(({ image, title, description }, index) => (
            <Card key={index} className="flex h-52 overflow-hidden bg-white">
              <Image
                src={image}
                alt="icon"
                width={400}
                height={400}
                className="h-full w-64 object-cover"
              />
              <div className="fle-col flex flex-1 flex-col justify-center gap-4 p-6">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="line-clamp-3">{description}</p>
              </div>
            </Card>
          ))}
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>{section8Data.title}</SectionTitle>
        <SectionSubtitle>{section8Data.subtitle}</SectionSubtitle>
        <SectionContent className="grid gap-4 md:gap-8 xl:grid-cols-2">
          <Carousel className="w-full">
            <CarouselContent>
              {section8Data.data.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-96">
                    <Image
                      src={image}
                      alt="Agronomist in field"
                      fill
                      className="overflow-hidden rounded-lg object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 size-10" />
            <CarouselNext className="right-4 size-10" />
          </Carousel>
          <div className="flex flex-col justify-center">
            {Object.entries(section8Data.data.specefications).map(
              ([key, value], index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 gap-4 rounded from-transparent to-primary/5 py-4 odd:bg-gradient-to-r"
                >
                  <span className="font-semibold">{key}</span>
                  <span className="font-semibold">{value}</span>
                </div>
              ),
            )}
          </div>
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>{section9Data.title}</SectionTitle>
        <SectionSubtitle>{section9Data.subtitle}</SectionSubtitle>
        <SectionContent>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            {section9Data.data.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 text-center"
              >
                <div className="rounded-lg bg-muted p-3">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-medium">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </SectionContent>
      </Section>
      {/* <Section>
        <SectionTitle>{section10Data.title}</SectionTitle>
        <SectionContent>
          <div className="mx-auto w-fit">
            <WorldMap
              color="#c53684"
              // title="Top 10 Populous Countries"
              value-suffix="people"
              size="xxl"
              data={section10Data.data}
            />
          </div>
        </SectionContent>
      </Section> */}

      <FaqSection />
      <Footer />
    </main>
  );
}

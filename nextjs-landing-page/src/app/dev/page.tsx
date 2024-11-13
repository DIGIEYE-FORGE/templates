"use client";
import React from "react";
import "swiper/css";
import { Swiper, SwiperClass, SwiperSlide, useSwiper } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { CheckIcon } from "lucide-react";

const data = [
  {
    title: "First Item",
    content:
      "This is the content for the first item, which contains between fifteen and thirty words.",
    image: "/images/placeholder.svg",
  },
  {
    title: "Second Item Title",
    content:
      "Here is the content for the second item. It also contains a suitable number of words for this example.",
    image: "/images/placeholder.svg",
  },
  {
    title: "Third",
    content:
      "Content for the third item goes here. It should be descriptive enough to meet the word count requirement.",
    image: "/images/placeholder.svg",
  },
  {
    title: "Fourth Item with a Longer Title",
    content:
      "The fourth item's content is here. It is designed to fit within the specified word count range.",
    image: "/images/placeholder.svg",
  },
  {
    title: "Enjoy!",
    content:
      "Finally, this is the content for the fifth item. It also meets the criteria for the word count.",
    image: "/images/placeholder.svg",
  },
];

function SlidesIndicator({ activeIndex }: { activeIndex: number }) {
  const swiper = useSwiper();
  return (
    <div className="absolute inset-y-0 right-1/2 z-10 flex w-0.5 flex-col items-center justify-between rounded bg-current text-gray-200">
      <div
        className="absolute inset-x-0 top-0 bg-black"
        style={{
          height: `${(activeIndex / (data.length - 1)) * 100}%`,
        }}
      ></div>
      {data.map((_, i) => (
        <button
          onClick={() => swiper.slideTo(i)}
          key={i}
          className={cn(
            "relative z-10 grid size-5 place-content-center rounded-full bg-current transition-[transform,background-color] hover:bg-black",
            {
              "bg-black": i <= activeIndex,
              "scale-50": i !== activeIndex,
              "origin-top": i === 0,
              "origin-bottom": i === data.length - 1,
            },
          )}
        >
          {
            <CheckIcon
              size={14}
              strokeWidth={3}
              className={cn("opacity-0 transition-opacity", {
                "opacity-100 delay-100": i === activeIndex,
              })}
            />
          }
        </button>
      ))}
    </div>
  );
}

export default function Page() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const swiperRef = React.useRef<SwiperClass>();
  function handleSlideChange(swiper: SwiperClass) {
    setActiveIndex(swiper.activeIndex);
  }

  return (
    <main className="grid min-h-[60vh] place-content-center">
      <div className="relative aspect-[3] h-[16rem]">
        <Swiper
          modules={[Mousewheel]}
          direction="vertical"
          mousewheel={true}
          slidesPerView={1}
          spaceBetween={0}
          className={cn("h-full w-full")}
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="flex h-full w-full cursor-grab select-none gap-20 active:cursor-grabbing">
                <div className="relative w-1 flex-1">
                  <Image
                    src={item.image}
                    fill
                    alt={item.title}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="flex w-1 flex-1 flex-col justify-center space-y-3">
                  <h3 className="text-2xl">
                    {(i + 1).toString().padStart(2, "0")}
                  </h3>
                  <h3 className="text-xl">{item.title}</h3>
                  <p className="line-clamp-3 text-balance text-lg font-extralight">
                    {item.content}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <SlidesIndicator activeIndex={activeIndex} />
        </Swiper>
      </div>
    </main>
  );
}

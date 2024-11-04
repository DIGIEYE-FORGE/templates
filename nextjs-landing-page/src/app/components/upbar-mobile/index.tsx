"use client";

import * as React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { routes } from "../upbar-desktop/data";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IUpbarProps extends React.HTMLAttributes<HTMLDivElement> {}
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export function UpBarMobile({ className, ...props }: IUpbarProps) {
  return (
    <header
      className={twMerge(
        "mx-auto flex w-full max-w-screen-2xl items-center justify-between px-container py-4",
        className,
      )}
      {...props}
    >
      <Image
        src="/logo.png"
        alt="Logo"
        width={300}
        height={200}
        className="h-7 w-auto object-contain"
        priority
      />
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"ghost"} className="rounded-full uppercase">
            <AlignJustify />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full">
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="hide-scrollbar mb-2 flex h-full w-full flex-col gap-4 px-4">
            <div className="h-[94%] overflow-y-auto">
              <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="rounded-lg object-cover"
              />
              <Accordion type="single" collapsible className="w-full">
                {routes.map((route, index) => {
                  const { name, href, subRoutes } = route;
                  if (href) {
                    return (
                      <div
                        key={index}
                        className="flex h-[3rem] items-center border-b px-1 text-xl font-medium capitalize"
                      >
                        <Link href={href} legacyBehavior passHref>
                          {name}
                        </Link>
                      </div>
                    );
                  } else if (subRoutes) {
                    return (
                      <AccordionItem key={index} value={name}>
                        <AccordionTrigger className="text-xl capitalize">
                          {name}
                        </AccordionTrigger>
                        <AccordionContent className="grid grid-cols-2 gap-4 gap-y-6">
                          {subRoutes.map((subRoute, index) => {
                            const { name, image, description } = subRoute;
                            return (
                              <div
                                key={index}
                                className="relative flex flex-col space-y-1"
                              >
                                <Image
                                  src={image}
                                  alt={name}
                                  width={100}
                                  height={80}
                                  className="aspect-[1.2] w-full rounded-lg object-cover"
                                />

                                <h4 className="text-md font-semibold capitalize">
                                  {name}
                                </h4>
                                {description && (
                                  <p className="text-sm text-gray-500 first-letter:uppercase">
                                    {description}
                                  </p>
                                )}
                              </div>
                            );
                          })}
                        </AccordionContent>
                      </AccordionItem>
                    );
                  }
                })}
              </Accordion>
            </div>
            <div className="flex justify-end">
              <Button className="relative left-0 w-1/2">Sign In</Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

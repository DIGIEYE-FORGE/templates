"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { routes } from "./data";
import { Button } from "@/components/ui/button";
import { twMerge } from "tailwind-merge";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IUpbarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UpbarDesktop({ className, ...props }: IUpbarProps) {
  return (
    <header
      className={twMerge(
        "mx-auto flex w-full max-w-screen-2xl items-center justify-between px-container py-4",
        className,
      )}
      {...props}
    >
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Logo"
          width={300}
          height={200}
          className="h-7 w-auto object-contain"
          priority
        />
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          {routes.map((route, index) => {
            const { name, href, subRoutes } = route;

            return (
              <NavigationMenuItem key={index}>
                {href && (
                  <Link href={href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      <span className="text-lg capitalize">{name}</span>
                    </NavigationMenuLink>
                  </Link>
                )}
                {subRoutes && (
                  <>
                    <NavigationMenuTrigger>
                      <span className="text-lg capitalize">{name}</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="flex w-fit gap-4 p-6">
                        {subRoutes.map((subRoute, index) => {
                          const { name, href, image, description } = subRoute;
                          return (
                            <Link
                              href={href}
                              key={index}
                              //   passHref
                              //   legacyBehavior
                              className="w-60 space-y-2"
                            >
                              <Image
                                src={image}
                                alt={name}
                                width={100}
                                height={100}
                                className="aspect-[1.3] w-full shrink-0 rounded-lg object-cover"
                              />
                              <h4 className="text-lg font-semibold capitalize">
                                {name}
                              </h4>
                              {description && (
                                <p className="text-sm text-gray-500 first-letter:uppercase">
                                  {description}
                                </p>
                              )}
                            </Link>
                          );
                        })}
                      </ul>
                    </NavigationMenuContent>
                  </>
                )}
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
      <Button className="rounded-full uppercase">Sign In</Button>
    </header>
  );
}

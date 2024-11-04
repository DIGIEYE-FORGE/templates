"use client";
import React from "react";
import { UpbarDesktop } from "../upbar-desktop";
import { UpBarMobile } from "../upbar-mobile";
import { useMediaQuery } from "@/app/hooks/use-media-query";

function UpBar() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  if (isDesktop) {
    return <UpbarDesktop />;
  }
  return <UpBarMobile />;
}

export default UpBar;

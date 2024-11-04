"use client";
import React from "react";
import { UpbarDesktop } from "../upbar-desktop";
import { UpBarMobile } from "../upbar-mobile";
import { useMediaQuery } from "@/app/hooks/use-media-query";

function UpBar({ className }: { className?: string }) {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  if (isDesktop) {
    return <UpbarDesktop className={className} />;
  }
  return <UpBarMobile className={className} />;
}

export default UpBar;

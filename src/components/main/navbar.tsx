"use client";

import { useMediaQuery } from "src/hooks/use-media-query";
import { NavbarDesktop } from "./navbar-desktop";
import { NavbarMobile } from "./navbar-mobile";

// ------------------------------------------------------------------

export function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 40rem)");

  return isDesktop ? <NavbarDesktop /> : <NavbarMobile />;
}

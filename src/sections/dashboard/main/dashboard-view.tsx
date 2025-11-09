"use client";

import { useMediaQuery } from "src/hooks/use-media-query";
import { DashboardDesktopView } from "./dashboard-desktop-view";
import { DashboardMobileView } from "./dashboard-mobile-view";

// ------------------------------------------------------------------

export function DashboardView() {
  const isDesktop = useMediaQuery("(min-width: 40rem)");

  return isDesktop ? <DashboardDesktopView /> : <DashboardMobileView />;
}

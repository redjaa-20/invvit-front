"use client";

import { useMediaQuery } from "src/hooks/use-media-query";
import { InvoiceListDesktopView } from "./desktop/invoice-list-desktop-view";
import { InvoiceListMobileView } from "./mobile/invoice-list-mobile-view";

// ------------------------------------------------------------------

export function InvoiceListView() {
  const isDesktop = useMediaQuery("(min-width: 40rem)");

  return isDesktop ? <InvoiceListDesktopView /> : <InvoiceListMobileView />;
}

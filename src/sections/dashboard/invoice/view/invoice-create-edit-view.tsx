"use client";

import { useMediaQuery } from "src/hooks/use-media-query";
import { InvoiceListDesktopView } from "./desktop/invoice-list-desktop-view";
import { InvoiceListMobileView } from "./mobile/invoice-list-mobile-view";
import { InvoiceCreateEditMobileView } from "./mobile/invoice-create-edit-mobile-view";

// ------------------------------------------------------------------

export function InvoiceCreateEditView() {
  const isDesktop = useMediaQuery("(min-width: 40rem)");

  return isDesktop ? (
    <InvoiceListDesktopView />
  ) : (
    <InvoiceCreateEditMobileView />
  );
}

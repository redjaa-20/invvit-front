import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "src/components/ui/button";
import { InvoiceCreateEditDialog } from "./invoice-create-edit-dialog";

// ------------------------------------------------------------------

export function InvoiceListDesktopView() {
  const [openNewInvoiceDialog, setOpenNewInvoiceDialog] = useState(false);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">Invoice</h1>
        <Button onClick={() => setOpenNewInvoiceDialog(true)}>
          <PlusIcon /> Buat invoice
        </Button>
      </div>
      <div>Desktop</div>

      <InvoiceCreateEditDialog
        open={openNewInvoiceDialog}
        onOpenChange={setOpenNewInvoiceDialog}
      />
    </div>
  );
}

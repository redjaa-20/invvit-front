import {
  ChevronsUpDownIcon,
  EditIcon,
  NotebookTextIcon,
  PlusIcon,
  SearchIcon,
  Trash2Icon,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { Badge } from "src/components/ui/badge";
import { Button } from "src/components/ui/button";
import { Card, CardContent } from "src/components/ui/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "src/components/ui/drawer";
import { Separator } from "src/components/ui/separator";
import { paths } from "src/routes/paths";

// ------------------------------------------------------------------

const statuses = ["Semua", "Aktif", "Tertunda", "Kedaluarsa"];

// ------------------------------------------------------------------

const NewInvoiceButton = () => (
  <Link
    href={paths.dashboard.invoice.create}
    className="fixed bottom-22 right-5"
  >
    <Button className="h-12 w-12 rounded-full">
      <PlusIcon className="size-6" />
    </Button>
  </Link>
);

export function InvoiceListMobileView() {
  const [openFilterStatus, setOpenFilterStatus] = useState(false);
  const [filterStatus, setFilterStatus] = useState("Semua");

  const [openInvoiceDrawer, setOpenInvoiceDrawer] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState<string | null>(null);

  const [openDeleteDrawer, setOpenDeleteDrawer] = useState(false);

  const handleSelectStatus = (status: string) => {
    setFilterStatus(status);
    setOpenFilterStatus(false);
  };

  const handleOpenInvoiceDrawer = (invoiceCode: string) => {
    setSelectedInvoice(invoiceCode);
    setOpenInvoiceDrawer(true);
  };

  return (
    <div className="relative flex flex-col">
      <div className="fixed top-0 left-0 bg-background flex items-center justify-between w-full h-[60px] pl-5 pr-2">
        <h1 className="text-md font-bold">Invoice</h1>
        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full"
            onClick={() => {
              alert("Mantap");
            }}
          >
            <SearchIcon className="size-5" />
          </Button>
        </div>
      </div>
      <div className="flex flex-col mt-[60px]">
        <Button
          variant="outline"
          role="combobox"
          className="justify-between mb-10"
          onClick={() => setOpenFilterStatus(true)}
        >
          {filterStatus}
          <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>

        <Card
          className="py-4 text-sm"
          onClick={() => handleOpenInvoiceDrawer("INV2511090133")}
        >
          <CardContent>
            <div className="flex justify-between">
              <div className="space-y-2">
                <p>Boby Agy Wijaya</p>
                <p className="text-muted-foreground">INV2511090133</p>
                <p className="text-base font-semibold">Rp. 250.000</p>
              </div>
              <div>
                <Badge className="bg-green-500 text-white dark:bg-green-600">
                  Aktif
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <NewInvoiceButton />

      <Drawer open={openFilterStatus} onOpenChange={setOpenFilterStatus}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Pilih status</DrawerTitle>
          </DrawerHeader>
          <div className="p-4 space-y-2 overflow-auto">
            {statuses.map((status) => (
              <Button
                key={status}
                variant={filterStatus === status ? "default" : "outline"}
                className="w-full justify-start"
                onClick={() => handleSelectStatus(status)}
              >
                {status}
              </Button>
            ))}
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button>Tutup</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Drawer open={openInvoiceDrawer} onOpenChange={setOpenInvoiceDrawer}>
        <DrawerContent>
          <DrawerHeader className="relative">
            <DrawerTitle>{selectedInvoice || "Invoice"}</DrawerTitle>

            <DrawerClose asChild>
              <Button
                size="icon"
                variant="ghost"
                className="absolute h-fit right-2"
              >
                <XIcon className="size-5" />
              </Button>
            </DrawerClose>
          </DrawerHeader>

          <div className="p-4 space-y-3">
            <Button
              className="h-12 w-full justify-between"
              variant="secondary"
              onClick={() => toast.success("Event has been created")}
            >
              Ubah
              <EditIcon />
            </Button>

            <Button
              className="h-12 w-full justify-between"
              variant="secondary"
              onClick={() => alert("Lihat detail invoice")}
            >
              Detail
              <NotebookTextIcon />
            </Button>

            <Button
              className="h-12 w-full justify-between"
              variant="secondary"
              onClick={() => {
                setOpenDeleteDrawer(true);
                // setOpenInvoiceDrawer(false);
              }}
            >
              Hapus
              <Trash2Icon />
            </Button>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button className="h-12 rounded-full">Tutup</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Drawer open={openDeleteDrawer} onOpenChange={setOpenDeleteDrawer}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Konfirmasi</DrawerTitle>
            <DrawerDescription>
              Apakah Anda yakin ingin menghapus?
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button
              className="h-11 rounded-full"
              onClick={() => {
                setOpenDeleteDrawer(false);
                setOpenInvoiceDrawer(false);
              }}
            >
              Hapus
            </Button>
            <DrawerClose asChild>
              <Button variant="ghost" className="h-11">
                Batal
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

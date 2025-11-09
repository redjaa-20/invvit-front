import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "src/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "src/components/ui/drawer";
import { Form } from "src/components/ui/form";
import { paths } from "src/routes/paths";
import z from "zod";

// ------------------------------------------------------------------

const InvoiceSchema = z.object({
  firstName: z.string().min(1, { message: "Masukkan nama depan" }),
  lastName: z.string().min(1, { message: "Masukkan nama belakang" }),
  email: z.string().email({ message: "Masukkan email valid" }),
  phone: z.string().min(1, { message: "Masukkan nomor telepon" }),
  price: z.string().min(1, { message: "Masukkan harga" }),
  domain: z.string().min(1, { message: "Masukkan domain" }),
  template: z.string().min(1, { message: "Pilih template" }),
});

// ------------------------------------------------------------------

export function InvoiceCreateEditMobileView() {
  const router = useRouter();

  const [openSelectTemplateDrawer, setOpenSelectTemplateDrawer] =
    useState(false);

  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    price: "",
    domain: "",
    template: "",
  };

  type FormValues = z.infer<typeof InvoiceSchema>;

  const methods = useForm<FormValues>({
    resolver: zodResolver(InvoiceSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isDirty },
    setValue,
    watch,
  } = methods;

  const templateValue = watch("template");

  const onSubmit = async (data: FormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(methods.getValues());
    router.push(paths.dashboard.invoice.root);
  };

  const handleSelectTemplate = (templateName: string) => {
    setValue("template", templateName);
    setOpenSelectTemplateDrawer(false);
  };

  return (
    <div className="relative flex flex-col">
      <div className="fixed top-0 left-0 bg-background flex items-center justify-between w-full h-[60px] px-1">
        <Button variant="ghost" className="p-0" onClick={() => router.back()}>
          <ArrowLeftIcon />
          <h1 className="text-md font-bold">Invoice baru</h1>
        </Button>
        {isDirty && (
          <Button
            type="submit"
            form="invoice_form"
            size="sm"
            variant="ghost"
            className="font-semibold"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Membuat..." : "Buat"}
          </Button>
        )}
      </div>
      <div className="mt-[60px]">
        <Form
          id="invoice_form"
          methods={methods}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <Form.Input name="firstName" label="Nama depan" />
          <Form.Input name="lastName" label="Nama belakang" />
          <Form.Input name="email" type="email" label="Email" />
          <Form.Input name="phone" type="number" label="No. Telepon" />
          <Form.InputGroup
            name="price"
            type="number"
            label="Harga"
            prefix="Rp."
          />
          <Form.InputGroup
            name="domain"
            label="Domain"
            prefix="https://"
            suffix=".invvit.com"
            className="px-1"
          />
          <Form.Input
            name="template"
            label="Template"
            readOnly={true}
            onClick={() => setOpenSelectTemplateDrawer(true)}
          />
        </Form>
      </div>

      <Drawer
        open={openSelectTemplateDrawer}
        onOpenChange={setOpenSelectTemplateDrawer}
      >
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Pilih template</DrawerTitle>
          </DrawerHeader>
          <div className="p-4 space-y-2 overflow-auto">
            {[
              "Classic 1",
              "Classic 2",
              "Classic 3",
              "Modern 1",
              "Modern 2",
              "Modern 3",
              "Elegant 1",
              "Elegant 2",
              "Elegant 3",
              "Minimalist 1",
              "Minimalist 2",
              "Minimalist 3",
              "Techy",
              "Sci-Fi",
            ].map((t) => (
              <Button
                key={t}
                variant={templateValue === t ? "default" : "outline"}
                className="w-full justify-start"
                onClick={() => handleSelectTemplate(t)}
              >
                {t}
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
    </div>
  );
}

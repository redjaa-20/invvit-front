"use client";

import { Button } from "src/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "src/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "src/components/ui/form";
import { z } from "zod";

// ------------------------------------------------------------------

type InvoiceCreateEditDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const InvoiceSchema = z.object({
  firstName: z.string().min(1, { message: "Masukkan nama depan" }),
  lastName: z.string().min(1, { message: "Masukkan nama belakang" }),
});

// ------------------------------------------------------------------

export function InvoiceCreateEditDialog({
  open,
  onOpenChange,
}: InvoiceCreateEditDialogProps) {
  const defaultValues = {
    firstName: "",
    lastName: "",
  };

  type FormValues = z.infer<typeof InvoiceSchema>;

  const methods = useForm<FormValues>({
    resolver: zodResolver(InvoiceSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isDirty },
  } = methods;

  const onSubmit = async (data: FormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(methods.getValues());
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl w-full">
        <DialogHeader>
          <DialogTitle>Buat invoice</DialogTitle>
        </DialogHeader>
        <Form methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-8">
            <Form.Input
              name="firstName"
              label="Nama depan"
              placeholder="John"
            />
            <Form.Input
              name="lastName"
              label="Nama belakang"
              placeholder="Doe"
            />
            <Form.Input
              name="lastName"
              label="Nama belakang"
              placeholder="Doe"
            />
            <div className="h-8 w-full">
              {isDirty && (
                <div className="border-t w-full">
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Buat..." : "Buat"}
                  </Button>
                </div>
              )}
            </div>
          </div>
          {/* <DialogFooter>
              <DialogClose asChild>
                <Button variant="secondary">Batal</Button>
              </DialogClose>
            </DialogFooter> */}
        </Form>
      </DialogContent>
    </Dialog>
  );
}

"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
  type UseFormReturn,
} from "react-hook-form";

import { cn } from "src/lib/utils";
import { Label } from "src/components/ui/label";
import { Input } from "src/components/ui/input";

// ----------------------------------------------------------------------
// 🌟 Form Root Component (now namespace parent)
// ----------------------------------------------------------------------

interface FormProps<T extends FieldValues> {
  methods: UseFormReturn<T>;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

function Root<T extends FieldValues>({
  methods,
  onSubmit,
  children,
  className,
  id,
}: FormProps<T>) {
  return (
    <FormProvider {...methods}>
      <form
        id={id}
        onSubmit={onSubmit}
        noValidate
        autoComplete="off"
        className={cn("space-y-4", className)}
      >
        {children}
      </form>
    </FormProvider>
  );
}

// ----------------------------------------------------------------------
// ⚙️ Internal Context & Hooks (same as Shadcn)
// ----------------------------------------------------------------------

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: ControllerProps<TFieldValues, TName>
) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const FormItemContext = React.createContext<{ id: string }>({ id: "" });

function useFormField() {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
}

// ----------------------------------------------------------------------
// 🧩 Basic Shadcn Components
// ----------------------------------------------------------------------

function FormItem({ className, ...props }: React.ComponentProps<"div">) {
  const id = React.useId();
  return (
    <FormItemContext.Provider value={{ id }}>
      <div className={cn("grid gap-2", className)} {...props} />
    </FormItemContext.Provider>
  );
}

function FormLabel({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  const { error, formItemId } = useFormField();
  return (
    <Label
      htmlFor={formItemId}
      data-error={!!error}
      className={cn("data-[error=true]:text-destructive", className)}
      {...props}
    />
  );
}

function FormControl({ ...props }: React.ComponentProps<typeof Slot>) {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();
  return (
    <Slot
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
}

function FormDescription({ className, ...props }: React.ComponentProps<"p">) {
  const { formDescriptionId } = useFormField();
  return (
    <p
      id={formDescriptionId}
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function FormMessage({ className, ...props }: React.ComponentProps<"p">) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : props.children;
  if (!body) return null;
  return (
    <p
      id={formMessageId}
      className={cn("text-destructive text-xs", className)}
      {...props}
    >
      {body}
    </p>
  );
}

// ----------------------------------------------------------------------
// ✨ New Shorthand Components (Input, Select, etc.)
// ----------------------------------------------------------------------

interface FormInputProps<TFieldValues extends FieldValues> {
  name: FieldPath<TFieldValues>;
  label?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  readOnly?: boolean;
}

function FormInput<TFieldValues extends FieldValues>({
  name,
  label,
  placeholder,
  type = "text",
  className,
  readOnly = false,
  onClick,
}: FormInputProps<TFieldValues> &
  React.ComponentProps<"input"> & {
    onClick?: React.MouseEventHandler<HTMLInputElement>;
  }) {
  const { control } = useFormContext<TFieldValues>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input
              {...field}
              type={type}
              placeholder={placeholder}
              readOnly={readOnly}
              onClick={onClick}
              className={className}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function FormInputGroup<TFieldValues extends FieldValues>({
  name,
  label,
  prefix,
  suffix,
  placeholder,
  type = "text",
  className,
}: {
  name: FieldPath<TFieldValues>;
  label?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  placeholder?: string;
  type?: string;
  className?: string;
}) {
  const { control } = useFormContext<TFieldValues>();

  return (
    <Form.Field
      control={control}
      name={name}
      render={({ field }) => (
        <Form.Item>
          {label && <Form.Label>{label}</Form.Label>}
          <Form.Control>
            <div
              className="flex items-center rounded-md border focus-within:border-foreground dark:bg-input/30 
        aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
            >
              {prefix && (
                <span className="pl-3 text-sm text-muted-foreground font-medium">
                  {prefix}
                </span>
              )}
              <Input
                {...field}
                type={type}
                placeholder={placeholder}
                className={cn(
                  "dark:bg-input/0 px-2 flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0",
                  className
                )}
              />
              {suffix && (
                <span className="pr-3 text-sm text-muted-foreground font-medium">
                  {suffix}
                </span>
              )}
            </div>
          </Form.Control>
          <Form.Message />
        </Form.Item>
      )}
    />
  );
}

// ----------------------------------------------------------------------
// 🧠 Combine all exports under Form namespace
// ----------------------------------------------------------------------

export const Form = Object.assign(Root, {
  Field: FormField,
  Item: FormItem,
  Label: FormLabel,
  Control: FormControl,
  Description: FormDescription,
  Message: FormMessage,
  Input: FormInput,
  InputGroup: FormInputGroup,
});

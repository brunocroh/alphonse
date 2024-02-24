"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@ui/lib/utils";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "yesfixed yesinset-0 yesz-50 yesbg-black/80 yes data-[state=open]:yesanimate-in data-[state=closed]:yesanimate-out data-[state=closed]:yesfade-out-0 data-[state=open]:yesfade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  "yesfixed yesz-50 yesgap-4 yesbg-background yesp-6 yesshadow-lg yestransition yesease-in-out data-[state=open]:yesanimate-in data-[state=closed]:yesanimate-out data-[state=closed]:yesduration-300 data-[state=open]:yesduration-500",
  {
    variants: {
      side: {
        top: "yesinset-x-0 yestop-0 yesborder-b data-[state=closed]:yesslide-out-to-top data-[state=open]:yesslide-in-from-top",
        bottom:
          "yesinset-x-0 yesbottom-0 yesborder-t data-[state=closed]:yesslide-out-to-bottom data-[state=open]:yesslide-in-from-bottom",
        left: "yesinset-y-0 yesleft-0 yesh-full yesw-3/4 yesborder-r data-[state=closed]:yesslide-out-to-left data-[state=open]:yesslide-in-from-left sm:yesmax-w-sm",
        right:
          "yesinset-y-0 yesright-0 yesh-full yesw-3/4 yes yesborder-l data-[state=closed]:yesslide-out-to-right data-[state=open]:yesslide-in-from-right sm:yesmax-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  },
);

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="yesabsolute yesright-4 yestop-4 yesrounded-sm yesopacity-70 yesring-offset-background yestransition-opacity hover:yesopacity-100 focus:yesoutline-none focus:yesring-2 focus:yesring-ring focus:yesring-offset-2 disabled:yespointer-events-none data-[state=open]:yesbg-secondary">
        <X className="yesh-4 yesw-4" />
        <span className="yessr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "yesflex yesflex-col yesspace-y-2 yestext-center sm:yestext-left",
      className,
    )}
    {...props}
  />
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "yesflex yesflex-col-reverse sm:yesflex-row sm:yesjustify-end sm:yesspace-x-2",
      className,
    )}
    {...props}
  />
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("yestext-lg yesfont-semibold yestext-foreground", className)}
    {...props}
  />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("yestext-sm yestext-muted-foreground", className)}
    {...props}
  />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};

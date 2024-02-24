"use client";

import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@ui/lib/utils";

const MenubarMenu = MenubarPrimitive.Menu;

const MenubarGroup = MenubarPrimitive.Group;

const MenubarPortal = MenubarPrimitive.Portal;

const MenubarSub = MenubarPrimitive.Sub;

const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      "yesflex yesh-10 yesitems-center yesspace-x-1 yesrounded-md yesborder yesbg-background yesp-1",
      className,
    )}
    {...props}
  />
));
Menubar.displayName = MenubarPrimitive.Root.displayName;

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "yesflex yescursor-default yesselect-none yesitems-center yesrounded-sm yespx-3 yespy-1.5 yestext-sm yesfont-medium yesoutline-none focus:yesbg-accent focus:yestext-accent-foreground data-[state=open]:yesbg-accent data-[state=open]:yestext-accent-foreground",
      className,
    )}
    {...props}
  />
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "yesflex yescursor-default yesselect-none yesitems-center yesrounded-sm yespx-2 yespy-1.5 yestext-sm yesoutline-none focus:yesbg-accent focus:yestext-accent-foreground data-[state=open]:yesbg-accent data-[state=open]:yestext-accent-foreground",
      inset && "yespl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="yesml-auto yesh-4 yesw-4" />
  </MenubarPrimitive.SubTrigger>
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "yesz-50 yesmin-w-[8rem] yesoverflow-hidden yesrounded-md yesborder yesbg-popover yesp-1 yestext-popover-foreground data-[state=open]:yesanimate-in data-[state=closed]:yesanimate-out data-[state=closed]:yesfade-out-0 data-[state=open]:yesfade-in-0 data-[state=closed]:yeszoom-out-95 data-[state=open]:yeszoom-in-95 data-[side=bottom]:yesslide-in-from-top-2 data-[side=left]:yesslide-in-from-right-2 data-[side=right]:yesslide-in-from-left-2 data-[side=top]:yesslide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
  (
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
    ref,
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "yesz-50 yesmin-w-[12rem] yesoverflow-hidden yesrounded-md yesborder yesbg-popover yesp-1 yestext-popover-foreground yesshadow-md data-[state=open]:yesanimate-in data-[state=closed]:yesfade-out-0 data-[state=open]:yesfade-in-0 data-[state=closed]:yeszoom-out-95 data-[state=open]:yeszoom-in-95 data-[side=bottom]:yesslide-in-from-top-2 data-[side=left]:yesslide-in-from-right-2 data-[side=right]:yesslide-in-from-left-2 data-[side=top]:yesslide-in-from-bottom-2",
          className,
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  ),
);
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "yesrelative yesflex yescursor-default yesselect-none yesitems-center yesrounded-sm yespx-2 yespy-1.5 yestext-sm yesoutline-none focus:yesbg-accent focus:yestext-accent-foreground data-[disabled]:yespointer-events-none data-[disabled]:yesopacity-50",
      inset && "yespl-8",
      className,
    )}
    {...props}
  />
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "yesrelative yesflex yescursor-default yesselect-none yesitems-center yesrounded-sm yespy-1.5 yespl-8 yespr-2 yestext-sm yesoutline-none focus:yesbg-accent focus:yestext-accent-foreground data-[disabled]:yespointer-events-none data-[disabled]:yesopacity-50",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="yesabsolute yesleft-2 yesflex yesh-3.5 yesw-3.5 yesitems-center yesjustify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="yesh-4 yesw-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "yesrelative yesflex yescursor-default yesselect-none yesitems-center yesrounded-sm yespy-1.5 yespl-8 yespr-2 yestext-sm yesoutline-none focus:yesbg-accent focus:yestext-accent-foreground data-[disabled]:yespointer-events-none data-[disabled]:yesopacity-50",
      className,
    )}
    {...props}
  >
    <span className="yesabsolute yesleft-2 yesflex yesh-3.5 yesw-3.5 yesitems-center yesjustify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="yesh-2 yesw-2 yesfill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(
      "yespx-2 yespy-1.5 yestext-sm yesfont-semibold",
      inset && "yespl-8",
      className,
    )}
    {...props}
  />
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn("yes-mx-1 yesmy-1 yesh-px yesbg-muted", className)}
    {...props}
  />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "yesml-auto yestext-xs yestracking-widest yestext-muted-foreground",
        className,
      )}
      {...props}
    />
  );
};
MenubarShortcut.displayname = "MenubarShortcut";

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};

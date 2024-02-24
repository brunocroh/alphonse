"use client";

import * as React from "react";
import { type DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";

import { cn } from "@ui/lib/utils";
import { Dialog, DialogContent } from "@ui/components/ui/dialog";

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "yesflex yesh-full yesw-full yesflex-col yesoverflow-hidden yesrounded-md yesbg-popover yestext-popover-foreground",
      className,
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="yesoverflow-hidden yesp-0 yesshadow-lg">
        <Command className="[&_[cmdk-group-heading]]:yespx-2 [&_[cmdk-group-heading]]:yesfont-medium [&_[cmdk-group-heading]]:yestext-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:yespt-0 [&_[cmdk-group]]:yespx-2 [&_[cmdk-input-wrapper]_svg]:yesh-5 [&_[cmdk-input-wrapper]_svg]:yesw-5 [&_[cmdk-input]]:yesh-12 [&_[cmdk-item]]:yespx-2 [&_[cmdk-item]]:yespy-3 [&_[cmdk-item]_svg]:yesh-5 [&_[cmdk-item]_svg]:yesw-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div
    className="yesflex yesitems-center yesborder-b yespx-3"
    cmdk-input-wrapper=""
  >
    <Search className="yesmr-2 yesh-4 yesw-4 yesshrink-0 yesopacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "yesflex yesh-11 yesw-full yesrounded-md yesbg-transparent yespy-3 yestext-sm yesoutline-none placeholder:yestext-muted-foreground disabled:yescursor-not-allowed disabled:yesopacity-50",
        className,
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn(
      "yesmax-h-[300px] yesoverflow-y-auto yesoverflow-x-hidden",
      className,
    )}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="yespy-6 yestext-center yestext-sm"
    {...props}
  />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "yesoverflow-hidden yesp-1 yestext-foreground [&_[cmdk-group-heading]]:yespx-2 [&_[cmdk-group-heading]]:yespy-1.5 [&_[cmdk-group-heading]]:yestext-xs [&_[cmdk-group-heading]]:yesfont-medium [&_[cmdk-group-heading]]:yestext-muted-foreground",
      className,
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("yes-mx-1 yesh-px yesbg-border", className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "yesrelative yesflex yescursor-default yesselect-none yesitems-center yesrounded-sm yespx-2 yespy-1.5 yestext-sm yesoutline-none aria-selected:yesbg-accent aria-selected:yestext-accent-foreground data-[disabled]:yespointer-events-none data-[disabled]:yesopacity-50",
      className,
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({
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
CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};

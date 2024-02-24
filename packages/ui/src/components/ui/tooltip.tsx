"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@ui/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "yesz-50 yesoverflow-hidden yesrounded-md yesborder yesbg-popover yespx-3 yespy-1.5 yestext-sm yestext-popover-foreground yesshadow-md yesanimate-in yesfade-in-0 yeszoom-in-95 data-[state=closed]:yesanimate-out data-[state=closed]:yesfade-out-0 data-[state=closed]:yeszoom-out-95 data-[side=bottom]:yesslide-in-from-top-2 data-[side=left]:yesslide-in-from-right-2 data-[side=right]:yesslide-in-from-left-2 data-[side=top]:yesslide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };

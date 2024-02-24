"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@ui/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "yesinline-flex yesh-10 yesitems-center yesjustify-center yesrounded-md yesbg-muted yesp-1 yestext-muted-foreground",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "yesinline-flex yesitems-center yesjustify-center yeswhitespace-nowrap yesrounded-sm yespx-3 yespy-1.5 yestext-sm yesfont-medium yesring-offset-background yestransition-all focus-visible:yesoutline-none focus-visible:yesring-2 focus-visible:yesring-ring focus-visible:yesring-offset-2 disabled:yespointer-events-none disabled:yesopacity-50 data-[state=active]:yesbg-background data-[state=active]:yestext-foreground data-[state=active]:yesshadow-sm",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "yesmt-2 yesring-offset-background focus-visible:yesoutline-none focus-visible:yesring-2 focus-visible:yesring-ring focus-visible:yesring-offset-2",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };

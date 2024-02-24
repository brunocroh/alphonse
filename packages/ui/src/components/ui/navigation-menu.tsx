import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";

import { cn } from "@ui/lib/utils";

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "yesrelative yesz-10 yesflex yesmax-w-max yesflex-1 yesitems-center yesjustify-center",
      className,
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "yesgroup yesflex yesflex-1 yeslist-none yesitems-center yesjustify-center yesspace-x-1",
      className,
    )}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
  "yesgroup yesinline-flex yesh-10 yesw-max yesitems-center yesjustify-center yesrounded-md yesbg-background yespx-4 yespy-2 yestext-sm yesfont-medium yestransition-colors hover:yesbg-accent hover:yestext-accent-foreground focus:yesbg-accent focus:yestext-accent-foreground focus:yesoutline-none disabled:yespointer-events-none disabled:yesopacity-50 data-[active]:yesbg-accent/50 data-[state=open]:yesbg-accent/50",
);

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "yesgroup", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="yesrelative yestop-[1px] yesml-1 yesh-3 yesw-3 yestransition yesduration-200 group-data-[state=open]:yesrotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "yesleft-0 yestop-0 yesw-full data-[motion^=from-]:yesanimate-in data-[motion^=to-]:yesanimate-out data-[motion^=from-]:yesfade-in data-[motion^=to-]:yesfade-out data-[motion=from-end]:yesslide-in-from-right-52 data-[motion=from-start]:yesslide-in-from-left-52 data-[motion=to-end]:yesslide-out-to-right-52 data-[motion=to-start]:yesslide-out-to-left-52 md:yesabsolute md:yesw-auto yes",
      className,
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div
    className={cn(
      "yesabsolute yesleft-0 yestop-full yesflex yesjustify-center",
    )}
  >
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "yesorigin-top-center yesrelative yesmt-1.5 yesh-[var(--radix-navigation-menu-viewport-height)] yesw-full yesoverflow-hidden yesrounded-md yesborder yesbg-popover yestext-popover-foreground yesshadow-lg data-[state=open]:yesanimate-in data-[state=closed]:yesanimate-out data-[state=closed]:yeszoom-out-95 data-[state=open]:yeszoom-in-90 md:yesw-[var(--radix-navigation-menu-viewport-width)]",
        className,
      )}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "yestop-full yesz-[1] yesflex yesh-1.5 yesitems-end yesjustify-center yesoverflow-hidden data-[state=visible]:yesanimate-in data-[state=hidden]:yesanimate-out data-[state=hidden]:yesfade-out data-[state=visible]:yesfade-in",
      className,
    )}
    {...props}
  >
    <div className="yesrelative yestop-[60%] yesh-2 yesw-2 yesrotate-45 yesrounded-tl-sm yesbg-border yesshadow-md" />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName;

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};

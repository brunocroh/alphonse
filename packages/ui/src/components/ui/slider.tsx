"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@ui/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "yesrelative yesflex yesw-full yestouch-none yesselect-none yesitems-center",
      className,
    )}
    {...props}
  >
    <SliderPrimitive.Track className="yesrelative yesh-2 yesw-full yesgrow yesoverflow-hidden yesrounded-full yesbg-secondary">
      <SliderPrimitive.Range className="yesabsolute yesh-full yesbg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="yesblock yesh-5 yesw-5 yesrounded-full yesborder-2 yesborder-primary yesbg-background yesring-offset-background yestransition-colors focus-visible:yesoutline-none focus-visible:yesring-2 focus-visible:yesring-ring focus-visible:yesring-offset-2 disabled:yespointer-events-none disabled:yesopacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };

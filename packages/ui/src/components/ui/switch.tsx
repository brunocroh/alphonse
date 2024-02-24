"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@ui/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "yespeer yesinline-flex yesh-6 yesw-11 yesshrink-0 yescursor-pointer yesitems-center yesrounded-full yesborder-2 yesborder-transparent yestransition-colors focus-visible:yesoutline-none focus-visible:yesring-2 focus-visible:yesring-ring focus-visible:yesring-offset-2 focus-visible:yesring-offset-background disabled:yescursor-not-allowed disabled:yesopacity-50 data-[state=checked]:yesbg-primary data-[state=unchecked]:yesbg-input",
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "yespointer-events-none yesblock yesh-5 yesw-5 yesrounded-full yesbg-background yesshadow-lg yesring-0 yestransition-transform data-[state=checked]:yestranslate-x-5 data-[state=unchecked]:yestranslate-x-0",
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };

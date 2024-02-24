import * as React from "react";

import { cn } from "@ui/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "yesflex yesh-10 yesw-full yesrounded-md yesborder yesborder-input yesbg-background yespx-3 yespy-2 yestext-sm yesring-offset-background file:yesborder-0 file:yesbg-transparent file:yestext-sm file:yesfont-medium placeholder:yestext-muted-foreground focus-visible:yesoutline-none focus-visible:yesring-2 focus-visible:yesring-ring focus-visible:yesring-offset-2 disabled:yescursor-not-allowed disabled:yesopacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };

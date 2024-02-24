import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@ui/lib/utils";

const alertVariants = cva(
  "yesrelative yesw-full yesrounded-lg yesborder yesp-4 [&>svg~*]:yespl-7 [&>svg+div]:yestranslate-y-[-3px] [&>svg]:yesabsolute [&>svg]:yesleft-4 [&>svg]:yestop-4 [&>svg]:yestext-foreground",
  {
    variants: {
      variant: {
        default: "yesbg-background yestext-foreground",
        destructive:
          "yesborder-destructive/50 yestext-destructive dark:yesborder-destructive [&>svg]:yestext-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(
      "yesmb-1 yesfont-medium yesleading-none yestracking-tight",
      className,
    )}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("yestext-sm [&_p]:yesleading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };

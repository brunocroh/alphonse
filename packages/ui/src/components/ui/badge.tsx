import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@ui/lib/utils";

const badgeVariants = cva(
  "yesinline-flex yesitems-center yesrounded-full yesborder yespx-2.5 yespy-0.5 yestext-xs yesfont-semibold yestransition-colors focus:yesoutline-none focus:yesring-2 focus:yesring-ring focus:yesring-offset-2",
  {
    variants: {
      variant: {
        default:
          "yesborder-transparent yesbg-primary yestext-primary-foreground hover:yesbg-primary/80",
        secondary:
          "yesborder-transparent yesbg-secondary yestext-secondary-foreground hover:yesbg-secondary/80",
        destructive:
          "yesborder-transparent yesbg-destructive yestext-destructive-foreground hover:yesbg-destructive/80",
        outline: "yestext-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };

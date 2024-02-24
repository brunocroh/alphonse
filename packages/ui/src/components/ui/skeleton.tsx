import { cn } from "@ui/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("yesanimate-pulse yesrounded-md yesbg-muted", className)}
      {...props}
    />
  );
}

export { Skeleton };

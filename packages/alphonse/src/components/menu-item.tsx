import { Button, cn } from "@alphonse/ui";

type MenuItemProps = {
  isActive?: boolean;
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
};

export function MenuItem({
  isActive,
  onClick,
  className,
  children,
  ...props
}: MenuItemProps) {
  return (
    <Button
      variant="ghost"
      onClick={onClick}
      aria-checked={isActive}
      className={cn(
        "aria-checked:bg-secondary aria-checked:text-primary hover:text-primary  h-8 rounded-none p-2 first:rounded-l-md last:rounded-r-md",
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
}

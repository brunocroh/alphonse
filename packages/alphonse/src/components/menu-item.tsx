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
        "p-2 h-8 rounded-none aria-checked:bg-secondary first:rounded-l-md last:rounded-r-md aria-checked:text-primary hover:text-primary",
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
}

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
      aria-checked={isActive}
      onClick={onClick}
      className={cn(
        isActive ? "text-primary hover:text-primary" : "",
        "p-2 h-8 aria-checked:text-primary hover:text-primary",
      )}
      {...props}
    >
      {children}
    </Button>
  );
}

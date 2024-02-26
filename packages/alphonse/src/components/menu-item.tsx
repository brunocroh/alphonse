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
      className={cn(
        isActive ? "text-destructive hover:text-destructive" : "",
        "p-2 h-8",
      )}
      {...props}
    >
      {children}
    </Button>
  );
}

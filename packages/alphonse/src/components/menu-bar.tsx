import { Menubar, MenubarMenu } from "@alphonse/ui";

export function MenuBar({ children }: { children: React.ReactNode }) {
  return (
    <Menubar className="space-x-0 p-0 h-8 shadow-lg">
      <MenubarMenu>{children}</MenubarMenu>
    </Menubar>
  );
}

import { Menubar, MenubarMenu } from "@alphonse/ui";

export function MenuBar({ children }: { children: React.ReactNode }) {
  return (
    <Menubar className="space-x-0 py-4 px-0 h-8 shadow-lg border-input">
      <MenubarMenu>{children}</MenubarMenu>
    </Menubar>
  );
}

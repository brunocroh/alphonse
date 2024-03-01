import { Menubar, MenubarMenu } from "@alphonse/ui";

export function MenuBar({ children }: { children: React.ReactNode }) {
  return (
    <Menubar className="border-input h-8 space-x-0 px-0 py-4 shadow-lg">
      <MenubarMenu>{children}</MenubarMenu>
    </Menubar>
  );
}

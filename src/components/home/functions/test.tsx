import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";

export function MenubarDemo() {
  return (
    <Menubar className="justify-evenly">
      <MenubarMenu>
        <MenubarTrigger>Copy</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Link</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Name</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Open Tab</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>v1.70os.top</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>v1.chat1v1.cn</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>v1.chatbbq.cn</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>v1.web1v1.cn</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>v2.chatbbq.cn</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>v2.henbaidu.com</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>v6.nm1v1.cn</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>v9.webttt.cn</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      {/* <MenubarMenu>
        <MenubarTrigger>...</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>A</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>B</MenubarItem>
        </MenubarContent>
      </MenubarMenu> */}
    </Menubar>
  );
}

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

export default function MainFunctions() {
  return (
    <div className="">
      <Menubar className="justify-evenly">
        <MenubarMenu>
          <MenubarTrigger>Block</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Permanent <MenubarShortcut>Ctrl + B</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>1 Hour</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>1 Day</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>3 Day</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Copy</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Link</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Name</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        {/* <MenubarMenu>
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
        </MenubarMenu> */}
        <MenubarMenu>
          <MenubarTrigger>Quick Phrases</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>A</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>B</MenubarItem>
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
      {/* <Button>Block</Button>
      <Button>Copy link</Button>
      // <Ad />
      <div className="flex items-center space-x-2">
        <Switch className="" id="stop-if-no-block" />
        <Label htmlFor="stop-if-no-block">Stop if No Block</Label>
      </div> */}
    </div>
  );
}

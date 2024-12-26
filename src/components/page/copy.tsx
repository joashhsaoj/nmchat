import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Copy() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Copy Link or Name" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="grid grid-cols-2">
          <SelectLabel className="col-span-2">Link</SelectLabel>
          <SelectItem value="v1.70os.top">v1.70os.top</SelectItem>
          <SelectItem value="v1.chat1v1.cn">v1.chat1v1.cn</SelectItem>
          <SelectItem value="v1.chatbbq.cn">v1.chatbbq.cn</SelectItem>
          <SelectItem value="v1.web1v1.cn">v1.web1v1.cn</SelectItem>
          <SelectItem value="v2.chatbbq.cn">v2.chatbbq.cn</SelectItem>
          <SelectItem value="v2.henbaidu.com">v2.henbaidu.com</SelectItem>
          <SelectItem value="v6.nm1v1.cn">v6.nm1v1.cn</SelectItem>
          <SelectItem value="v9.webttt.cn">v9.webttt.cn</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Name</SelectLabel>
          <SelectItem value="name">name</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

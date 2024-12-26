import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
//   SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// const frameworks = [
//   {
//     value: "next.js",
//     label: "Next.js",
//   },
//   {
//     value: "sveltekit",
//     label: "SvelteKit",
//   },
//   {
//     value: "nuxt.js",
//     label: "Nuxt.js",
//   },
//   {
//     value: "remix",
//     label: "Remix",
//   },
//   {
//     value: "astro",
//     label: "Astro",
//   },
// ];

export default function Send() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Send" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="grid grid-cols-4">
          <SelectItem value="1">1</SelectItem>
          <SelectItem value="2">2</SelectItem>
          <SelectItem value="3">3</SelectItem>
          <SelectItem value="4">4</SelectItem>
          <SelectItem value="5">5</SelectItem>
          <SelectItem value="6">6</SelectItem>
          <SelectItem value="7">7</SelectItem>
          <SelectItem value="8">8</SelectItem>
          <SelectItem value="9">9</SelectItem>
          <SelectItem value="10">10</SelectItem>
          <SelectItem value="11">11</SelectItem>
          <SelectItem value="12">12</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

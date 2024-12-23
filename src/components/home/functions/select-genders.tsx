"use client";

import * as React from "react";
import { ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Label } from "@/components/ui/label";

export function SelectGenders() {
  const [isOpen, setIsOpen] = React.useState(false);
  // const [isChecked, setIsChecked] = React.useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">Select Genders to Block</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="flex rounded-md border p-4 justify-between">
          {/* <p className="text-sm font-medium leading-none">Genders to Block:</p> */}
          <div className="flex items-center space-x-2">
            <Checkbox defaultChecked id="male" />
            <Label htmlFor="male">Male</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="female" />
            <Label htmlFor="female">Female</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox defaultChecked id="no" />
            <Label htmlFor="unknow">Unknown</Label>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

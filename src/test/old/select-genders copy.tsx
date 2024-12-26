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

  const [maleIsChecked, setMaleIsChecked] = React.useState(true);
  const [femaleIsChecked, setFemaleIsChecked] = React.useState(false);
  const [unknownIsChecked, setUnknownIsChecked] = React.useState(true);

  const handleMaleCheckboxChange = () => {
    window.parent.postMessage(
      { state: maleIsChecked ? "M-Y-C" : "M-N-C" },
      "*"
    );
    setMaleIsChecked(!maleIsChecked);
  };
  const handleFemaleCheckboxChange = () => {
    window.parent.postMessage(
      { state: femaleIsChecked ? "F-Y-C" : "F-N-C" },
      "*"
    );
    setFemaleIsChecked(!femaleIsChecked);
  };
  const handleUnknownCheckboxChange = () => {
    window.parent.postMessage(
      { state: unknownIsChecked ? "U-Y-C" : "U-N-C" },
      "*"
    );
    setUnknownIsChecked(!unknownIsChecked);
  };

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="flex items-center justify-between px-2">
        <h4 className="text-sm font-semibold">Select Genders to Block</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent>
        <div className="flex p-2 justify-between">
          {/* <p className="text-sm font-medium leading-none">Genders to Block:</p> */}
          <div className="flex items-center space-x-2">
            <Checkbox
              defaultChecked={maleIsChecked}
              id="male"
              onCheckedChange={handleMaleCheckboxChange}
            />
            <Label htmlFor="male">Male</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              defaultChecked={femaleIsChecked}
              id="female"
              onCheckedChange={handleFemaleCheckboxChange}
            />
            <Label htmlFor="female">Female</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              defaultChecked={unknownIsChecked}
              id="unknown"
              onCheckedChange={handleUnknownCheckboxChange}
            />
            <Label htmlFor="unknown">Unknown</Label>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
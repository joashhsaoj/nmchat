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

type GendersChecked = Record<"male" | "female" | "unknown", boolean>;

export function SelectGenders() {
  const [isOpen, setIsOpen] = React.useState(false);

  const genders = [
    { id: "male", label: "Male" },
    { id: "female", label: "Female" },
    { id: "unknown", label: "Unknown" },
  ] as const;

  const [gendersChecked, setGendersChecked] = React.useState<GendersChecked>({
    male: true,
    female: false,
    unknown: true,
  });

  const handleCheckedChange = (gender: keyof GendersChecked) => {
    setGendersChecked((prev) => ({ ...prev, [gender]: !prev[gender] }));
    window.parent.postMessage(
      {
        male: gendersChecked.male,
        female: gendersChecked.female,
        unknown: gendersChecked.unknown,
      },
      "*"
    );
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
          {genders.map(({ id, label }) => (
            <div key={id} className="flex items-center space-x-2">
              <Checkbox
                checked={gendersChecked[id]}
                id={id}
                onCheckedChange={() => handleCheckedChange(id)}
              />
              <Label htmlFor={id}>{label}</Label>
            </div>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

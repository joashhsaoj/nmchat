import { Switch } from "@/components/ui/switch";
import { MenubarDemo } from "./test";
import GenderSelect from "../settings/gender-select";

export default function SecondaryFunctions() {
  return (
    // margin and padding need to
    <div className="rounded-md border p-1 space-y-4">
      {/* <div className="flex items-center justify-between">
        <p className="text-sm font-medium leading-none pl-3">Mute</p>
        <Switch />
      </div> */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium leading-none pl-3">
          Pause when no block.
        </p>
        <Switch />
      </div>
      {/* adding... */}
    </div>
  );
}

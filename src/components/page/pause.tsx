import { Switch } from "@/components/ui/switch";

export default function SecondaryFunctions() {
  return (
    // margin and padding need to
      <div className="flex items-center justify-between p-2">
        <p className="text-sm font-medium leading-none">
          Pause when not Block.
        </p>
        <Switch />
      </div>
  );
}

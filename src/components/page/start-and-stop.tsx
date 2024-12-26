import { CirclePlay } from "lucide-react";
import { Button } from "../ui/button";

export default function StartAndStop() {
  const handleButtonClick = () => {
    window.parent.postMessage(
      { type: "TRIGGER_FUNCTION", message: "Button clicked!" },
      "*"
    );
  };

  return (
    <Button className="w-full" onClick={handleButtonClick}>
      <CirclePlay /> Start Matching
    </Button>
  );
}

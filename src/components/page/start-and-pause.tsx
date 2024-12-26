import { useState } from "react";

import { CirclePlay, CirclePause } from "lucide-react";
import { Button } from "../ui/button";

export default function StartAndStop() {
  const [isStarted, setIsStarted] = useState(false);

  const handleButtonClick = () => {
    setIsStarted(!isStarted);
    window.parent.postMessage({ type: isStarted ? "START" : "PAUSE" }, "*");
    
    // window.parent.postMessage(
    //   { type: "TRIGGER_FUNCTION", message: "Button clicked!" },
    //   "*"
    // );
  };

  return (
    <Button
      className="w-full"
      onClick={handleButtonClick}
      variant={isStarted ? "destructive" : "default"}
    >
      {isStarted ? (
        <>
          <CirclePause /> Pause
        </>
      ) : (
        <>
          <CirclePlay /> Start
        </>
      )}
    </Button>
  );
}

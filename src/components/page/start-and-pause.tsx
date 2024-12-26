import { useState } from "react";

import { CirclePlay, CirclePause } from "lucide-react";
import { Button } from "../ui/button";

export default function StartAndStop() {
  const [isStarted, setIsStarted] = useState(false);

  const handleButtonClick = () => {
    window.parent.postMessage({ state: isStarted ? "START" : "PAUSE" }, "*");
    setIsStarted(!isStarted);
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

import { useEffect, useState } from "react";

import { CirclePlay, CirclePause } from "lucide-react";
import { Button } from "../ui/button";

export default function StartAndStop() {
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    window.parent.postMessage({ state: isStarted ? "START" : "PAUSE" }, "*");
  }, [isStarted]);

  return (
    <Button
      className="w-full"
      onClick={() => setIsStarted(!isStarted)}
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

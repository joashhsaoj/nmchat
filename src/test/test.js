import { useState } from "react";
import { CirclePlay, StopCircle } from "lucide-react";
import { Button } from "../ui/button";

export default function StartAndStop() {
  const [isStarted, setIsStarted] = useState(false);

  const handleButtonClick = () => {
    // 向父窗口发送消息
    window.parent.postMessage(
      { type: "TRIGGER_FUNCTION", message: isStarted ? "Stop button clicked!" : "Start button clicked!" },
      "*"
    );
    // 切换按钮状态
    setIsStarted(!isStarted);
  };

  return (
    <Button
      className="w-full"
      onClick={handleButtonClick}
      variant={isStarted ? "destructive" : "default"}
    >
      {isStarted ? <StopCircle /> : <CirclePlay />} {isStarted ? "Stop Matching" : "Start Matching"}
    </Button>
  );
}

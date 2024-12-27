"use client";

import { useEffect } from "react";

function ClientComponent() {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (
        event.origin ===
        "http://v1.chat1v1.cn/randomdeskrynew26h3km.html?v=26h3km"
      ) {
        const { name, gender, age, location } = event.data;
        if (event.data) {
          // 发送请求到 API 路由
          fetch("/api/test", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: name,
              gender: gender,
              age: age,
              location: location,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("Data added:", data);
            })
            .catch((error) => {
              console.error("Error adding data:", error);
            });
        }
      }
    };

    window.addEventListener("message", handleMessage);

    // 清理事件监听器
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return <div>Client Component</div>;
}

export default ClientComponent;

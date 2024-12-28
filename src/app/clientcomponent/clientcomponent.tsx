"use client";

import { useEffect } from "react";

function ClientComponent() {
  useEffect(() => {
    // const handleMessage = ;

    window.addEventListener("message", (event: MessageEvent) => {
      if (event.origin === "http://v1.web1v1.cn") {
        window.console.log("Origin matched");

        if (event.data) {
          const { name, gender, age, location } = event.data;
          console.log("Sending data:", { name, gender, age, location });

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
            .then((response) => {
              console.log("Response status:", response.status);
              // 检查响应状态
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
              // 解析 JSON
              return response.json();
            })
            .then((data) => {
              console.log("Data added:", data);
            })
            .catch((error) => {
              console.error("Error adding data:", error);
            });
        }
      }
    });

    // // 清理事件监听器
    // return () => {
    //   window.removeEventListener("message", handleMessage);
    // };
  }, []);
  return <div>Client Component</div>;
}

export default ClientComponent;

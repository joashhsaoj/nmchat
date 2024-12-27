"use client";

import { useState, useEffect } from "react";

function ClientComponent() {
  const [userData, setUserData] = useState({
    name: "",
    gender: "",
    age: "",
    location: "",
  });

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin === "http://v1.web1v1.cn/randomdeskrynew.html") {
        const { name, gender, age, location } = event.data;
        if (event.data) {
          // 更新状态
          setUserData({ name, gender, age, location });

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

  return (
    <div>
      <h1>Client Component</h1>
      <p>Name: {userData.name}</p>
      <p>Gender: {userData.gender}</p>
      <p>Age: {userData.age}</p>
      <p>Location: {userData.location}</p>
    </div>
  );
}

export default ClientComponent;

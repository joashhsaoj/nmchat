import { useEffect } from "react";

function ClientComponent() {
  useEffect(() => {
    // const handleMessage = ;

    window.addEventListener("message", (event: MessageEvent) => {
      if (event.origin === "http://v1.web1v1.cn") {
        const { name, gender, age, location } = event.data;
        if (event.data) {
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
          console.log(name, gender, age, location);
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

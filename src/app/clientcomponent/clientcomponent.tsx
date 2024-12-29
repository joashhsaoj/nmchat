import { useEffect } from "react";

import { createClient } from "@/utils/supabase/client";

function ClientComponent() {
  useEffect(() => {
    // const handleMessage = ;

    window.addEventListener("message", async (event: MessageEvent) => {
      if (event.origin === "http://v1.web1v1.cn") {
        const { name, gender, age, location } = event.data;
        if (event.data) {
          const supabase = await createClient();
          const { data, error } = await supabase
            .from("test")
            .insert([{ name, gender, age, location }]);
          if (error) {
            console.error("Error adding data:", error);
          } else {
            console.log("Data added:", data);
          }
        }
      }
    });
    // // 清理事件监听器
    // return () => {
    //   window.removeEventListener("message", handleMessage);
    // };
  }, []);
  return <></>;
}

export default ClientComponent;

window.addEventListener(
  "message",
  function (event) {
    // 确认消息来源的安全性，例如检查 origin
    if (event.origin === "https://你的网站.com") {
      // 获取并处理 gendersChecked 信息
      const gendersChecked = event.data.genders;

      console.log("Received gendersChecked:", gendersChecked);

      // 示例操作
      if (gendersChecked) {
        const { male, female, unknown } = gendersChecked;
        console.log("Male:", male);
        console.log("Female:", female);
        console.log("Unknown:", unknown);

        // 在这里你可以根据 gendersChecked 的值执行相应的操作
      }
    } else {
      console.warn("Received message from an untrusted origin:", event.origin);
    }
  },
  false
);

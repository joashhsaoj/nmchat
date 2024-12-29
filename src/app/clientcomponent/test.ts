fetch("/api/test", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "111111111",
    gender: "111111111",
    age: "111111111",
    location: "111111111",
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Data added:", data);
  })
  .catch((error) => {
    console.error("Error adding data:", error);
  });

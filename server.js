const express = require("express");
const path = require("path");
let fetch;
(async () => {
  fetch = (await import("node-fetch")).default;
})();

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/predict", async (req, res) => {
  const data = req.body;

  try {
    const response = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const prediction = await response.json();
    res.json(prediction);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to fetch prediction" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

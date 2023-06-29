const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const port = 3000;
const timeGap = 10000;

async function fetchData() {
  try {
    const response = await axios.get(process.env.api);
    console.log("Response data:", response.data);
    // Process the response data here
  } catch (error) {
    console.error("Error:", error.message);
    // Handle the error here
  }
}

// Endpoint to trigger continuous fetching
app.get("/fetch", async (req, res) => {
  res.send("Continuous fetching started.");
  while (true) {
    await fetchData();
    await new Promise((resolve) => setTimeout(resolve, timeGap));
  }
});

app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
});

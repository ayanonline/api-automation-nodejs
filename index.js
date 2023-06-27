const axios = require("axios");
require("dotenv").config();

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

const timeGap = 10000;

(async () => {
  while (true) {
    await fetchData();
    await new Promise((resolve) => setTimeout(resolve, timeGap));
  }
})();

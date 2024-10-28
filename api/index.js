import express from "express"; //type set as module in package.json so used import instead of require

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});

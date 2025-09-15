const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Ansible-deployed Node.js app 🚀");
});

app.listen(3007, () => {
  console.log("App running on http://localhost:3007");
});

const express = require("express");
const dotenv = require("dotenv");
const prisma = require("./db/prisma");
const port = 3000;
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", async (req, res) => {
  res.send("hello world");
});

app.get("/tasks", async (req, res) => {
  const response = await prisma.tasks.findMany({
    where: {
      parentId: null,
    },
  });
  res.send(JSON.stringify(response));
});

app.listen(port, () => {
  console.log("Listening on port", port);
});

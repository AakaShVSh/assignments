const express = require("express");

const connect = require("./configs/db");

const userController = require("./controllers/user.controller");

const app = express();

app.use(express.json());

app.use("/users", userController);

app.listen(5000, async () => {
  try {
    await connect();
    console.log("running on port 5000");
  } catch (err) {
    console.error(err.message);
  }
  
});

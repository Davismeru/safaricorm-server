const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(cors());
app.use(express.json());

const registerRouter = require("./routes/register");
app.use("/register", registerRouter);

const db = require("./models");
db.sequelize
  .sync({ alter: true })
  .then(() => {
    app.listen(process.env.PORT || 23387, () => {
      console.log("app running");
    });
  })
  .catch((err) => console.log(err));

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then((connection) => {})

  .catch((error) => console.log(error));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("app is  runniong");
});

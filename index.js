const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());
const cors = require("cors");

const PORT = process.env.PORT || 8082;
const routes = require("./routes/information.route");

app.use(cors());

app.options("*", cors());

app.use("/v1", routes);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});

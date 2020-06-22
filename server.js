const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 4000;
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//using routes
app.use("/", require("./routes/index"));

app.use(cors());

app.listen(PORT, () => {
  console.log(`server running at port${PORT}`);
});

//accessing database
mongoose
  .connect(process.env.database_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database accessed");
  })
  .catch((err) => {
    console.error(err);
  });

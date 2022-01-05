const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Initialize app
const app = express();

// Middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors("*"));

// routes
const dataPackageRouter = require("./routes/dataPackage");
app.use("/api/data-package-type", dataPackageRouter);

//start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

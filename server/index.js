const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Initialize app
const app = express();

// Re sync db
const db = require("./models/index");
db.sequelize.sync({ force: false }).then(() => {
  console.log("yes re-sync done!");
});

// Middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(cors("*"));

// routes
const routes = require("./routes");
app.use("/api/v1", routes);

//start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

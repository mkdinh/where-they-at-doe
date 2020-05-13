require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const keys = require("./keys");
const createRoutes = require("./routes");
const logger = require("./infrastructures/ioc").get("logger");

// Configure Express server
//--------------------------------------------------------
const app = express();
const routes = createRoutes();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("combined"));
app.use(routes);

// Start server
//--------------------------------------------------------
app.listen(keys.PORT, () => {
  logger.log(`listening to port: ${keys.PORT}`);
});

module.exports = app;

const path = require("path");
const Router = require("express").Router;
function createRoutes() {
  const apiRoutes = require("./api");

  const router = Router();
  router.use("/api", apiRoutes);
  router.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
  });
  return router;
}

module.exports = createRoutes;

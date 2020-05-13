const axios = require("axios");
const { UserController } = require("../../controllers");
const { UserService } = require("../../services");
const { UserRepository } = require("../repository");
const { Context } = require("../context");
const { IPService } = require("../ip");
const { Logger } = require("../logger");

module.exports = function (container) {
  container.register("axios", axios, [], true);
  container.register("console", console, [], true);
  container.register("logger", Logger, ["console"]);
  container.register("ipService", IPService, ["axios", "logger"]);
  container.register("context", Context, []);
  container.register("userRepository", UserRepository, ["context"]);
  container.register("userService", UserService, [
    "userRepository",
    "ipService",
  ]);
  container.register("userController", UserController, [
    "userService",
    "logger",
  ]);

  return container;
};

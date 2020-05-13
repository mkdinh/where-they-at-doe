module.exports = class Logger {
  constructor(logger) {
    this.logger = logger;
  }
  log(message) {
    this.logger.log(message);
  }

  info(message) {
    this.logger.info(message);
  }

  error(err) {
    const message = typeof err === "string" ? err : err.toString();
    this.logger.error(message);
  }
};

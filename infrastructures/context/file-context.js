const path = require("path");
const Collection = require("./collection");
const { FileUtils } = require("../../utils");

module.exports = class FileContext {
  constructor(logger) {
    this.logger = logger;
    this.user = new Collection(
      this.generateOrd("user.collection.json"),
      this.read,
      this.write
    );
  }

  async read(ord) {
    try {
      return FileUtils.read(ord);
    } catch (err) {
      this.logger.error(err);
    }
  }

  generateOrd(fileName) {
    return path.join(__dirname, "..", "..", "data", fileName);
  }
};

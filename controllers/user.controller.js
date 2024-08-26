module.exports = class UserController {
  constructor(userService, logger) {
    this.userService = userService;
    this.logger = logger;
  }

  async getUsers(req, res) {
    try {
      const users = await this.userService.getUsers();
      return res.json(users);
    } catch (err) {
      const message = err.toString();
      this.logger.error(message);
      res.status(400).json({ err: message });
    }
  }

  async getUser(req, res) {
    try {
      const userId = parseInt(req.params.id);
      const user = await this.userService.getUserById(userId);
      return res.json(user);
    } catch (err) {
      const message = err.toString();
      this.logger.error(message);
      res.status(400).json({ err: message });
    }
  }

  async updateUser(req, res) {
    try {
      const userId = parseInt(req.params.id);
      const body = req.body;
      const user = await this.userService.updateUser(userId, body);
      console.log(user)
      return res.json(user);
    } catch (err) {
      const message = err.toString();
      this.logger.error(message);
      res.status(400).json({ err: message });
    }
  }
};

module.exports = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    
    async getUsers(req, res) {
        try {
            const users = await this.userService.getUsers();
            return res.json(users);
        } catch (err) {
            console.log(err);
            res.status(400).json({ err: err.toString() });
        }
    }

    async getUser(req, res) {
        try {
            const userId = parseInt(req.params.id)
            const user = await this.userService.getUserById(userId);
            return res.json(user)
        } catch (err) {
            console.log(err);
            res.status(400).json({ err: err.toString() });
        }
    }
}
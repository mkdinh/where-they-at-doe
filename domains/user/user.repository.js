const User = require('./user');
module.exports = class UserRepository {
    constructor(context) { 
        this.context = context;
    }

    async get() {
        const models = await this.context.user.where();
        const domains = models.map(User.convertToDomain);
        return domains;
    }

    async single(id) {
        const model = await this.context.user.first(entity => entity.id === id);
        const domain = User.convertToDomain(model);
        return domain;
    }
}
const { User } = require('../../domains');
const { MetaData } = require('../../domains/value-objects');

module.exports = class UserRepository {
    constructor(context) { 
        this.context = context;
    }

    async get() {
        const models = await this.context.user.where();
        const domains = models.map(this.convertToDomain);
        return domains;
    }

    async single(id) {
        const model = await this.context.user.first(entity => entity.id === id);
        const domain = this.convertToDomain(model);
        return domain;
    }

    convertToDomain(model) {
        const { id, first_name, last_name, email, gender, app_version, profile_photo_url, meta } = model;

        const metaData = meta.map(d => new MetaData(d.address, d.ip_address, d.bio));

        const user = new User(id, first_name, last_name, email, gender, app_version, metaData);
        user.setProfilePhotoUrl(profile_photo_url);

        return user;
    }

    convertToModel(user) {
        const { id, firstName, lastName, email, gender, appVersion, profilePhotoUrl, meta } = user;
        const metaModels = meta.map(m => {
            const { address, ipAddress, bio } = m;
            return {
                bio,
                address,
                ip_adress: ipAddress
            };
        })
        return {
            id,
            email,
            gender,
            first_name: firstName,
            last_name: lastName,
            app_version: appVersion,
            profile_photo_url: profilePhotoUrl,
            meta: metaModels
        }
    }
}
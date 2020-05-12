
const { MetaData } = require('../value-objects');

module.exports = class User {
    constructor(id, firstName, lastName, email, gender, appVersion, metaData) {
        this.id = id;
        this.firstName = firstName;
        this.last_name = lastName;
        this.email = email;
        this.gender = gender;
        this.appVersion = appVersion;
        this.metaData = metaData;
        this.profilePhotoUrl = null;
    }

    setProfilePhotoUrl(url) {
        this.profilePhotoUrl = url;
    }

    static convertToDomain(model) {
        const { id, first_name, last_name, email, gender, app_version, profile_photo_url, meta } = model;

        const metaData = meta.map(d => new MetaData(d.address, d.ip_address, d.bio));

        const user = new User(id, first_name, last_name, email, gender, app_version, metaData);
        user.setProfilePhotoUrl(profile_photo_url);

        return user;
    }

    static convertToModel(user) {
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
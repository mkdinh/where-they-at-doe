import { User } from './user-repository';
import { MetaData } from '../value-objects';

export default class UserRepository {
    constructor(context) { 
        this.context = context;
    }

    get() {
        const models = this.context.user.get();
        const domains = models.map(this.convertToDomain);
        return domains;
    }

    single(id) {
        const model = this.context.user.get(entity => entity.id === id)[0];
        const domain = this.convertToDomain(model);
        return domain;
    }

    add(user) {
        const model = this.convertToModel(user);
        return this.context.user.add(model);
    }

    update(user) {
        const model = this.convertToModel(user);
        return this.context.user.update(model);
    }

    remove(id) {
        return this.context.user.remove(id);
    }

    convertToDomain(model) {
        const { id, first_name, last_name, email, gender, app_version, profile_photo_url } = model;

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
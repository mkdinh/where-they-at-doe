import path from 'path';
import Collection from './collection';
import { FileUtils } from '../../utils';

export default class DiskContext {
    constructor() {
        this.user = new Collection(this.generateOrd('user.collection.json'), this.read, this.write)
    }
    
    async read() {
        try {
            return FileUtils.read(this.ord); 
        }
        catch (e) {
            console.log(e)
        }
    }

    async write(data) {
        try {
            await FileUtils.writeToFile(this.ord, data);
            return true;
        }
        catch (e) {
            console.log(e)
            return false;
        }
    }

    generateOrd(fileName) {
        return path.join(__dirname, '..', '..', 'data', fileName);
    }
}
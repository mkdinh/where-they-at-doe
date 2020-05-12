const path = require('path')
const Collection = require('./collection');
const { FileUtils } = require('../../utils');

module.exports = class FileContext {
    constructor() {
        this.user = new Collection(this.generateOrd('user.collection.json'), this.read, this.write)
    }
    
    async read(ord) {
        try {
            return FileUtils.read(ord); 
        }
        catch (e) {
            console.log(e)
        }
    }

    generateOrd(fileName) {
        return path.join(__dirname, '..', '..', 'data', fileName);
    }
}
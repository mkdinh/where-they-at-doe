const fs = require('fs')
const { promisify } = require('util');
module.exports = class FileUtils {
    static async read(ord) {
        const read = promisify(fs.readFile);
        const data = await read(ord);
        return JSON.parse(data);
    }

    static write(ord, data) {
        const write = promisify(fs.writeFile);
        return write(ord, JSON.stringify(data));
    }
}